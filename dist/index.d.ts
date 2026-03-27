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
export declare const mir: MirTaxonomy;
export declare const domains: MirDomain[];
/** Look up a domain by code (e.g., "MIR-100") */
export declare function getDomain(code: string): MirDomain | undefined;
/** Look up a category by code (e.g., "MIR-101") */
export declare function getCategory(code: string): MirCategory | undefined;
/** Get the domain for a category code */
export declare function getDomainForCategory(categoryCode: string): MirDomain | undefined;
/** List all category codes */
export declare function allCategoryCodes(): string[];
export default mir;
//# sourceMappingURL=index.d.ts.map