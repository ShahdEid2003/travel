import { handleSubmit } from './js/handleSubmit.js';

import './styles/main.scss'; // Import main SCSS styles

// Function to set up event listeners
const setupEventListeners = () => {
    const form = document.getElementById('trip'); // Select the trip form from the DOM
    if (form) {
        form.addEventListener('submit', handleSubmit); // Add an event listener for form submission
    }
};

// Ensure event listeners are set up after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', setupEventListeners);

// Export handleSubmit function for use in other modules
export { handleSubmit };
