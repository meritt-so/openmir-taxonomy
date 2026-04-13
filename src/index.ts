import taxonomy from "./oil-taxonomy.json";

export interface OilDomain {
  code: string;
  name: string;
  description: string;
  categories: OilCategory[];
}

export interface OilCategory {
  code: string;
  name: string;
  description: string;
}

export interface OilTaxonomy {
  version: string;
  name: string;
  abbreviation: string;
  domains: OilDomain[];
}

export const oil: OilTaxonomy = taxonomy as OilTaxonomy;
export const domains = oil.domains;

/** Look up a domain by code (e.g., "OIL-100") */
export function getDomain(code: string): OilDomain | undefined {
  return domains.find(d => d.code === code);
}

/** Look up a category by code (e.g., "OIL-101") */
export function getCategory(code: string): OilCategory | undefined {
  for (const domain of domains) {
    const cat = domain.categories.find(c => c.code === code);
    if (cat) return cat;
  }
  return undefined;
}

/** Get the domain for a category code */
export function getDomainForCategory(categoryCode: string): OilDomain | undefined {
  const domainCode = categoryCode.replace(/\d{2}$/, "00");
  return getDomain(domainCode);
}

/** List all category codes */
export function allCategoryCodes(): string[] {
  return domains.flatMap(d => d.categories.map(c => c.code));
}

export default oil;
