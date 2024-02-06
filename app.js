// Listen for click events on the element with the id "logo"
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('GoToStartPage').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        window.location.href = '/minaidisportfolio'; // Navigate to the root URL (index.html)
    });
    });

    // Listen for click events on the element with the id "logo"
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('GoToStartPage2').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        window.location.href = '/minaidisportfolio'; // Navigate to the root URL (index.html)
    });
    });

document.querySelector('button.GetStarted').addEventListener('click', () => {
    // Define the URL here so it can be updated dynamically if needed
    let url = 'about.html';
    window.location.href = url; // Navigate to the defined URL
});