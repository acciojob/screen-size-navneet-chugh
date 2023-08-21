//your JS code here. If required.
function updateSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const sizeText = `Width: ${width} and Height: ${height}`;
  document.getElementById('sizeText').textContent = sizeText;
}

// Initial call
updateSize();

// Listen for window resize events
window.addEventListener('resize', updateSize);