import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Modern Leather Backpack',
    price: 129.99,
    description: 'Handcrafted leather backpack perfect for daily use',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
    category: 'Bags',
    brand: 'Artisan',
    rating: 4.5,
    inStock: true
  },
  {
    id: '2',
    name: 'Minimalist Watch',
    price: 199.99,
    description: 'Elegant timepiece with Swiss movement',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',
    category: 'Accessories',
    brand: 'Timeless',
    rating: 4.8,
    inStock: true
  },
  {
    id: '3',
    name: 'Wireless Headphones',
    price: 249.99,
    description: 'Premium sound quality with noise cancellation',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    category: 'Electronics',
    brand: 'SoundMax',
    rating: 4.7,
    inStock: true
  },
  {
    id: '4',
    name: 'Cotton Sweater',
    price: 79.99,
    description: 'Comfortable and stylish winter wear',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    category: 'Clothing',
    brand: 'Comfort+',
    rating: 4.3,
    inStock: false
  },
  {
    id: '5',
    name: 'Premium Laptop Bag',
    price: 149.99,
    description: 'Professional laptop bag with multiple compartments',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    category: 'Bags',
    brand: 'Artisan',
    rating: 4.6,
    inStock: true
  }
];