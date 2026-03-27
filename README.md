# @meritt/mir-taxonomy

**MERITT Intent Reference (MIR)** -- the open taxonomy for classifying AI agent actions across 14 enterprise domains.

MIR provides a universal language for describing what AI agents do. Every action an AI agent takes -- deploying code, processing invoices, escalating tickets -- maps to a MIR category. This enables consistent authorization, auditing, and policy enforcement across any AI agent platform.

## The 14 MIR Domains

| Code | Domain | Categories | Description |
|------|--------|-----------|-------------|
| MIR-100 | Software Development | 7 | Build, test, deploy, release, and govern code |
| MIR-200 | Security Operations | 7 | Detect, respond to, and remediate security threats |
| MIR-300 | Infrastructure | 7 | Provision, scale, and maintain compute and network systems |
| MIR-400 | Cloud Operations | 6 | SaaS management, platform ops, multi-cloud governance |
| MIR-500 | Financial Operations | 8 | Budgets, payments, procurement, treasury, reporting |
| MIR-600 | Supply Chain | 5 | Sourcing, logistics, vendor management, inventory |
| MIR-700 | People Operations | 6 | Hiring, onboarding, workforce management |
| MIR-800 | Revenue Operations | 5 | Pipeline management, deal execution, renewals |
| MIR-900 | Customer Experience | 5 | Support, success, satisfaction measurement |
| MIR-1000 | Enterprise Operations | 6 | Strategy, planning, governance, cross-functional ops |
| MIR-1100 | Service Delivery | 4 | Fulfillment, SLA adherence, service operations |
| MIR-1200 | Risk Management | 5 | Assessment, mitigation, compliance, business continuity |
| MIR-1300 | Product Operations | 4 | Roadmap, discovery, launch coordination, lifecycle |
| MIR-1400 | Asset Management | 5 | Inventory tracking, maintenance, lifecycle, disposal |

**Total: 80 categories across 14 domains.**

## Installation

```bash
npm install @meritt/mir-taxonomy
```

## Usage

```typescript
import { getDomain, getCategory, getDomainForCategory, allCategoryCodes } from "@meritt/mir-taxonomy";

// Look up a domain
const secops = getDomain("MIR-200");
console.log(secops?.name); // "Security Operations"

// Look up a category
const threatDetection = getCategory("MIR-201");
console.log(threatDetection?.name); // "Threat Detection"

// Find which domain a category belongs to
const domain = getDomainForCategory("MIR-503");
console.log(domain?.name); // "Financial Operations"

// List all category codes
const codes = allCategoryCodes();
console.log(codes.length); // 80
```

### Access the full taxonomy

```typescript
import mir from "@meritt/mir-taxonomy";

for (const domain of mir.domains) {
  console.log(`${domain.code} ${domain.name} (${domain.categories.length} categories)`);
  for (const cat of domain.categories) {
    console.log(`  ${cat.code} ${cat.name}`);
  }
}
```

## Why MIR?

AI agents are taking actions across every enterprise domain -- from deploying code to processing payments to managing infrastructure. Without a shared taxonomy, every organization invents its own classification, making cross-system policy enforcement and auditing impossible.

MIR provides:

- **Universal classification** -- A common language for AI agent actions across all enterprise domains
- **Policy anchoring** -- Authorization rules reference MIR codes, not brittle action strings
- **Audit consistency** -- Every decision log entry maps to a stable MIR category
- **Cross-platform interoperability** -- Different AI agent frameworks can share MIR classifications

## Used by MERITT

MIR is the intent classification backbone of [MERITT](https://meritt.so) -- The Authority Runtime for AI Agents. MERITT uses MIR to classify every AI agent action, enforce authorization policies, and produce cryptographic proof of every decision.

## License

Apache-2.0
