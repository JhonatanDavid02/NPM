export interface NpmPackage {
  name: string;
  version: string;
  description: string;
  keywords: string[];
  date: string;
  publisher: {
    username: string;
    email?: string;
  };
  maintainers?: Array<{ username: string; email: string }>;
  weeklyDownloads: number;
  score?: {
    final: number;
    detail: {
      quality: number;
      popularity: number;
      maintenance: number;
    };
  };
  license: string;
  repository?: string;
  homepage?: string;
  unpackedSize?: string;
  totalFiles?: number;
  dependenciesCount?: number;
  securityAudit: {
    slsaLevel: 'SLSA-1' | 'SLSA-2' | 'SLSA-3';
    cosignVerified: boolean;
    provenanceAttested: boolean;
    vulnerabilitiesCount: number;
    malwareStatus: 'CLEAN' | 'MONITORED';
    supplyChainScore: number;
    lastScanned: string;
  };
  readmeSnippet?: string;
}

export type SearchCategory = 'all' | 'frontend' | 'backend' | 'security' | 'build-tools' | 'frameworks';
