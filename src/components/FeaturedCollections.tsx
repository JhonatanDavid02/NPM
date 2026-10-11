import React from 'react';
import { Layers, ShieldCheck, Zap, Server, Code, Sparkles } from 'lucide-react';
import { NpmPackage } from '../types/npm';

interface FeaturedCollectionsProps {
  onSelectKeyword: (keyword: string) => void;
}

export const FeaturedCollections: React.FC<FeaturedCollectionsProps> = ({ onSelectKeyword }) => {
  const collections = [
    {
      icon: <Layers size={22} color="#cb3837" />,
      title: 'UI & Frontend Libraries',
      description: 'Declarative component libraries, state management, and modern DOM abstractions.',
      query: 'react'
    },
    {
      icon: <ShieldCheck size={22} color="#28a745" />,
      title: 'Supply-Chain & Security',
      description: 'Cryptographic attestation, SLSA verification, SBOM generation, and vulnerability scanners.',
      query: 'security'
    },
    {
      icon: <Zap size={22} color="#e87b00" />,
      title: 'Bundlers & Build Tools',
      description: 'Next-generation ESM dev servers, blazingly fast compilers, and code analyzers.',
      query: 'vite'
    },
    {
      icon: <Server size={22} color="#007bff" />,
      title: 'Server Runtimes & APIs',
      description: 'High throughput HTTP servers, microservices frameworks, and schema validation.',
      query: 'express'
    }
  ];

  return (
    <section className="npm-collections-section">
      <div className="npm-container">
        <div className="collections-header">
          <div className="section-eyebrow">
            <Sparkles size={14} color="#cb3837" />
            <span>Ecosystem Curations</span>
          </div>
          <h2 className="collections-title">Essential JavaScript Categories</h2>
          <p className="collections-subtitle">Explore verified packages pre-audited for supply-chain integrity.</p>
        </div>

        <div className="collections-grid">
          {collections.map((col, index) => (
            <div 
              key={index} 
              className="collection-card" 
              onClick={() => onSelectKeyword(col.query)}
            >
              <div className="col-icon-box">{col.icon}</div>
              <h3>{col.title}</h3>
              <p>{col.description}</p>
              <span className="col-action-text">Filter packages &rarr;</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
