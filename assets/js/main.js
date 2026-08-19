/**
 * Main Application Entry Point
 */
import { initTheme } from './modules/theme.js?v=2';
import { initNavigation } from './modules/navigation.js?v=2';
import { initProjects } from './modules/projects.js?v=2';
import { initTimeline } from './modules/timeline.js?v=2';
import { initSkills } from './modules/skills.js?v=2';
import { initStats } from './modules/stats.js?v=2';
import { initWorkflow, initCertifications } from './modules/workflow.js?v=2';
import { initModal } from './modules/modal.js?v=2';
import { initContactForm } from './modules/form.js?v=2';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initModal();
  initProjects();
  initTimeline();
  initSkills();
  initStats();
  initWorkflow();
  initCertifications();
  initContactForm();

  console.log('Hitesh Mori Portfolio - Fully Initialized.');
});
