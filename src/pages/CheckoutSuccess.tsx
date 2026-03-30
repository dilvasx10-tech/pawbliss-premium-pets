import { CheckCircle, Package, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CheckoutSuccess = () => (
  <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#FAFAF7' }}>
    <div className="max-w-md w-full text-center space-y-6">
      <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center" style={{ backgroundColor: '#2D4A3E20' }}>
        <CheckCircle className="w-10 h-10" style={{ color: '#2D4A3E' }} />
      </div>
      <h1 className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#1A1A1A' }}>
        Order Confirmed! 🎉
      </h1>
      <p className="text-base" style={{ color: '#555' }}>
        Thank you for your purchase! Your Calm Pet Starter Kit is being prepared and will ship within 24 hours.
      </p>
      <div className="rounded-xl p-5 space-y-3" style={{ backgroundColor: '#F5F0E8', border: '1px solid #e8e4dc' }}>
        <div className="flex items-center gap-3">
          <Package className="w-5 h-5" style={{ color: '#2D4A3E' }} />
          <span className="text-sm font-medium">You'll receive a shipping confirmation email shortly</span>
        </div>
        <p className="text-xs" style={{ color: '#888' }}>
          Check your inbox (and spam folder) for order details and tracking info.
        </p>
      </div>
      <div className="pt-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#2D4A3E', color: '#FAFAF7' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Continue Shopping
        </Link>
      </div>
    </div>
  </div>
);

export default CheckoutSuccess;
