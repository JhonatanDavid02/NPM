import React from 'react';
import { Check, ShieldAlert, Sparkles, Building2, User, Users } from 'lucide-react';

export const EnterpriseSection: React.FC = () => {
  return (
    <section className="npm-enterprise-section" id="pricing">
      <div className="npm-container">
        <div className="enterprise-header">
          <div className="section-eyebrow">
            <Sparkles size={14} color="#cb3837" />
            <span>Registry Tiers</span>
          </div>
          <h2 className="enterprise-title">
            Take your JavaScript development up a notch
          </h2>
          <p className="enterprise-subtitle">
            Flexible plans with built-in zero-trust supply chain validation, 2FA hardware enforcement, and unlimited private repositories.
          </p>
        </div>

        <div className="pricing-grid">
          {/* Free */}
          <div className="pricing-card">
            <div className="plan-icon"><User size={24} color="#333" /></div>
            <h3 className="plan-name">Public Open Source</h3>
            <div className="plan-price">
              <span className="price-amount">$0</span>
              <span className="price-period">forever</span>
            </div>
            <p className="plan-desc">For open-source creators and public package maintainers.</p>
            <ul className="plan-features">
              <li><Check size={16} color="#28a745" /> Unlimited public packages</li>
              <li><Check size={16} color="#28a745" /> SLSA-1 Provenance tracking</li>
              <li><Check size={16} color="#28a745" /> Public automated audit reports</li>
              <li><Check size={16} color="#28a745" /> Community support</li>
            </ul>
            <button className="npm-btn-outline plan-btn">Get Started</button>
          </div>

          {/* Pro */}
          <div className="pricing-card highlighted">
            <div className="plan-badge">Most Popular</div>
            <div className="plan-icon"><Users size={24} color="#cb3837" /></div>
            <h3 className="plan-name">NPM Pro Hardened</h3>
            <div className="plan-price">
              <span className="price-amount">$7</span>
              <span className="price-period">/ month</span>
            </div>
            <p className="plan-desc">For professional developers demanding verified supply chains.</p>
            <ul className="plan-features">
              <li><Check size={16} color="#28a745" /> Unlimited private packages</li>
              <li><Check size={16} color="#28a745" /> <strong>SLSA-3 Provenance Attestation</strong></li>
              <li><Check size={16} color="#28a745" /> Sigstore Cosign signature verification</li>
              <li><Check size={16} color="#28a745" /> Real-time typosquatting quarantine</li>
              <li><Check size={16} color="#28a745" /> Automated dependency patch alerts</li>
            </ul>
            <button className="npm-btn-primary plan-btn">Try Pro 30 Days</button>
          </div>

          {/* Enterprise */}
          <div className="pricing-card">
            <div className="plan-icon"><Building2 size={24} color="#007bff" /></div>
            <h3 className="plan-name">NPM Enterprise</h3>
            <div className="plan-price">
              <span className="price-amount">Custom</span>
              <span className="price-period">contact sales</span>
            </div>
            <p className="plan-desc">Mission-critical security for enterprise engineering teams.</p>
            <ul className="plan-features">
              <li><Check size={16} color="#28a745" /> Dedicated VPC / On-Premise registry</li>
              <li><Check size={16} color="#28a745" /> Hardware 2FA token requirement (YubiKey)</li>
              <li><Check size={16} color="#28a745" /> Pre-publish malware detonation sandbox</li>
              <li><Check size={16} color="#28a745" /> 99.99% SLA &amp; 24/7 dedicated security response</li>
            </ul>
            <button className="npm-btn-outline plan-btn">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
};
