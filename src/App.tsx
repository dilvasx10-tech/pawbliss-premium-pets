import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";

import Index from "./pages/Index";
import ProductPage from "./pages/ProductPage";
import CollectionsPage from "./pages/CollectionsPage";
import AboutPage from "./pages/AboutPage";
import FAQPage from "./pages/FAQPage";
import CalmKitLanding from "./pages/CalmKitLanding";
import NotFound from "./pages/NotFound";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/calm-kit" element={<CalmKitLanding />} />
            <Route path="*" element={
              <>
                <Header />
                <CartDrawer />
                <main className="min-h-screen">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/product/:slug" element={<ProductPage />} />
                    <Route path="/collections" element={<CollectionsPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
              </>
            } />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
