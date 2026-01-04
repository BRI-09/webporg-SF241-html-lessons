
// introduction/js/app.js
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggleGalleryBtn');
  const gallery   = document.getElementById('gallery');
  const status    = document.getElementById('galleryStatus');

  if (!toggleBtn || !gallery) return;

  const isHidden = () => gallery.hasAttribute('hidden');

  const show = () => {
    gallery.removeAttribute('hidden');
    toggleBtn.textContent = 'Hide Gallery';
    toggleBtn.setAttribute('aria-expanded', 'true');
    if (status) status.textContent = '(visible)';
  };

  const hide = () => {
    gallery.setAttribute('hidden', '');
    toggleBtn.textContent = 'Show Gallery';
    toggleBtn.setAttribute('aria-expanded', 'false');
    if (status) status.textContent = '(hidden)';
  };

  // Button click toggles grid visibility
  toggleBtn.addEventListener('click', () => {
    isHidden() ? show() : hide();
  });

  // Optional: keyboard shortcut "g" to toggle
  document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'g') {
      isHidden() ? show() : hide();
    }
  });
});
``
