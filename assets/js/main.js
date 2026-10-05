/**
 * Main Application Entry Point
 */
import { initTheme } from './modules/theme.js?v=5';
import { initNavigation } from './modules/navigation.js?v=5';
import { initProjects } from './modules/projects.js?v=5';
import { initTimeline } from './modules/timeline.js?v=5';
import { initSkills } from './modules/skills.js?v=5';
import { initStats } from './modules/stats.js?v=5';
import { initWorkflow, initCertifications } from './modules/workflow.js?v=5';
import { initModal } from './modules/modal.js?v=5';
import { initEmailActions } from './modules/email.js?v=5';

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
  initEmailActions();

  console.log('Hitesh Mori Portfolio - Fully Initialized.');
});
