import React from 'react';
import { NpmPackage } from '../types/npm';
import { Download, ShieldCheck, CheckCircle2, ChevronRight, Tag } from 'lucide-react';

interface PackageCardProps {
  pkg: NpmPackage;
  onSelect: (pkg: NpmPackage) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({ pkg, onSelect }) => {
  const formattedDownloads = (downloads: number) => {
    if (downloads >= 1_000_000) {
      return (downloads / 1_000_000).toFixed(1) + 'M';
    }
    if (downloads >= 1_000) {
      return (downloads / 1_000).toFixed(1) + 'k';
    }
    return downloads.toString();
  };

  return (
    <article className="npm-pkg-card" onClick={() => onSelect(pkg)}>
      <div className="pkg-card-main">
        <div className="pkg-title-row">
          <h3 className="pkg-name">
            {pkg.name}
          </h3>
          <span className="pkg-version-badge">v{pkg.version}</span>
          <span className="pkg-license-badge">{pkg.license}</span>
        </div>

        <p className="pkg-description">
          {pkg.description}
        </p>

        {/* Tags */}
        {pkg.keywords && pkg.keywords.length > 0 && (
          <div className="pkg-keywords">
            {pkg.keywords.slice(0, 5).map((kw, i) => (
              <span key={i} className="kw-pill">
                <Tag size={10} /> {kw}
              </span>
            ))}
          </div>
        )}

        <div className="pkg-meta-footer">
          <div className="publisher-info">
            <span className="publisher-avatar">
              {pkg.publisher.username.slice(0, 2).toUpperCase()}
            </span>
            <span className="publisher-name">
              <strong>{pkg.publisher.username}</strong> published {new Date(pkg.date).toLocaleDateString()}
            </span>
          </div>

          <div className="pkg-indicators">
            <div className="indicator-downloads" title="Weekly Downloads">
              <Download size={14} />
              <span>{formattedDownloads(pkg.weeklyDownloads)}/wk</span>
            </div>

            <div className="security-tag" title="SLSA Provenance & Security Verification">
              <ShieldCheck size={14} color="#28a745" />
              <span>{pkg.securityAudit.slsaLevel}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pkg-card-cta">
        <ChevronRight size={18} className="arrow-icon" />
      </div>
    </article>
  );
};
