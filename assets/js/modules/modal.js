/**
 * Project Detail Case Study Modal Module
 */
export function initModal() {
  const overlay = document.getElementById('projectModal');
  const closeBtn = document.getElementById('modalCloseBtn');

  if (!overlay) return;

  // Close triggers
  closeBtn?.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('modal-overlay--active')) {
      closeModal();
    }
  });

  function closeModal() {
    overlay.classList.remove('modal-overlay--active');
    document.body.style.overflow = '';
  }
}

export function openProjectModal(project) {
  const overlay = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');
  if (!overlay || !modalContent) return;

  // Store Buttons HTML
  let storeButtonsHtml = '';
  if (project.links) {
    if (project.links.android) {
      storeButtonsHtml += `<a href="${project.links.android}" target="_blank" rel="noopener" class="store-btn">
        <svg viewBox="0 0 24 24"><path d="M17.523 15.3414l1.8702 3.2393a.4996.4996 0 01-.8654.5l-1.8972-3.2861a9.9248 9.9248 0 01-9.2612 0l-1.8972 3.2861a.4996.4996 0 01-.8654-.5l1.8702-3.2393A9.9706 9.9706 0 012 8.5h20a9.9706 9.9706 0 01-4.477 6.8414zM7 6.5a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z"/></svg>
        Google Play
      </a>`;
    }
    if (project.links.ios) {
      storeButtonsHtml += `<a href="${project.links.ios}" target="_blank" rel="noopener" class="store-btn">
        <svg viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.07c.68-.82 1.13-1.96.99-3.1-.98.04-2.16.66-2.85 1.47-.62.71-1.15 1.88-1 3.01 1.09.08 2.19-.56 2.86-1.38z"/></svg>
        App Store
      </a>`;
    }
    if (project.links.steam) {
      storeButtonsHtml += `<a href="${project.links.steam}" target="_blank" rel="noopener" class="store-btn">
        <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-9.94 8.89l5.08 2.1a3.5 3.5 0 0 1 3.36-1.49l2.76-3.95A4.47 4.47 0 0 1 13 6.5a4.5 4.5 0 1 1 4.5 4.5c-.18 0-.35-.01-.52-.04l-3.94 2.76a3.5 3.5 0 0 1-1.54 3.36l-2.1 5.08A10 10 0 1 0 12 2z"/></svg>
        Steam
      </a>`;
    }
  }

  modalContent.innerHTML = `
    <div class="modal__header-banner">
      <div class="modal__icon-wrap">
        <img class="modal__app-icon" src="${project.image}" alt="${project.title}" onerror="this.src='assets/images/Popit.png'">
      </div>
      <div class="modal__header-info">
        <span class="modal__category">${project.category} • ${project.company}</span>
        <h2 class="modal__title">${project.title}</h2>
        <div class="modal__meta-strip">
          <div class="modal__meta-item"><span>Role:</span> ${project.role}</div>
          <div class="modal__meta-item"><span>Platforms:</span> ${project.platforms.join(', ')}</div>
        </div>
      </div>
    </div>
    <div class="modal__body">
      <div class="modal__section">
        <h3 class="modal__section-title">Overview</h3>
        <p class="modal__text">${project.fullDescription || project.shortDescription}</p>
      </div>

      <div class="modal__grid-split">
        <div class="modal__box">
          <h4 class="modal__box-title">Technical Challenges</h4>
          <p class="modal__text">${project.challenges || 'Optimizing frame rate, memory allocations, and cross-platform compatibility.'}</p>
        </div>
        <div class="modal__box">
          <h4 class="modal__box-title">Solutions & Architecture</h4>
          <p class="modal__text">${project.solutions || 'Implemented clean design patterns and memory profiling.'}</p>
        </div>
      </div>

      <div class="modal__section">
        <h3 class="modal__section-title">My Contributions</h3>
        <p class="modal__text">${project.contribution}</p>
      </div>

      <div class="modal__section">
        <h3 class="modal__section-title">Technologies Used</h3>
        <div class="modal__tech-tags">
          ${project.technologies.map(tech => `<span class="tech-pill">${tech}</span>`).join('')}
        </div>
      </div>

      ${storeButtonsHtml ? `
        <div class="modal__actions">
          <span style="font-weight:600;font-size:0.875rem;color:var(--text-muted);">Available On:</span>
          ${storeButtonsHtml}
        </div>
      ` : ''}
    </div>
  `;

  overlay.classList.add('modal-overlay--active');
  document.body.style.overflow = 'hidden';
}
