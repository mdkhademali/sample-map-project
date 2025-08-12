const map = L.map('map').setView([23.8103, 90.4125], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors',
}).addTo(map);

fetch('http://localhost:5000/api/geojson')
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data).addTo(map);
  })
  .catch(err => console.error('Error loading GeoJSON:', err));