// Initialize the map
var map = L.map('map').setView([20, 0], 2);  // Center at latitude 20, longitude 0

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add clickable points
var points = [
    { coords: [51.505, -0.09], article: 'https://en.wikipedia.org/wiki/London' },
    { coords: [40.7128, -74.0060], article: 'https://en.wikipedia.org/wiki/New_York_City' }
];

points.forEach(function(point) {
    L.marker(point.coords).addTo(map)
        .bindPopup('<a href="' + point.article + '" target="_blank">Read Article</a>');
});
