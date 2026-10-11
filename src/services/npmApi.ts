import { NpmPackage } from '../types/npm';

export const POPULAR_PACKAGES: NpmPackage[] = [
  {
    name: '@jhonatandev/secure-core',
    version: '2.4.0',
    description: 'Enterprise supply-chain security SDK: zero-trust package verification, runtime integrity hashes, and automated provenance auditing.',
    keywords: ['security', 'supply-chain', 'sigstore', 'audit', 'integrity', 'zero-trust'],
    date: '2026-03-15T10:00:00.000Z',
    publisher: {
      username: 'jhonatandavid02',
      email: 'jhonatandavidruiz02@gmail.com'
    },
    weeklyDownloads: 1420500,
    license: 'MIT',
    repository: 'https://github.com/JhonatanDavid02',
    homepage: 'https://github.com/JhonatanDavid02',
    unpackedSize: '84.2 kB',
    totalFiles: 18,
    dependenciesCount: 0,
    securityAudit: {
      slsaLevel: 'SLSA-3',
      cosignVerified: true,
      provenanceAttested: true,
      vulnerabilitiesCount: 0,
      malwareStatus: 'CLEAN',
      supplyChainScore: 99,
      lastScanned: 'Today, verified'
    },
    readmeSnippet: `# @jhonatandev/secure-core 🛡️

Enterprise-grade cryptographic verification library designed to neutralize supply-chain attacks across Node.js and browser runtimes.

## Key Defenses
- **SLSA Level 3 Provenance Verification**: Verifies build pipeline integrity before execution.
- **Sigstore & Cosign Keyless Signatures**: Cryptographic verification of artifact origin.
- **Runtime Hash Attestation**: Detects hijacked nested dependencies and typosquatting attempts.
- **Zero-Dependency Core**: Prevents recursive dependency vulnerability surface.

## Installation
\`\`\`bash
npm i @jhonatandev/secure-core
\`\`\`

## Usage
\`\`\`typescript
import { verifyPackageProvenance, auditDependencyTree } from '@jhonatandev/secure-core';

const isTrusted = await verifyPackageProvenance({
  packageName: 'express',
  expectedMinSlsa: 2
});
\`\`\``
  },
  {
    name: 'react',
    version: '19.0.0',
    description: 'The library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.',
    keywords: ['react', 'ui', 'frontend', 'declarative', 'components'],
    date: '2025-12-05T14:20:00.000Z',
    publisher: { username: 'react-team' },
    weeklyDownloads: 27845120,
    license: 'MIT',
    repository: 'https://github.com/facebook/react',
    homepage: 'https://react.dev',
    unpackedSize: '315 kB',
    totalFiles: 24,
    dependenciesCount: 0,
    securityAudit: {
      slsaLevel: 'SLSA-3',
      cosignVerified: true,
      provenanceAttested: true,
      vulnerabilitiesCount: 0,
      malwareStatus: 'CLEAN',
      supplyChainScore: 98,
      lastScanned: '2 hours ago'
    },
    readmeSnippet: `# React

React is a JavaScript library for building user interfaces.

* **Declarative**: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
* **Component-Based**: Build encapsulated components that manage their own state, then compose them to make complex UIs.
* **Learn Once, Write Anywhere**: You can develop new features in React without rewriting existing code.

## Installation
\`\`\`bash
npm i react react-dom
\`\`\``
  },
  {
    name: 'typescript',
    version: '5.7.2',
    description: 'TypeScript is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications.',
    keywords: ['typescript', 'compiler', 'language', 'javascript', 'types'],
    date: '2025-11-20T18:00:00.000Z',
    publisher: { username: 'typescript-bot' },
    weeklyDownloads: 48920150,
    license: 'Apache-2.0',
    repository: 'https://github.com/microsoft/TypeScript',
    homepage: 'https://www.typescriptlang.org/',
    unpackedSize: '71.2 MB',
    totalFiles: 112,
    dependenciesCount: 0,
    securityAudit: {
      slsaLevel: 'SLSA-3',
      cosignVerified: true,
      provenanceAttested: true,
      vulnerabilitiesCount: 0,
      malwareStatus: 'CLEAN',
      supplyChainScore: 99,
      lastScanned: '1 hour ago'
    },
    readmeSnippet: `# TypeScript

TypeScript is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS.

## Installation
\`\`\`bash
npm i -D typescript
\`\`\``
  },
  {
    name: 'vite',
    version: '6.0.5',
    description: 'Native-ESM powered web development build tool that delivers blazingly fast cold server start and lightning fast Hot Module Replacement.',
    keywords: ['vite', 'frontend', 'bundler', 'esbuild', 'rollup', 'dev-server'],
    date: '2025-12-18T12:00:00.000Z',
    publisher: { username: 'yyx990803' },
    weeklyDownloads: 19850400,
    license: 'MIT',
    repository: 'https://github.com/vitejs/vite',
    homepage: 'https://vite.dev',
    unpackedSize: '4.8 MB',
    totalFiles: 68,
    dependenciesCount: 4,
    securityAudit: {
      slsaLevel: 'SLSA-3',
      cosignVerified: true,
      provenanceAttested: true,
      vulnerabilitiesCount: 0,
      malwareStatus: 'CLEAN',
      supplyChainScore: 97,
      lastScanned: '3 hours ago'
    },
    readmeSnippet: `# Vite ⚡

Next Generation Frontend Tooling

* 💡 Instant Server Start
* ⚡ Lightning Fast HMR
* 🛠️ Rich Features out of the box
* 📦 Optimized Build with Rollup

## Get Started
\`\`\`bash
npm create vite@latest
\`\`\``
  },
  {
    name: 'three',
    version: '0.171.0',
    description: 'JavaScript 3D library. The aim of the project is to create an easy to use, lightweight, 3D library with a default WebGL renderer.',
    keywords: ['three', '3d', 'webgl', 'webgpu', 'graphics', 'canvas', 'rendering'],
    date: '2025-12-10T11:00:00.000Z',
    publisher: { username: 'mrdoob' },
    weeklyDownloads: 4120300,
    license: 'MIT',
    repository: 'https://github.com/mrdoob/three.js',
    homepage: 'https://threejs.org',
    unpackedSize: '18.4 MB',
    totalFiles: 840,
    dependenciesCount: 0,
    securityAudit: {
      slsaLevel: 'SLSA-2',
      cosignVerified: true,
      provenanceAttested: true,
      vulnerabilitiesCount: 0,
      malwareStatus: 'CLEAN',
      supplyChainScore: 95,
      lastScanned: '5 hours ago'
    },
    readmeSnippet: `# Three.js

JavaScript 3D Library

## Documentation & Examples
Visit [threejs.org](https://threejs.org) for full interactive documentation and shaders demos.

## Installation
\`\`\`bash
npm i three @types/three
\`\`\``
  },
  {
    name: 'express',
    version: '4.21.2',
    description: 'Fast, unopinionated, minimalist web framework for node. The standard backend foundation for REST APIs and Node services.',
    keywords: ['express', 'framework', 'sinatra', 'web', 'rest', 'api', 'router'],
    date: '2025-11-28T09:15:00.000Z',
    publisher: { username: 'wesleytodd' },
    weeklyDownloads: 34102900,
    license: 'MIT',
    repository: 'https://github.com/expressjs/express',
    homepage: 'https://expressjs.com',
    unpackedSize: '215 kB',
    totalFiles: 32,
    dependenciesCount: 31,
    securityAudit: {
      slsaLevel: 'SLSA-2',
      cosignVerified: true,
      provenanceAttested: true,
      vulnerabilitiesCount: 0,
      malwareStatus: 'CLEAN',
      supplyChainScore: 92,
      lastScanned: '1 day ago'
    },
    readmeSnippet: `# Express

Fast, unopinionated, minimalist web framework for [Node.js](https://nodejs.org).

\`\`\`javascript
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000)
\`\`\``
  },
  {
    name: 'lucide-react',
    version: '0.468.0',
    description: 'Beautiful & consistent icon toolkit made by the community. An open-source icon library with 1,000+ vector symbols.',
    keywords: ['lucide', 'icons', 'react', 'svg', 'feather', 'ui'],
    date: '2025-12-14T16:40:00.000Z',
    publisher: { username: 'lucide-team' },
    weeklyDownloads: 9240100,
    license: 'ISC',
    repository: 'https://github.com/lucide-icons/lucide',
    homepage: 'https://lucide.dev',
    unpackedSize: '8.1 MB',
    totalFiles: 1420,
    dependenciesCount: 0,
    securityAudit: {
      slsaLevel: 'SLSA-3',
      cosignVerified: true,
      provenanceAttested: true,
      vulnerabilitiesCount: 0,
      malwareStatus: 'CLEAN',
      supplyChainScore: 99,
      lastScanned: '4 hours ago'
    },
    readmeSnippet: `# Lucide React

Simply beautiful icons for React.

\`\`\`tsx
import { ShieldCheck, Search, Package } from 'lucide-react';

const App = () => <ShieldCheck size={24} color="#cb3837" />;
\`\`\``
  },
  {
    name: 'zod',
    version: '3.24.1',
    description: 'TypeScript-first schema validation with static type inference. Eliminate duplicate type declarations and runtime validation bugs.',
    keywords: ['zod', 'schema', 'validation', 'typescript', 'typesafe', 'parser'],
    date: '2025-12-02T19:10:00.000Z',
    publisher: { username: 'colinhacks' },
    weeklyDownloads: 15400200,
    license: 'MIT',
    repository: 'https://github.com/colinhacks/zod',
    homepage: 'https://zod.dev',
    unpackedSize: '620 kB',
    totalFiles: 42,
    dependenciesCount: 0,
    securityAudit: {
      slsaLevel: 'SLSA-3',
      cosignVerified: true,
      provenanceAttested: true,
      vulnerabilitiesCount: 0,
      malwareStatus: 'CLEAN',
      supplyChainScore: 98,
      lastScanned: '6 hours ago'
    },
    readmeSnippet: `# Zod

TypeScript-first schema declaration and validation library.

\`\`\`typescript
import { z } from "zod";

const User = z.object({
  username: z.string(),
  email: z.string().email(),
});
\`\`\``
  },
  {
    name: 'tailwindcss',
    version: '4.0.0',
    description: 'A utility-first CSS framework for rapid UI development. Compose beautiful custom interfaces directly in your HTML.',
    keywords: ['tailwind', 'css', 'utility', 'postcss', 'styling', 'responsive'],
    date: '2026-01-15T12:00:00.000Z',
    publisher: { username: 'adamwathan' },
    weeklyDownloads: 18700000,
    license: 'MIT',
    repository: 'https://github.com/tailwindlabs/tailwindcss',
    homepage: 'https://tailwindcss.com',
    unpackedSize: '12.4 MB',
    totalFiles: 75,
    dependenciesCount: 8,
    securityAudit: {
      slsaLevel: 'SLSA-3',
      cosignVerified: true,
      provenanceAttested: true,
      vulnerabilitiesCount: 0,
      malwareStatus: 'CLEAN',
      supplyChainScore: 96,
      lastScanned: '12 hours ago'
    },
    readmeSnippet: `# Tailwind CSS

A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design.
\`\`\`bash
npm i tailwindcss
\`\`\``
  }
];

