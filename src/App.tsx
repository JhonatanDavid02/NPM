import React, { useState, useEffect, useTransition } from 'react';
import { Header } from './components/Header';
import { SecurityBanner } from './components/SecurityBanner';
import { Hero } from './components/Hero';
import { PackageSearch } from './components/PackageSearch';
import { PackageDetailModal } from './components/PackageDetailModal';
import { SecurityArchitectureModal } from './components/SecurityArchitectureModal';
import { FeaturedCollections } from './components/FeaturedCollections';
import { EnterpriseSection } from './components/EnterpriseSection';
import { Footer } from './components/Footer';
import { NpmPackage, SearchCategory } from './types/npm';
import { POPULAR_PACKAGES, searchNpmPackages } from './services/npmApi';

export const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [packages, setPackages] = useState<NpmPackage[]>(POPULAR_PACKAGES);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<SearchCategory>('all');
  const [selectedPackage, setSelectedPackage] = useState<NpmPackage | null>(null);
  const [isSecurityModalOpen, setIsSecurityModalOpen] = useState(false);
  const [, startTransition] = useTransition();

  // Debounced search
  useEffect(() => {
    if (!searchQuery.trim()) {
      filterByCategory(selectedCategory, POPULAR_PACKAGES);
      return;
    }

    const timer = setTimeout(async () => {
      setIsLoading(true);
      try {
        const results = await searchNpmPackages(searchQuery);
        startTransition(() => {
          filterByCategory(selectedCategory, results);
          setIsLoading(false);
        });
      } catch (err) {
        console.error('Search error:', err);
        setIsLoading(false);
      }
    }, 280);

    return () => clearTimeout(timer);
  }, [searchQuery, selectedCategory]);

  const filterByCategory = (category: SearchCategory, baseList: NpmPackage[] = POPULAR_PACKAGES) => {
    if (category === 'all') {
      setPackages(baseList);
      return;
    }

    const filtered = baseList.filter(pkg => {
      const allText = (pkg.name + ' ' + pkg.description + ' ' + (pkg.keywords || []).join(' ')).toLowerCase();
      if (category === 'frontend') {
        return allText.includes('react') || allText.includes('ui') || allText.includes('frontend') || allText.includes('css') || allText.includes('tailwind') || allText.includes('icon');
      }
      if (category === 'backend') {
        return allText.includes('express') || allText.includes('api') || allText.includes('server') || allText.includes('rest') || allText.includes('node');
      }
      if (category === 'security') {
        return allText.includes('security') || allText.includes('supply-chain') || allText.includes('audit') || allText.includes('schema') || allText.includes('validation');
      }
      if (category === 'build-tools') {
        return allText.includes('vite') || allText.includes('typescript') || allText.includes('bundler') || allText.includes('compiler') || allText.includes('build');
      }
      if (category === 'frameworks') {
        return allText.includes('framework') || allText.includes('react') || allText.includes('next') || allText.includes('express') || allText.includes('vue');
      }
      return true;
    });

    setPackages(filtered);
  };

  const handleCategoryChange = (category: SearchCategory) => {
    setSelectedCategory(category);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const pkgSection = document.getElementById('packages');
    if (pkgSection) {
      pkgSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectKeyword = (keyword: string) => {
    setSearchQuery(keyword);
    const pkgSection = document.getElementById('packages');
    if (pkgSection) {
      pkgSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="npm-app-wrapper">
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearchSubmit={handleSearchSubmit}
        onOpenSecurityModal={() => setIsSecurityModalOpen(true)}
      />

      <SecurityBanner
        onLearnMore={() => setIsSecurityModalOpen(true)}
      />

      <main>
        <Hero
          onExplorePackages={() => {
            const el = document.getElementById('packages');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenSecurityModal={() => setIsSecurityModalOpen(true)}
        />

        <PackageSearch
          packages={packages}
          isLoading={isLoading}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
          searchQuery={searchQuery}
          onSelectPackage={setSelectedPackage}
        />

        <FeaturedCollections
          onSelectKeyword={handleSelectKeyword}
        />

        <EnterpriseSection />
      </main>

      <Footer />

      {/* Package Inspector Modal */}
      <PackageDetailModal
        pkg={selectedPackage}
        onClose={() => setSelectedPackage(null)}
      />

      {/* Security Architecture Post-Mortem Modal */}
      <SecurityArchitectureModal
        isOpen={isSecurityModalOpen}
        onClose={() => setIsSecurityModalOpen(false)}
      />
    </div>
  );
};

export default App;
