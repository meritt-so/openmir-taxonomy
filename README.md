# @intended/open-intent-layer

**Open Intent Layer** — the open taxonomy for classifying AI agent actions across 14 enterprise domains.

The Open Intent Layer provides a shared language for describing what AI agents intend to do. Every action an AI agent takes — deploying code, processing invoices, escalating tickets — maps to a stable intent family and category. This enables consistent verification, authorization, auditing, and policy evaluation across any AI agent platform.

## The 14 Open Intent Layer Domains

| Code | Domain | Categories | Description |
|------|--------|-----------|-------------|
| OIL-100 | Software Development | 7 | Build, test, deploy, release, and govern code |
| OIL-200 | Security Operations | 7 | Detect, respond to, and remediate security threats |
| OIL-300 | Infrastructure | 7 | Provision, scale, and maintain compute and network systems |
| OIL-400 | Cloud Operations | 6 | SaaS management, platform ops, multi-cloud governance |
| OIL-500 | Financial Operations | 8 | Budgets, payments, procurement, treasury, reporting |
| OIL-600 | Supply Chain | 5 | Sourcing, logistics, vendor management, inventory |
| OIL-700 | People Operations | 6 | Hiring, onboarding, workforce management |
| OIL-800 | Revenue Operations | 5 | Pipeline management, deal execution, renewals |
| OIL-900 | Customer Experience | 5 | Support, success, satisfaction measurement |
| OIL-1000 | Enterprise Operations | 6 | Strategy, planning, governance, cross-functional ops |
| OIL-1100 | Service Delivery | 4 | Fulfillment, SLA adherence, service operations |
| OIL-1200 | Risk Management | 5 | Assessment, mitigation, compliance, business continuity |
| OIL-1300 | Product Operations | 4 | Roadmap, discovery, launch coordination, lifecycle |
| OIL-1400 | Asset Management | 5 | Inventory tracking, maintenance, lifecycle, disposal |

**Total: 80 categories across 14 domains.**

## Installation

```bash
npm install @intended/open-intent-layer
```

## Usage

```typescript
import { getDomain, getCategory, getDomainForCategory, allCategoryCodes } from "@intended/open-intent-layer";

// Look up a domain
const secops = getDomain("OIL-200");
console.log(secops?.name); // "Security Operations"

// Look up a category
const threatDetection = getCategory("OIL-201");
console.log(threatDetection?.name); // "Threat Detection"

// Find which domain a category belongs to
const domain = getDomainForCategory("OIL-503");
console.log(domain?.name); // "Financial Operations"

// List all category codes
const codes = allCategoryCodes();
console.log(codes.length); // 80
```

### Access the full taxonomy

```typescript
import oil from "@intended/open-intent-layer";

for (const domain of oil.domains) {
  console.log(`${domain.code} ${domain.name} (${domain.categories.length} categories)`);
  for (const cat of domain.categories) {
    console.log(`  ${cat.code} ${cat.name}`);
  }
}
```

## Why the Open Intent Layer?

AI agents are taking actions across every enterprise domain — from deploying code to processing payments to managing infrastructure. Without a shared taxonomy, every organization invents its own classification, making cross-system policy enforcement and auditing impossible.

The Open Intent Layer provides:

- **Universal classification** — A common language for AI agent actions across all enterprise domains
- **Verification anchoring** — Runtime decisions can reference stable family codes instead of brittle action strings
- **Audit consistency** — Every decision log entry maps to a stable taxonomy family
- **Cross-platform interoperability** — Different AI agent frameworks can share the same intent language

## Reference Implementation

The Open Intent Layer is used by the Intended runtime reference implementation for intent interpretation, authority routing, and audit evidence anchoring.

## License

Apache-2.0
