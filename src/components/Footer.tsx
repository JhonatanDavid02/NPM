import React from 'react';
import { ExternalLink, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="npm-footer">
      <div className="npm-rainbow-bar"></div>
      
      <div className="npm-container footer-main">
        <div className="footer-columns">
          {/* Brand Col */}
          <div className="footer-col brand-col">
            <svg viewBox="0 0 780 250" className="npm-footer-logo" aria-hidden="true">
              <path fill="#ffffff" d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z" />
            </svg>
            <p className="footer-brand-desc">
              Hardened JavaScript Registry replica engineered by <strong>Jhonatan David Ruiz Bernal</strong>.
            </p>
            <div className="footer-developer-badge">
              <ShieldCheck size={14} color="#28a745" />
              <span>Zero-Trust Architecture &bull; React 19 + TypeScript + pnpm</span>
            </div>
          </div>

          {/* Col 1: Help */}
          <div className="footer-col">
            <h4>Support &amp; Help</h4>
            <ul>
              <li><a href="#docs">Documentation</a></li>
              <li><a href="#community">Community Discussions</a></li>
              <li><a href="#advisories">Security Advisories</a></li>
              <li><a href="#status">Registry Status</a></li>
              <li><a href="#contact">Contact Security Team</a></li>
            </ul>
          </div>

          {/* Col 2: Company */}
          <div className="footer-col">
            <h4>Ecosystem</h4>
            <ul>
              <li><a href="#about">About npm</a></li>
              <li><a href="#blog">Engineering Blog</a></li>
              <li><a href="#press">Press &amp; Announcements</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>

          {/* Col 3: Terms */}
          <div className="footer-col">
            <h4>Terms &amp; Policies</h4>
            <ul>
              <li><a href="#policies">Policies</a></li>
              <li><a href="#terms">Terms of Use</a></li>
              <li><a href="#conduct">Code of Conduct</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Col 4: Links */}
          <div className="footer-col">
            <h4>Developer Profiles</h4>
            <ul>
              <li>
                <a href="https://github.com/JhonatanDavid02" target="_blank" rel="noopener noreferrer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub: JhonatanDavid02 <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jhonathan-david-ruiz-bernal-499395202/" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="http://127.0.0.1:3000/" target="_blank" rel="noopener noreferrer">
                  Portfolio Personal <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} npm, Inc. / Hardened Replica by Jhonatan Ruiz. All rights reserved.</p>
          <div className="footer-bottom-links">
            <span>Built with React 19, TypeScript, pnpm and Vite.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
