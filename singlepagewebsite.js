document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('recommendation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get values from the form
    const recommendationText = document.getElementById('recommendation-text').value;
    const recommenderName = document.getElementById('recommender-name').value;
    const recommenderPosition = document.getElementById('recommender-position').value;

    // Here you could add code to save the recommendation to a database or array if needed

    // Display confirmation dialog
    document.getElementById('confirmation-dialog').style.display = 'block';

    // Clear form fields after submission
    document.getElementById('recommendation-form').reset();
});

// Function to close the confirmation dialog
function closeDialog() {
    document.getElementById('confirmation-dialog').style.display = 'none';
}
