document.addEventListener('DOMContentLoaded', () => {
    const instructionsModal = document.getElementById('instructionsModal');
    const closeModalButton = document.getElementById('closeModalButton');

    // Show the modal when the page loads
    instructionsModal.style.display = 'flex';

    // Hide the modal when the close button is clicked
    closeModalButton.addEventListener('click', () => {
        instructionsModal.style.display = 'none';
    });
});

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    if (name && phone) {
        // Log the user info
        console.log('Name:', name);
        console.log('Phone:', phone);

        // Store user information in localStorage
        localStorage.setItem('userName', name);
        localStorage.setItem('userPhone', phone);

        // Redirect to the spinning wheel page
        window.location.href = 'spiningwheel.html';
    }
});