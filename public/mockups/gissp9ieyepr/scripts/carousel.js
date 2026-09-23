/*
 * Explore carousel.
 *
 * Compiled from the design's `Home.dc.html` component logic: the row starts
 * centred on the middle tile, and the two round buttons step it one tile at a
 * time. Scrolling itself is native (scroll-snap + overflow-x), so the page
 * works without this file — it only adds the initial centring and the buttons.
 */
(() => {
  const row = document.querySelector('[data-carousel-row]');
  if (!row) return;

  const prev = document.querySelector('[data-carousel-prev]');
  const next = document.querySelector('[data-carousel-next]');

  const gap = () => parseFloat(getComputedStyle(row).columnGap) || 0;

  const step = (direction) => {
    const tile = row.querySelector('.tile');
    const distance = (tile ? tile.offsetWidth : 300) + gap();
    row.scrollBy({ left: direction * distance });
  };

  prev?.addEventListener('click', () => step(-1));
  next?.addEventListener('click', () => step(1));

  // Land on the middle tile without animating there from the left edge.
  requestAnimationFrame(() => {
    const previous = row.style.scrollBehavior;
    row.style.scrollBehavior = 'auto';
    row.scrollLeft = (row.scrollWidth - row.clientWidth) / 2;
    row.style.scrollBehavior = previous;
  });
})();
