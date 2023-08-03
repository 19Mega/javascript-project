// Get the circle element
const circle = document.getElementById('circle');

// Set initial position and direction
let right = 0; 
let direction = 'right';

// Function to move the circle
function moveCircle() {

  // Move circle left or right
  if(direction === 'right') {
    right += 10;
    circle.style.right = right + 'px';
  } else {
    right -= 10;
    circle.style.right = right + 'px';
  }

  // Switch direction if edge reached
  if(right >= window.innerWidth) {
    direction = 'left';
  }
  if(right <= 0) {
    direction = 'right';
  }

  // Repeat animation
  requestAnimationFrame(moveCircle);
}

// Start animation 
requestAnimationFrame(moveCircle);