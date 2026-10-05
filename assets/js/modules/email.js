/**
 * Email Interaction & Copy-to-Clipboard Module
 */
export function initEmailActions() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const emailToCopy = 'morihitesh3327@gmail.com';

  if (copyBtn) {
    copyBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      e.stopPropagation();

      try {
        await navigator.clipboard.writeText(emailToCopy);
        const originalHTML = copyBtn.innerHTML;
        copyBtn.innerHTML = `
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#10b981" stroke-width="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        `;
        copyBtn.setAttribute('title', 'Copied to clipboard!');
        copyBtn.classList.add('btn-copy-email--success');

        setTimeout(() => {
          copyBtn.innerHTML = originalHTML;
          copyBtn.setAttribute('title', 'Copy Email Address');
          copyBtn.classList.remove('btn-copy-email--success');
        }, 2500);
      } catch (err) {
        console.error('Clipboard copy failed:', err);
      }
    });
  }
}
