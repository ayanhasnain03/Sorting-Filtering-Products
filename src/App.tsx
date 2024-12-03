import { useState, useMemo } from 'react';
import { ShoppingBag } from 'lucide-react';

import { FilterSidebar } from './components/FilterSidebar';
import { SortDropdown } from './components/SortDropdown';
import { ProductGrid } from './components/ProductGrid';
import { ProductModal } from './components/ProductModal';
import { products } from './data/products';
import { Product } from './types/product';


function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [showInStock, setShowInStock] = useState(false);
  const [sortBy, setSortBy] = useState<'name' | 'price-asc' | 'price-desc' | 'rating'>('name');

  const categories = useMemo(() =>
    Array.from(new Set(products.map(p => p.category))).sort(),
    []
  );

  const brands = useMemo(() =>
    Array.from(new Set(products.map(p => p.brand))).sort(),
    []
  );

  const maxPrice = useMemo(() =>
    Math.max(...products.map(p => p.price)),
    []
  );

  const filteredProducts = useMemo(() => {
    return products
      .filter(product =>
        (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
        (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1] &&
        (!showInStock || product.inStock)
      )
      .sort((a, b) => {
        switch (sortBy) {
          case 'name':
            return a.name.localeCompare(b.name);
          case 'price-asc':
            return a.price - b.price;
          case 'price-desc':
            return b.price - a.price;
          case 'rating':
            return b.rating - a.rating;
          default:
            return 0;
        }
      });
  }, [selectedCategories, selectedBrands, priceRange, showInStock, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-6 h-6" />
            <span className="text-xl font-bold">Store</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Shop</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>



      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          {/* Sidebar */}
          <FilterSidebar
            categories={categories}
            brands={brands}
            selectedCategories={selectedCategories}
            selectedBrands={selectedBrands}
            priceRange={priceRange}
            maxPrice={maxPrice}
            onCategoryChange={(category) => {
              setSelectedCategories(prev =>
                prev.includes(category)
                  ? prev.filter(c => c !== category)
                  : [...prev, category]
              );
            }}
            onBrandChange={(brand) => {
              setSelectedBrands(prev =>
                prev.includes(brand)
                  ? prev.filter(b => b !== brand)
                  : [...prev, brand]
              );
            }}
            onPriceChange={setPriceRange}
            onStockChange={setShowInStock}
            showInStock={showInStock}
          />

          {/* Product Section */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Products ({filteredProducts.length})
              </h2>
              <SortDropdown
                sortBy={sortBy}
                onSortChange={setSortBy}
              />
            </div>
            <ProductGrid
              products={filteredProducts}
              onProductClick={setSelectedProduct}
            />
          </div>
        </div>
      </main>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">
                We offer the best selection of premium products for our discerning customers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Shop</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                Email: contact@store.com<br />
                Phone: (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
