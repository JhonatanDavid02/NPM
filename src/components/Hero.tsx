import React, { useState } from 'react';
import { Copy, Check, Terminal, Shield, ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onExplorePackages: () => void;
  onOpenSecurityModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePackages, onOpenSecurityModal }) => {
  const [copied, setCopied] = useState(false);
  const cliCommand = 'npm i @jhonatandev/secure-core';

  const handleCopy = () => {
    navigator.clipboard.writeText(cliCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="npm-hero-section">
      <div className="npm-container hero-inner">
        <div className="hero-content">
          <div className="hero-tag">
            <Sparkles size={14} color="#cb3837" />
            <span>Hardened JavaScript Registry Replica &bull; Supply Chain Defense</span>
          </div>

          <h1 className="hero-title">
            Build amazing things
          </h1>

          <p className="hero-subtitle">
            We're GitHub's package manager for JavaScript, the world's largest software registry. 
            Now reinforced with cryptographic provenance, SLSA-3 supply chain attestation, and zero-trust distribution to permanently prevent package tampering.
          </p>

          <div className="hero-actions">
            <button className="npm-btn-hero-primary" onClick={onExplorePackages}>
              Explore Hardened Packages <ArrowRight size={16} />
            </button>
            <button className="npm-btn-hero-secondary" onClick={onOpenSecurityModal}>
              <Shield size={16} color="#cb3837" />
              Incident Response Blueprint
            </button>
          </div>

          {/* Interactive CLI Command Box */}
          <div className="hero-cli-card">
            <div className="cli-header">
              <span className="cli-dot red"></span>
              <span className="cli-dot yellow"></span>
              <span className="cli-dot green"></span>
              <span className="cli-title">Install Hardened Supply-Chain Core</span>
            </div>
            <div className="cli-body">
              <div className="cli-prompt">
                <Terminal size={16} className="terminal-icon" />
                <code className="cli-text">{cliCommand}</code>
              </div>
              <button 
                onClick={handleCopy} 
                className="cli-copy-btn" 
                title="Copy command to clipboard"
                aria-label="Copy command"
              >
                {copied ? (
                  <>
                    <Check size={14} color="#28a745" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="hero-stats-grid">
            <div className="stat-item">
              <span className="stat-number">3.1M+</span>
              <span className="stat-label">Packages Verified</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">SLSA-3</span>
              <span className="stat-label">Provenance Attested</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">0-Trust</span>
              <span className="stat-label">Supply Chain Sandbox</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">pnpm &amp; TS Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
