import { Filter, Star } from 'lucide-react';

interface FilterSidebarProps {
  categories: string[];
  brands: string[];
  selectedCategories: string[];
  selectedBrands: string[];
  priceRange: [number, number];
  maxPrice: number;
  onCategoryChange: (category: string) => void;
  onBrandChange: (brand: string) => void;
  onPriceChange: (range: [number, number]) => void;
  onStockChange: (inStock: boolean) => void;
  showInStock: boolean;
}

export function FilterSidebar({
  categories,
  brands,
  selectedCategories,
  selectedBrands,
  priceRange,
  maxPrice,
  onCategoryChange,
  onBrandChange,
  onPriceChange,
  onStockChange,
  showInStock,
}: FilterSidebarProps) {
  return (
    <div className="w-64 bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="w-5 h-5" />
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Categories</h3>
        {categories.map((category) => (
          <label key={category} className="flex items-center gap-2 mb-2">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => onCategoryChange(category)}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span className="text-sm">{category}</span>
          </label>
        ))}
      </div>

      {/* Brands */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Brands</h3>
        {brands.map((brand) => (
          <label key={brand} className="flex items-center gap-2 mb-2">
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => onBrandChange(brand)}
              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <span className="text-sm">{brand}</span>
          </label>
        ))}
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="font-medium mb-3">Price Range</h3>
        <div className="flex items-center gap-2 mb-2">
          <input
            type="range"
            min={0}
            max={maxPrice}
            value={priceRange[1]}
            onChange={(e) => onPriceChange([priceRange[0], Number(e.target.value)])}
            className="w-full"
          />
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Stock Filter */}
      <div className="mb-6">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showInStock}
            onChange={(e) => onStockChange(e.target.checked)}
            className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <span className="text-sm">In Stock Only</span>
        </label>
      </div>
    </div>
  );
}