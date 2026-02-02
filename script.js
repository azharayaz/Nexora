console.log("JS loaded");

const startBtn = document.getElementById("startEngineBtn");
const engineSound = new Audio("audio/engine.mp3");

let stopTimer = null;

startBtn.addEventListener("click", () => {
  engineSound.pause();
  engineSound.currentTime = 0;

  if (stopTimer) clearTimeout(stopTimer);

  engineSound.play().catch(e => console.log(e));

  stopTimer = setTimeout(() => {
    engineSound.pause();
    engineSound.currentTime = 0;
  }, 4000);
});


// ========================================
// SIGNUP MODAL FUNCTIONALITY
// Add this to your script.js file
// ========================================

// Get elements
const openSignupBtn = document.getElementById('openSignupBtn');
const closeSignupBtn = document.getElementById('closeSignupBtn');
const signupCard = document.getElementById('signupCard');
const signupBackdrop = document.getElementById('signupBackdrop');

// Function to open signup modal
function openSignup() {
  signupCard.classList.add('active');
  signupBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Function to close signup modal
function closeSignup() {
  signupCard.classList.remove('active');
  signupBackdrop.classList.remove('active');
  document.body.style.overflow = ''; // Restore scrolling
}

// Event listeners
if (openSignupBtn) {
  openSignupBtn.addEventListener('click', openSignup);
}

if (closeSignupBtn) {
  closeSignupBtn.addEventListener('click', closeSignup);
}

if (signupBackdrop) {
  signupBackdrop.addEventListener('click', closeSignup);
}

// Close modal on Escape key press
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && signupCard.classList.contains('active')) {
    closeSignup();
  }
});

// Prevent form submission for demo (remove this in production)
const signupForm = document.querySelector('.signup-card form');
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Sign up functionality would go here!');
    // Add your actual signup logic here
  });
}




