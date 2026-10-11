import React from 'react';
import { ShieldAlert, CheckCircle2, ChevronRight, LockKeyhole } from 'lucide-react';

interface SecurityBannerProps {
  onLearnMore: () => void;
}

export const SecurityBanner: React.FC<SecurityBannerProps> = ({ onLearnMore }) => {
  return (
    <aside className="security-banner-strip" aria-label="Security Hardening Notice">
      <div className="npm-container security-banner-inner">
        <div className="security-banner-left">
          <div className="security-icon-badge">
            <ShieldAlert size={20} />
          </div>
          <div className="security-text">
            <strong>Supply-Chain Hardening Architecture &bull; Post-Incident Security Response</strong>
            <p>
              In response to historical ecosystem attacks (credential hijacking, <code>ua-parser-js</code> malware injection, and malicious nested dependencies), this registry replica implements <strong>SLSA-3 Provenance</strong>, <strong>Sigstore Cosign signatures</strong>, and <strong>Hardware 2FA verification</strong> for all published tarballs.
            </p>
          </div>
        </div>
        <div className="security-banner-right">
          <button onClick={onLearnMore} className="security-audit-btn">
            <LockKeyhole size={14} /> Security Blueprint &amp; Audit <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </aside>
  );
};
