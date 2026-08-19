/**
 * Animated Counter Module
 */
import { fetchData } from '../utils/fetch.js';

export async function initStats() {
  const container = document.getElementById('statsContainer');
  if (!container) return;

  const stats = await fetchData('data/statistics.json');
  if (!stats || !stats.length) return;

  container.innerHTML = stats.map(stat => `
    <div class="card stat-card">
      <span class="stat-card__number stat-number" data-target="${stat.value}" data-suffix="${stat.suffix}">
        0${stat.suffix}
      </span>
      <h3 class="stat-card__title">${stat.label}</h3>
      <p class="stat-card__desc">${stat.description}</p>
    </div>
  `).join('');

  // IntersectionObserver for Counter Animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters(container);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  observer.observe(container);
}

function animateCounters(container) {
  const counters = container.querySelectorAll('.stat-number');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'), 10);
    const suffix = counter.getAttribute('data-suffix') || '';
    const duration = 1800; // ms
    const frameRate = 30;
    const totalFrames = Math.round(duration / (1000 / frameRate));
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const current = Math.round(target * easeOutQuad(progress));
      counter.innerText = `${current}${suffix}`;

      if (frame >= totalFrames) {
        clearInterval(timer);
        counter.innerText = `${target}${suffix}`;
      }
    }, 1000 / frameRate);
  });
}

function easeOutQuad(x) {
  return 1 - (1 - x) * (1 - x);
}
