import { ArrowDownAZ, ArrowDownWideNarrow } from 'lucide-react';

type SortOption = 'name' | 'price-asc' | 'price-desc' | 'rating';

interface SortDropdownProps {
  sortBy: SortOption;
  onSortChange: (option: SortOption) => void;
}

export function SortDropdown({ sortBy, onSortChange }: SortDropdownProps) {
  return (
    <div className="flex items-center gap-2">
      <ArrowDownAZ className="w-5 h-5" />
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value as SortOption)}
        className="border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      >
        <option value="name">Name</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}