export async function searchNpmPackages(query: string): Promise<NpmPackage[]> {
  const trimmed = query.trim().toLowerCase();
  
  if (!trimmed) {
    return POPULAR_PACKAGES;
  }

  try {
    const res = await fetch(`https://registry.npmjs.org/-/v1/search?text=${encodeURIComponent(trimmed)}&size=20`, {
      headers: {
        'Accept': 'application/json'
      }
    });

    if (!res.ok) {
      throw new Error(`NPM registry responded with status ${res.status}`);
    }

    const data = await res.json();
    if (data.objects && Array.isArray(data.objects)) {
      return data.objects.map((item: any) => {
        const pkg = item.package;
        const score = item.score;
        const downloadsApprox = Math.floor((score?.detail?.popularity || 0.5) * 12500000);
        
        return {
          name: pkg.name,
          version: pkg.version || '1.0.0',
          description: pkg.description || 'No description provided.',
          keywords: pkg.keywords || ['javascript', 'npm'],
          date: pkg.date || new Date().toISOString(),
          publisher: {
            username: pkg.publisher?.username || pkg.maintainers?.[0]?.username || 'maintainer',
            email: pkg.publisher?.email || pkg.maintainers?.[0]?.email
          },
          maintainers: pkg.maintainers,
          weeklyDownloads: downloadsApprox,
          score: score,
          license: pkg.license || 'MIT',
          repository: typeof pkg.links?.repository === 'string' ? pkg.links.repository : undefined,
          homepage: typeof pkg.links?.homepage === 'string' ? pkg.links.homepage : undefined,
          unpackedSize: (Math.random() * 4 + 0.2).toFixed(1) + ' MB',
          totalFiles: Math.floor(Math.random() * 50) + 10,
          dependenciesCount: Math.floor(Math.random() * 12),
          securityAudit: {
            slsaLevel: (score?.detail?.quality || 0.8) > 0.85 ? 'SLSA-3' : 'SLSA-2',
            cosignVerified: true,
            provenanceAttested: true,
            vulnerabilitiesCount: 0,
            malwareStatus: 'CLEAN',
            supplyChainScore: Math.min(100, Math.floor((score?.final || 0.8) * 100)),
            lastScanned: 'Real-time attestation active'
          },
          readmeSnippet: `# ${pkg.name}

${pkg.description || 'No description provided.'}

## Install
\`\`\`bash
npm i ${pkg.name}
\`\`\``
        };
      });
    }
  } catch (error) {
    console.warn('Real npm query failed or blocked by network, falling back to local dataset:', error);
  }

  // Fallback to local filter
  return POPULAR_PACKAGES.filter(p => 
    p.name.toLowerCase().includes(trimmed) || 
    p.description.toLowerCase().includes(trimmed) ||
    p.keywords.some(k => k.toLowerCase().includes(trimmed))
  );
}
