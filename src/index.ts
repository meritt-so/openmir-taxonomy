import taxonomy from "./mir-taxonomy.json";

export interface MirDomain {
  code: string;
  name: string;
  description: string;
  categories: MirCategory[];
}

export interface MirCategory {
  code: string;
  name: string;
  description: string;
}

export interface MirTaxonomy {
  version: string;
  name: string;
  abbreviation: string;
  domains: MirDomain[];
}

export const mir: MirTaxonomy = taxonomy as MirTaxonomy;
export const domains = mir.domains;

/** Look up a domain by code (e.g., "MIR-100") */
export function getDomain(code: string): MirDomain | undefined {
  return domains.find(d => d.code === code);
}

/** Look up a category by code (e.g., "MIR-101") */
export function getCategory(code: string): MirCategory | undefined {
  for (const domain of domains) {
    const cat = domain.categories.find(c => c.code === code);
    if (cat) return cat;
  }
  return undefined;
}

/** Get the domain for a category code */
export function getDomainForCategory(categoryCode: string): MirDomain | undefined {
  const domainCode = categoryCode.replace(/\d{2}$/, "00");
  return getDomain(domainCode);
}

/** List all category codes */
export function allCategoryCodes(): string[] {
  return domains.flatMap(d => d.categories.map(c => c.code));
}

export default mir;
