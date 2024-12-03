import { X } from 'lucide-react';
import { Product } from '../types/product';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 bg-white/80 rounded-full hover:bg-white"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] object-cover"
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
          <p className="text-sm text-gray-600 mt-1">{product.category}</p>
          <p className="text-xl font-bold text-gray-900 mt-4">
            ${product.price.toFixed(2)}
          </p>
          <p className="mt-4 text-gray-700">{product.description}</p>
          <button className="mt-6 w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}