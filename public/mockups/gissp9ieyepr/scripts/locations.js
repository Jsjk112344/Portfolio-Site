/* Locations page: the filter chips above the map, and each outlet's
   "Show on map" button. Both do the same thing — point the framed map at an
   outlet by writing its hash — so they share one path. */

const frame = document.querySelector('.map__frame iframe');
const chips = [...document.querySelectorAll('[data-map-focus]')];

function focus(key) {
  if (!frame) return;

  /* Same-origin, so steer the live document rather than reloading the iframe;
     reloading would drop the tiles and flash the frame on every click. */
  try {
    const win = frame.contentWindow;
    if (win && win.location.hash.slice(1) !== key) {
      win.location.hash = key;
    }
  } catch {
    frame.src = `locations-map.html#${key}`;
  }

  for (const chip of chips) {
    chip.setAttribute('aria-pressed', String(chip.dataset.mapFocus === key));
  }
}

for (const chip of chips) {
  chip.addEventListener('click', () => focus(chip.dataset.mapFocus));
}

for (const button of document.querySelectorAll('[data-show-outlet]')) {
  button.addEventListener('click', () => {
    focus(button.dataset.showOutlet);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
