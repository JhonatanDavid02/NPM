import React from 'react';
import { NpmPackage, SearchCategory } from '../types/npm';
import { PackageCard } from './PackageCard';
import { Search, Loader2, Sparkles, Filter } from 'lucide-react';

interface PackageSearchProps {
  packages: NpmPackage[];
  isLoading: boolean;
  selectedCategory: SearchCategory;
  onSelectCategory: (cat: SearchCategory) => void;
  searchQuery: string;
  onSelectPackage: (pkg: NpmPackage) => void;
}

export const PackageSearch: React.FC<PackageSearchProps> = ({
  packages,
  isLoading,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSelectPackage
}) => {
  const categories: Array<{ id: SearchCategory; label: string }> = [
    { id: 'all', label: 'All Packages' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'security', label: 'Security & Auditing' },
    { id: 'build-tools', label: 'Build Tools' },
    { id: 'frameworks', label: 'Frameworks' }
  ];

  return (
    <section className="npm-search-section" id="packages">
      <div className="npm-container">
        <div className="search-section-header">
          <div>
            <div className="section-eyebrow">
              <Sparkles size={14} color="#cb3837" />
              <span>Real-Time Registry Explorer</span>
            </div>
            <h2 className="section-title">
              {searchQuery ? `Search results for "${searchQuery}"` : 'Featured & Hardened Packages'}
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="category-filters" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={selectedCategory === cat.id}
                className={`cat-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => onSelectCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Loading Indicator */}
        {isLoading ? (
          <div className="search-loading-state">
            <Loader2 className="spinner" size={32} color="#cb3837" />
            <p>Querying npm registry with cryptographic verification...</p>
          </div>
        ) : packages.length === 0 ? (
          <div className="search-empty-state">
            <Search size={42} color="#999" />
            <h3>No packages found matching "{searchQuery}"</h3>
            <p>Try searching for popular packages like <code>react</code>, <code>typescript</code>, <code>vite</code>, or <code>@jhonatandev/secure-core</code>.</p>
          </div>
        ) : (
          <div className="packages-grid">
            {packages.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} onSelect={onSelectPackage} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
