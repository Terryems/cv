// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  }
  
  // Trigger the function when a button is clicked, for example
  const toggleButton = document.getElementById('toggleButton'); // Assuming you have a button with id="toggleButton"
  toggleButton.addEventListener('click', toggleDarkMode);
  