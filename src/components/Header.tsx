import React from 'react';
import { Search, Heart, ShieldCheck, Lock, ExternalLink } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
  onOpenSecurityModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  onSearchSubmit,
  onOpenSecurityModal
}) => {
  return (
    <header className="npm-header">
      {/* 1. Iconic NPM Rainbow Strip */}
      <div className="npm-rainbow-bar"></div>

      {/* 2. Top utility bar */}
      <div className="npm-top-nav">
        <div className="npm-container top-nav-inner">
          <div className="top-nav-left">
            <span className="heart-icon"><Heart size={14} fill="#cb3837" color="#cb3837" /></span>
            <span className="heart-text">Never Pass Malice &bull; Verified Supply-Chain Registry</span>
          </div>
          <div className="top-nav-right">
            <a href="#pricing" className="top-link">Pro</a>
            <a href="#teams" className="top-link">Teams</a>
            <a href="#pricing" className="top-link">Pricing</a>
            <a href="#docs" className="top-link">Documentation</a>
            <button onClick={onOpenSecurityModal} className="top-security-badge" title="Inspect Post-Attack Hardened Architecture">
              <ShieldCheck size={14} /> Hardened Architecture
            </button>
          </div>
        </div>
      </div>

      {/* 3. Main NPM search & brand bar */}
      <div className="npm-main-nav">
        <div className="npm-container main-nav-inner">
          {/* NPM Logo */}
          <a href="/" className="npm-logo-link" aria-label="npm Home">
            <svg viewBox="0 0 780 250" className="npm-svg-logo" aria-hidden="true">
              <path fill="#cb3837" d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z" />
            </svg>
          </a>

          {/* Search Bar */}
          <form className="npm-search-form" onSubmit={onSearchSubmit} role="search">
            <div className="search-input-wrap">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search packages (e.g. react, typescript, @jhonatandev/secure-core)"
                className="npm-search-input"
                aria-label="Search packages"
              />
            </div>
            <button type="submit" className="npm-search-btn">
              Search
            </button>
          </form>

          {/* Actions */}
          <div className="npm-auth-actions">
            <button type="button" className="npm-btn-outline" onClick={onOpenSecurityModal}>
              <Lock size={14} /> Audit Log
            </button>
            <a href="https://github.com/JhonatanDavid02" target="_blank" rel="noopener noreferrer" className="npm-btn-primary">
              Jhonatan Ruiz <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
