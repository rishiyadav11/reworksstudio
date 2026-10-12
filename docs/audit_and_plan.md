# Reworks Studio — Master Brand, Website, SEO & Conversion Audit

## 1. Executive Summary & Baseline Diagnosis
- **Website Target**: [https://reworksstudio.in/](https://reworksstudio.in/)
- **Repository**: Next.js 16.2.10 (Turbopack, App Router), React 19.2.4, TypeScript 5, Tailwind CSS v4, Framer Motion 12.42.2, Lucide React, EmailJS.
- **Founders**: Rishi Yadav (Founder) & Navdeep Bhardwaj (Co-Founder).

### Key Issues Identified in Baseline:
1. **Brand & Visual Disconnect**:
   - The homepage hero relied on an informal "sticker scrapbook" aesthetic (cursive handwriting, pink soda cans, floating stickers, and "DRAG TO MOVE" gimmick) reminiscent of an illustrator portfolio rather than a world-class technology engineering studio.
   - The aesthetic clashed across routes: dark-mode on `/services`, editorial cream on `/work`, and floating stickers on `/`.
2. **Value Proposition & B2B Positioning**:
   - Lack of immediate clarity above the fold: visitors could not quickly discern what problems Reworks solves, who it is for, or why to book a technical scoping call.
3. **Technical SEO Gaps**:
   - No `robots.ts` or `robots.txt`.
   - No dynamic `sitemap.ts` or `sitemap.xml`.
   - Metadata in `layout.tsx` was over-indexed on local keyword stuffing ("best web design studio Gurugram") rather than high-intent B2B search terms.
   - Missing per-route canonical URLs and OpenGraph social preview images.
4. **Motion & Interactivity**:
   - Hero animations obstructed content and lacked purposeful engineering communication.
   - Absence of an authentic signature visual demonstrating technical system architecture.
5. **Conversion Architecture**:
   - CTAs lacked hierarchy and clarity ("Hire Us" circle sticker vs structured scoping call).
   - Form on `/connect` depended entirely on EmailJS environment variables without a resilient fallback.

---

## 2. Transformation Objectives
1. **Brand Identity**: Establish Reworks Studio as a serious, high-trust engineering and AI studio combining architectural precision with production-grade delivery.
2. **Signature Technical Element**: Design and build an interactive **AI Systems & Multi-Agent Architecture Visualizer** showing live pipeline states, telemetry, vector search, and tool execution.
3. **Technical SEO Foundations**: Implement standard Next.js metadata routes (`robots.ts`, `sitemap.ts`), comprehensive JSON-LD schemas, and individual page metadata.
4. **Content & Credibility**: Clearly label client projects vs. internal R&D experiments; highlight verifiable architectures and real founder leadership.
5. **Conversion Optimization**: Refined enquiry journeys, transparent scope calculators, and resilient contact transmissions.

---

## 3. Prioritized Implementation Roadmap
- [x] Phase 1: Baseline audit and system inspection.
- [ ] Phase 2: Design system token harmonization in `globals.css` and layout.
- [ ] Phase 3: Header, Hero, and Signature Architecture Visualizer implementation.
- [ ] Phase 4: Homepage sections upgrade (Services, Proof of Work, Process, Trust, CTA, Footer).
- [ ] Phase 5: Technical SEO architecture (`robots.ts`, `sitemap.ts`, JSON-LD schemas, route metadata).
- [ ] Phase 6: Sub-page enhancements (`/services`, `/work`, `/work/[slug]`, `/about`, `/trust`, `/connect`).
- [ ] Phase 7: QA, Typecheck, Build, and Performance Verification.
