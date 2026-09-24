/* The outlet map, framed by locations.html.
   Which outlet is in view is driven entirely by the URL hash, so the parent
   page steers it by writing a hash and letting `hashchange` do the rest. */

const SPOTS = {
  seletar: {
    ll: [1.385194, 103.872571],
    name: 'Seletar Hills Estate',
    addr: '36 Jalan Selaseh #01-01<br>Singapore 808450',
    q: '1.385194,103.872571'
  },
  frasers: {
    ll: [1.2789091, 103.8473967],
    name: 'Frasers Tower',
    addr: '182 Cecil Street #01-04<br>Singapore 069547',
    q: '1.2789091,103.8473967'
  }
};

const map = L.map('map', { scrollWheelZoom: false, zoomControl: true });

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const icon = L.divIcon({
  className: '',
  html: '<div class="pin"></div>',
  iconSize: [18, 18],
  iconAnchor: [9, 9],
  popupAnchor: [0, -10]
});

const markers = {};
for (const [key, spot] of Object.entries(SPOTS)) {
  markers[key] = L.marker(spot.ll, { icon })
    .addTo(map)
    .bindPopup(
      `<b>${spot.name}</b>${spot.addr}<br>` +
      `<a href="https://www.google.com/maps/search/?api=1&query=${spot.q}" target="_blank" rel="noopener">Directions &#8599;</a>`
    );
}

const everywhere = L.latLngBounds(Object.values(SPOTS).map(s => s.ll));

function render() {
  const key = location.hash.slice(1);
  if (SPOTS[key]) {
    map.flyTo(SPOTS[key].ll, 16, { duration: 0.8 });
    markers[key].openPopup();
  } else {
    map.closePopup();
    map.fitBounds(everywhere, { padding: [60, 60] });
  }
}

window.addEventListener('hashchange', render);
render();
