import React from 'react';
import { X, ShieldCheck, AlertTriangle, KeyRound, Check, FileCheck, Layers, ExternalLink } from 'lucide-react';

interface SecurityArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SecurityArchitectureModal: React.FC<SecurityArchitectureModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="npm-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="npm-modal-card security-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-title">
            <div className="security-title-icon">
              <ShieldCheck size={24} color="#28a745" />
            </div>
            <div>
              <h3>Supply-Chain Security &amp; Registry Migration Blueprint</h3>
              <p className="modal-subtitle">Mitigating historical npm vulnerabilities through cryptographic provenance and zero-trust distribution</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {/* Historical Incident Context */}
          <div className="audit-section warning-box">
            <div className="section-title">
              <AlertTriangle size={18} color="#e06c00" />
              <h4>Why This Hardened Registry Migration Exists</h4>
            </div>
            <p>
              The JavaScript npm ecosystem has been the target of high-profile supply-chain attacks including:
            </p>
            <ul className="incident-list">
              <li>
                <strong>Maintainer Credential Takeovers (e.g. <code>ua-parser-js</code>, <code>coa</code>, <code>rc</code>):</strong> Attackers compromised publisher tokens via phishing or credential stuffing, releasing version releases containing cryptocurrency miners and credential stealers.
              </li>
              <li>
                <strong>Typosquatting &amp; Dependency Confusion:</strong> Publishing spoofed packages mimicking enterprise internal modules or common utility spellings.
              </li>
              <li>
                <strong>Malicious Nested Subdependencies (e.g. <code>event-stream</code> incident):</strong> Social engineering transfer of dormant popular packages to inject backdoors targeting specific wallets and keychains.
              </li>
            </ul>
          </div>

          {/* Hardened Architecture Pillars */}
          <div className="audit-section">
            <div className="section-title">
              <Layers size={18} color="#007bff" />
              <h4>Architectural Defenses Implemented in this Replica</h4>
            </div>
            <div className="pillars-grid">
              <div className="pillar-card">
                <div className="pillar-header">
                  <FileCheck size={20} color="#28a745" />
                  <h5>SLSA Level 3 Provenance</h5>
                </div>
                <p>Every tarball package must originate from an isolated, auditable CI/CD runner (GitHub Actions / Cloud Build) with cryptographic attestation verifying exact commit-to-artifact mapping.</p>
              </div>

              <div className="pillar-card">
                <div className="pillar-header">
                  <KeyRound size={20} color="#007bff" />
                  <h5>Sigstore Cosign Keyless Signatures</h5>
                </div>
                <p>Eliminates static long-lived publishing API tokens. Uses ephemeral OIDC tokens tied to verified developer identities, ensuring non-repudiation and zero stolen token exposure.</p>
              </div>

              <div className="pillar-card">
                <div className="pillar-header">
                  <ShieldCheck size={20} color="#cb3837" />
                  <h5>Zero-Trust Runtime Sandbox</h5>
                </div>
                <p>Post-install scripts (<code>postinstall</code>, <code>preinstall</code>) are sandboxed and subjected to AST static analysis prior to package distribution, halting unauthorized network calls.</p>
              </div>

              <div className="pillar-card">
                <div className="pillar-header">
                  <Check size={20} color="#6f42c1" />
                  <h5>Automated Tarball Quarantine</h5>
                </div>
                <p>New versions published at anomalous intervals or with drastic diff size spikes are routed to automated behavioral detonation analysis before reaching global CDN nodes.</p>
              </div>
            </div>
          </div>

          {/* Developer Attribution */}
          <div className="audit-section author-box">
            <h4>Engineering &amp; Hardening Lead</h4>
            <div className="author-details">
              <div>
                <strong>Jhonatan David Ruiz Bernal</strong> &bull; Systems Engineering &amp; Full Stack Software Developer
                <p className="author-creds">
                  Experience in secure web interfaces, network topologies (Cisco Packet Tracer), and high-availability frontend systems (React, TypeScript, pnpm).
                </p>
              </div>
              <a href="https://github.com/JhonatanDavid02" target="_blank" rel="noopener noreferrer" className="github-btn">
                View GitHub Repositories <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="npm-btn-primary" onClick={onClose}>
            Acknowledge &amp; Return to Registry
          </button>
        </div>
      </div>
    </div>
  );
};
