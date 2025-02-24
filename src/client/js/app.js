import { handleSubmit } from "./handleSubmit.js";

// Select the trip form from the DOM
const form = document.getElementById('trip');

// Add an event listener to handle form submission
if (form) {
    form.addEventListener('submit', handleSubmit);
}

// Export handleSubmit function for use in other modules
export {
    handleSubmit,
};
