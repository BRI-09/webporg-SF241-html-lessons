
// introduction/js/app.js
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('toggleGalleryBtn');
  const gallery = document.getElementById('galleryContainer');

  if (!btn || !gallery) return;

  btn.addEventListener('click', () => {
    const isHidden = gallery.style.display === '' || gallery.style.display === 'none';
    gallery.style.display = isHidden ? 'block' : 'none';
    btn.textContent = isHidden ? 'Hide Gallery' : 'Show Gallery';
  });
});
``
