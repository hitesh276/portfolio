/**
 * Product Delivery Workflow & Certifications Module
 */
import { fetchData } from '../utils/fetch.js';

export function initWorkflow() {
  const container = document.getElementById('workflowTrack');
  if (!container) return;

  const steps = [
    { num: "01", title: "Requirement Analysis", desc: "Collaborate with PMs & designers to clarify scope, target KPIs, and target platforms." },
    { num: "02", title: "Technical Planning", desc: "Sprint backlog creation, milestone timelines, memory budgets & dependency mapping." },
    { num: "03", title: "Game Architecture", desc: "Designing decoupled systems using State, Factory, Observer & Singleton patterns." },
    { num: "04", title: "Prototype Development", desc: "Rapid grey-box mechanics testing to validate core gameplay loops early." },
    { num: "05", title: "Gameplay Systems", desc: "Programming character controls, physics solvers, AI pathfinding & game logic." },
    { num: "06", title: "UI Integration", desc: "Implementing responsive UGUI canvases, dynamic layout auto-scalers & event callbacks." },
    { num: "07", title: "Firebase Analytics", desc: "Hooking event telemetry, user funnels, and retention tracking points." },
    { num: "08", title: "Crashlytics Setup", desc: "Integrating real-time exception logging and stack trace diagnostics." },
    { num: "09", title: "AdMob Monetization", desc: "Mediation waterfall setup for Banner, Interstitial, and Rewarded Video ad placements." },
    { num: "10", title: "Performance Tuning", desc: "Frame Debugger pass, Memory Profiler pass, draw call batching & object pooling." },
    { num: "11", title: "Testing & QA", desc: "Conducting smoke tests, automated build checks, regression testing & bug triage." },
    { num: "12", title: "Google Play Console", desc: "AAB bundle signing, target SDK updates, internal & closed testing tracks." },
    { num: "13", title: "App Store Connect", desc: "Xcode archive builds, TestFlight external testing & provisioning profiles." },
    { num: "14", title: "Store Listing Prep", desc: "Optimizing app metadata, screenshots, feature graphics & localized strings." },
    { num: "15", title: "Policy Compliance", desc: "Data Safety forms, Privacy Policy compliance, Age Rating questionnaires & review guidelines." },
    { num: "16", title: "Android Release", desc: "Staged rollout monitoring, production deployment & crash rate inspection." },
    { num: "17", title: "iOS Release", desc: "App Review submission, release timing coordination & live verification." },
    { num: "18", title: "Post Release Support", desc: "Monitoring crash telemetry, player feedback, server load & urgent hotfixes." },
    { num: "19", title: "LiveOps & Updates", desc: "Continuous feature rollouts, seasonal events, and performance patches." }
  ];

  container.innerHTML = steps.map((s, idx) => `
    <div class="workflow__step">
      <span class="workflow__step-num">Step ${s.num}</span>
      <h3 class="workflow__step-title">${s.title}</h3>
      <p class="workflow__step-desc">${s.desc}</p>
      ${idx < steps.length - 1 ? `<span class="workflow__connector">→</span>` : ''}
    </div>
  `).join('');
}

export async function initCertifications() {
  const container = document.getElementById('certificationsGrid');
  if (!container) return;

  const certs = await fetchData('data/certifications.json');
  if (!certs || !certs.length) return;

  container.innerHTML = certs.map(c => `
    <div class="card cert-card">
      <div class="cert-card__icon">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 15l-2 5l9-9l-9-9l2 5l-7 4z"/>
        </svg>
      </div>
      <div>
        <span class="tech-pill" style="margin-bottom:0.5rem;display:inline-block;">${c.badge}</span>
        <h3 class="cert-card__title">${c.title}</h3>
        <div class="cert-card__issuer">${c.issuer} • ${c.year}</div>
        <p class="cert-card__desc">${c.description}</p>
      </div>
    </div>
  `).join('');
}
