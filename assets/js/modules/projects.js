/**
 * Dynamic Projects Renderer & Filter Module
 */
import { fetchData } from '../utils/fetch.js';
import { openProjectModal } from './modal.js';

export async function initProjects() {
  const container = document.getElementById('projectsGrid');
  const filterContainer = document.getElementById('projectFilters');
  if (!container) return;

  const projects = await fetchData('data/projects.json');
  if (!projects || !projects.length) {
    container.innerHTML = `<p class="text-muted">No projects found.</p>`;
    return;
  }

  let activeCategory = 'All';

  // Filter Categories
  const categories = ['All', 'Mobile', 'Multiplayer', 'Casual/Hypercasual', 'Kids/Educational', 'PC / Steam'];

  // Render Filter Buttons
  if (filterContainer) {
    filterContainer.innerHTML = categories.map(cat => `
      <button class="filter-btn ${cat === activeCategory ? 'filter-btn--active' : ''}" data-category="${cat}">
        ${cat}
      </button>
    `).join('');

    filterContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;

      activeCategory = btn.getAttribute('data-category');
      filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('filter-btn--active'));
      btn.classList.add('filter-btn--active');

      renderGrid();
    });
  }

  function renderGrid() {
    const filtered = activeCategory === 'All'
      ? projects
      : projects.filter(p => {
          if (activeCategory === 'Mobile') {
            // Includes all games on Android / iOS (excludes PC/Steam-only titles like Interrogation Files)
            return p.platforms.some(plat => {
              const lower = plat.toLowerCase();
              return lower === 'android' || lower === 'ios' || lower === 'mobile';
            });
          }
          if (activeCategory === 'PC / Steam' || activeCategory === 'PC/Steam') {
            return p.platforms.some(plat => {
              const lower = plat.toLowerCase();
              return lower === 'steam' || lower === 'pc';
            }) || p.category === 'PC/Steam';
          }
          if (activeCategory === 'Casual/Hypercasual') {
            return p.category === 'Casual/Hypercasual' || p.category === 'Story / Match-3';
          }
          return p.category === activeCategory;
        });

    container.innerHTML = filtered.map(project => {
      // Store buttons generation ONLY if links exist
      let storeButtons = '';
      if (project.links) {
        if (project.links.android) {
          storeButtons += `<a href="${project.links.android}" target="_blank" rel="noopener" class="store-btn" title="View on Google Play">
            <svg viewBox="0 0 24 24"><path d="M17.523 15.3414l1.8702 3.2393a.4996.4996 0 01-.8654.5l-1.8972-3.2861a9.9248 9.9248 0 01-9.2612 0l-1.8972 3.2861a.4996.4996 0 01-.8654-.5l1.8702-3.2393A9.9706 9.9706 0 012 8.5h20a9.9706 9.9706 0 01-4.477 6.8414zM7 6.5a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z"/></svg>
            Play Store
          </a>`;
        }
        if (project.links.ios) {
          storeButtons += `<a href="${project.links.ios}" target="_blank" rel="noopener" class="store-btn" title="View on App Store">
            <svg viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.07c.68-.82 1.13-1.96.99-3.1-.98.04-2.16.66-2.85 1.47-.62.71-1.15 1.88-1 3.01 1.09.08 2.19-.56 2.86-1.38z"/></svg>
            App Store
          </a>`;
        }
        if (project.links.steam) {
          storeButtons += `<a href="${project.links.steam}" target="_blank" rel="noopener" class="store-btn" title="View on Steam">
            <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-9.94 8.89l5.08 2.1a3.5 3.5 0 0 1 3.36-1.49l2.76-3.95A4.47 4.47 0 0 1 13 6.5a4.5 4.5 0 1 1 4.5 4.5c-.18 0-.35-.01-.52-.04l-3.94 2.76a3.5 3.5 0 0 1-1.54 3.36l-2.1 5.08A10 10 0 1 0 12 2z"/></svg>
            Steam
          </a>`;
        }
      }

      return `
        <article class="card project-card" data-id="${project.id}">
          <div class="project-card__image-wrap">
            <img class="project-card__image" src="${project.image}" alt="${project.title}" loading="lazy" onerror="this.src='assets/images/Popit.png'">
            <div class="project-card__badge-group">
              <span class="project-card__badge">${project.category}</span>
            </div>
          </div>

          <div class="project-card__content">
            <div class="project-card__header">
              <span class="project-card__company">${project.company}</span>
              <h3 class="project-card__title">${project.title}</h3>
              <span class="project-card__role-tag">${project.role} • ${project.platforms.join(', ')}</span>
            </div>

            <p class="project-card__description">${project.shortDescription}</p>

            <div class="project-card__tech-stack">
              ${project.technologies.slice(0, 4).map(t => `<span class="tech-pill">${t}</span>`).join('')}
              ${project.technologies.length > 4 ? `<span class="tech-pill">+${project.technologies.length - 4}</span>` : ''}
            </div>

            <div class="project-card__footer">
              <button class="btn btn--outline btn--sm view-case-study-btn" data-id="${project.id}">
                View Details
              </button>
              <div class="project-card__store-links">
                ${storeButtons}
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach Event Listeners to Case Study Buttons
    container.querySelectorAll('.view-case-study-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const proj = projects.find(p => p.id === id);
        if (proj) openProjectModal(proj);
      });
    });
  }

  renderGrid();
}
