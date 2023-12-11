const mapContainer = document.getElementById('map-container');
let playerPositionX = 0; // Initialize player's X position
let playerPositionY = 0; // Initialize player's Y position

function updateMap() {
    // Update background position based on player's position
    mapContainer.style.backgroundPosition = `-${playerPositionX}px -${playerPositionY}px`;
}

// Example: Move player to the right
playerPositionX += 10;
updateMap();