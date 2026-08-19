/**
 * Career Timeline Module
 */
import { fetchData } from '../utils/fetch.js';

export async function initTimeline() {
  const container = document.getElementById('timelineContainer');
  if (!container) return;

  const experiences = await fetchData('data/experience.json');
  if (!experiences || !experiences.length) return;

  container.innerHTML = experiences.map(exp => `
    <div class="timeline-card">
      <div class="timeline-card__inner">
        <div class="timeline-card__header">
          <div>
            <h3 class="timeline-card__role">${exp.role}</h3>
            <span class="timeline-card__company">${exp.company}</span>
          </div>
          <span class="timeline-card__period">${exp.period}</span>
        </div>

        <p style="font-size:0.9375rem;color:var(--text-muted);line-height:1.6;margin-bottom:1rem;">
          ${exp.summary}
        </p>

        <ul class="timeline-card__list">
          ${exp.highlights.map(item => `
            <li class="timeline-card__item">
              <span class="timeline-card__item-bullet">•</span>
              <span>${item}</span>
            </li>
          `).join('')}
        </ul>

        <div style="display:flex;flex-wrap:wrap;gap:0.4rem;margin-top:1.5rem;padding-top:1rem;border-top:1px solid var(--border-color);">
          ${exp.techUsed.map(t => `<span class="tech-pill">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}
