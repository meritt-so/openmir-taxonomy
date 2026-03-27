"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.domains = exports.mir = void 0;
exports.getDomain = getDomain;
exports.getCategory = getCategory;
exports.getDomainForCategory = getDomainForCategory;
exports.allCategoryCodes = allCategoryCodes;
const mir_taxonomy_json_1 = __importDefault(require("./mir-taxonomy.json"));
exports.mir = mir_taxonomy_json_1.default;
exports.domains = exports.mir.domains;
/** Look up a domain by code (e.g., "MIR-100") */
function getDomain(code) {
    return exports.domains.find(d => d.code === code);
}
/** Look up a category by code (e.g., "MIR-101") */
function getCategory(code) {
    for (const domain of exports.domains) {
        const cat = domain.categories.find(c => c.code === code);
        if (cat)
            return cat;
    }
    return undefined;
}
/** Get the domain for a category code */
function getDomainForCategory(categoryCode) {
    const domainCode = categoryCode.replace(/\d{2}$/, "00");
    return getDomain(domainCode);
}
/** List all category codes */
function allCategoryCodes() {
    return exports.domains.flatMap(d => d.categories.map(c => c.code));
}
exports.default = exports.mir;
//# sourceMappingURL=index.js.map