import { Star } from 'lucide-react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
    >
      <div className="aspect-square overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-semibold">Out of Stock</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <span className="text-sm font-medium text-gray-600">{product.brand}</span>
        </div>
        <p className="text-sm text-gray-600 mb-2">{product.category}</p>
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm text-gray-600">{product.rating}</span>
        </div>
        <p className="text-lg font-bold text-gray-900">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}