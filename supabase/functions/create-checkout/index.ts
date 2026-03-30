import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const origin = req.headers.get("origin")
      || req.headers.get("referer")?.replace(/\/$/, "")
      || "https://pawbliss-premium-pets.lovable.app";

    const { items } = await req.json();

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

    if (items?.length) {
      for (const item of items) {
        // Only include images that are valid absolute URLs
        const images: string[] = [];
        if (item.image && item.image.startsWith("http")) {
          images.push(item.image);
        }

        lineItems.push({
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
              ...(images.length > 0 ? { images } : {}),
            },
            unit_amount: Math.round(item.price * 100),
          },
          quantity: item.quantity || 1,
        });
      }
    } else {
      lineItems.push({
        price: "price_1TGZbbC2It0cAM7DBKAN9BQg",
        quantity: 1,
      });
    }

    console.log("[create-checkout] origin:", origin, "lineItems:", lineItems.length);

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: `${origin}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/calm-kit`,
      shipping_address_collection: {
        allowed_countries: ["US", "CA", "GB", "AU"],
      },
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("[create-checkout] Error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
