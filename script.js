// JavaScript to generate random RGB values and apply them to the filter rectangle
function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r},${g},${b},0.3)`;
  }
  
  // Apply the random RGB value to the filter rectangle
function updateFilterColor() {
    const filterRectangle = document.getElementById('filterRectangle');
    filterRectangle.style.backgroundColor = getRandomRGB();
}
  
// Update the filter color initially and set an interval to change it periodically
updateFilterColor();
setInterval(updateFilterColor, 5000); // Change the color every 5 seconds