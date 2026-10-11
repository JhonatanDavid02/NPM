import React, { useState } from 'react';
import { NpmPackage } from '../types/npm';
import { X, Copy, Check, Download, ShieldCheck, CheckCircle2, FileText, Layers, ExternalLink, ShieldAlert, Package, GitFork } from 'lucide-react';

interface PackageDetailModalProps {
  pkg: NpmPackage | null;
  onClose: () => void;
}

export const PackageDetailModal: React.FC<PackageDetailModalProps> = ({ pkg, onClose }) => {
  const [activeTab, setActiveTab] = useState<'readme' | 'security' | 'deps' | 'metadata'>('readme');
  const [copiedInstall, setCopiedInstall] = useState(false);

  if (!pkg) return null;

  const installCommand = `npm i ${pkg.name}`;

  const handleCopyInstall = () => {
    navigator.clipboard.writeText(installCommand);
    setCopiedInstall(true);
    setTimeout(() => setCopiedInstall(false), 2000);
  };

  return (
    <div className="npm-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="npm-modal-card package-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-header-pkg">
            <div className="pkg-badge-icon">
              <Package size={26} color="#cb3837" />
            </div>
            <div>
              <div className="pkg-header-top">
                <h2>{pkg.name}</h2>
                <span className="pkg-version-pill">v{pkg.version}</span>
                <span className="pkg-license-pill">{pkg.license}</span>
                <span className="pkg-security-pill">
                  <ShieldCheck size={13} color="#28a745" /> {pkg.securityAudit.slsaLevel} Attested
                </span>
              </div>
              <p className="pkg-modal-desc">{pkg.description}</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Quick Install Bar */}
        <div className="modal-install-bar">
          <div className="install-left">
            <span className="install-label">Install</span>
            <code className="install-snippet">{installCommand}</code>
          </div>
          <button className="install-copy-btn" onClick={handleCopyInstall}>
            {copiedInstall ? (
              <>
                <Check size={14} color="#28a745" /> Copied
              </>
            ) : (
              <>
                <Copy size={14} /> Copy command
              </>
            )}
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="modal-tabs">
          <button 
            className={`tab-btn ${activeTab === 'readme' ? 'active' : ''}`}
            onClick={() => setActiveTab('readme')}
          >
            <FileText size={16} /> Readme
          </button>
          <button 
            className={`tab-btn ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            <ShieldCheck size={16} color="#28a745" /> Supply Chain Security ({pkg.securityAudit.supplyChainScore}/100)
          </button>
          <button 
            className={`tab-btn ${activeTab === 'deps' ? 'active' : ''}`}
            onClick={() => setActiveTab('deps')}
          >
            <Layers size={16} /> Dependencies ({pkg.dependenciesCount || 0})
          </button>
          <button 
            className={`tab-btn ${activeTab === 'metadata' ? 'active' : ''}`}
            onClick={() => setActiveTab('metadata')}
          >
            <GitFork size={16} /> Package Info
          </button>
        </div>

        {/* Modal Tab Content */}
        <div className="modal-body tab-content-area">
          {activeTab === 'readme' && (
            <div className="tab-readme">
              <pre className="readme-pre">
                {pkg.readmeSnippet || `# ${pkg.name}

${pkg.description}

## Installation
` + installCommand}
              </pre>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="tab-security">
              <div className="security-summary-card">
                <div className="score-circle">
                  <span className="score-val">{pkg.securityAudit.supplyChainScore}</span>
                  <span className="score-sub">Security Score</span>
                </div>
                <div className="score-details">
                  <h4>Cryptographic Supply Chain Attestation</h4>
                  <p>
                    This package has been audited against known historical attack vectors (dependency confusion, hijacked maintainer tokens, typosquatting, and malicious postinstall scripts).
                  </p>
                </div>
              </div>

              <div className="audit-checklist">
                <div className="check-row verified">
                  <CheckCircle2 size={18} color="#28a745" />
                  <div>
                    <strong>SLSA Provenance: {pkg.securityAudit.slsaLevel}</strong>
                    <p>Build executed on hermetic, isolated CI/CD environment with verified source-to-binary mapping.</p>
                  </div>
                </div>

                <div className="check-row verified">
                  <CheckCircle2 size={18} color="#28a745" />
                  <div>
                    <strong>Sigstore Cosign Signature: Keyless OIDC Verified</strong>
                    <p>Signed using ephemeral OIDC tokens directly bound to verified developer cryptographic identities.</p>
                  </div>
                </div>

                <div className="check-row verified">
                  <CheckCircle2 size={18} color="#28a745" />
                  <div>
                    <strong>Malware &amp; Script Scanner: {pkg.securityAudit.malwareStatus}</strong>
                    <p>Zero malicious obfuscation, zero unauthorized telemetry or coinminer signatures detected.</p>
                  </div>
                </div>

                <div className="check-row verified">
                  <CheckCircle2 size={18} color="#28a745" />
                  <div>
                    <strong>Known Vulnerabilities (CVE/GHSA): {pkg.securityAudit.vulnerabilitiesCount}</strong>
                    <p>All transitive dependencies audited against the GitHub Advisory Database.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'deps' && (
            <div className="tab-deps">
              <div className="deps-info-box">
                <h4>Direct Dependencies: {pkg.dependenciesCount || 0}</h4>
                <p>Minimal dependencies drastically reduce supply-chain attack surface.</p>
              </div>
              <ul className="deps-list">
                <li><code>@types/node</code> &bull; devDependency (TypeScript bindings)</li>
                <li><code>@vitejs/plugin-react</code> &bull; build tool integration</li>
                <li><code>lucide-react</code> &bull; clean SVG icons</li>
              </ul>
            </div>
          )}

          {activeTab === 'metadata' && (
            <div className="tab-metadata">
              <div className="metadata-grid">
                <div className="meta-card">
                  <span className="meta-title">Weekly Downloads</span>
                  <span className="meta-val">{pkg.weeklyDownloads.toLocaleString()}</span>
                </div>
                <div className="meta-card">
                  <span className="meta-title">Unpacked Size</span>
                  <span className="meta-val">{pkg.unpackedSize || '1.2 MB'}</span>
                </div>
                <div className="meta-card">
                  <span className="meta-title">Total Files</span>
                  <span className="meta-val">{pkg.totalFiles || 24}</span>
                </div>
                <div className="meta-card">
                  <span className="meta-title">License</span>
                  <span className="meta-val">{pkg.license}</span>
                </div>
              </div>

              {pkg.repository && (
                <div className="repo-link-box">
                  <span>Source Repository:</span>
                  <a href={pkg.repository} target="_blank" rel="noopener noreferrer">
                    {pkg.repository} <ExternalLink size={14} />
                  </a>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button className="npm-btn-outline" onClick={onClose}>Close</button>
          <button className="npm-btn-primary" onClick={handleCopyInstall}>
            <Copy size={14} /> Copy Install Command
          </button>
        </div>
      </div>
    </div>
  );
};
