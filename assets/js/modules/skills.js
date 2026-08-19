/**
 * Skills & Categorized Capabilities Module
 */
import { fetchData } from '../utils/fetch.js';

export async function initSkills() {
  const container = document.getElementById('skillsGrid');
  if (!container) return;

  const skillsData = await fetchData('data/skills.json');
  if (!skillsData || !skillsData.length) return;

  container.innerHTML = skillsData.map(category => `
    <div class="card skill-card">
      <div class="skill-card__header">
        <div class="skill-card__icon-wrap">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
        <div>
          <h3 class="skill-card__title">${category.category}</h3>
          <span style="font-size:0.785rem;color:var(--text-subtle);">${category.description}</span>
        </div>
      </div>

      <div class="skill-card__items">
        ${category.skills.map(skill => `
          <div class="skill-item">
            <div class="skill-item__header">
              <span class="skill-item__name">${skill.name}</span>
              <span class="skill-item__level">${skill.level}</span>
            </div>
            <span class="skill-item__details">${skill.details}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}
