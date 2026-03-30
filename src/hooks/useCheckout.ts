import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useCart } from '@/context/CartContext';
import { getProductImage } from '@/data/productImages';

export const useCheckout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { items } = useCart();

  const checkout = async () => {
    setIsLoading(true);
    try {
      const cartItems = items.map(item => ({
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
        image: getProductImage(item.product.slug),
      }));

      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { items: cartItems },
      });

      if (error) throw error;
      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error('Checkout error:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { checkout, isLoading };
};
