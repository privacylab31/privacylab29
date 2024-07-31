document.getElementById('privacy-notice-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    showPrivacyNotice();
});

function showPrivacyNotice() {
    const container = document.getElementById('privacy-notice-container');
    container.style.display = 'block'; // Make the container visible
}
