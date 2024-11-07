function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');
  
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Show popup on submit
document.getElementById('submit-btn').onclick = function() {
    document.getElementById('popup').style.display = 'block';
};
  
// Hide popup on clicking "OK" button
document.getElementById('popup-ok-btn').onclick = function() {
    document.getElementById('popup').style.display = 'none';
};
  
// Scroll to Top Function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
  
// Show Scroll to Top button on scroll
window.onscroll = function() {
const scrollButton = document.getElementById('scroll-to-top');
if (document.documentElement.scrollTop > 100) {
    scrollButton.style.display = 'block';
} else {
    scrollButton.style.display = 'none';
}
};

document.getElementById('submit-btn').addEventListener('click', function() {
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();

    // Check if the message is not empty
    if (message !== "") {
        // Create a new recommendation div
        const recommendationDiv = document.createElement('div');
        recommendationDiv.className = 'recommendation';

        // Create a paragraph element for the recommendation text
        const paragraph = document.createElement('p');
        paragraph.textContent = name ? `“${message}” - ${name}` : `“${message}”`;

        // Append the paragraph to the recommendation div
        recommendationDiv.appendChild(paragraph);

        // Append the new recommendation to the recommendations container
        document.querySelector('.recommendations-container').appendChild(recommendationDiv);

        // Clear the input fields
        document.getElementById('name').value = '';
        document.getElementById('message').value = '';

        // Show popup confirmation
        showPopup();
    } else {
        alert("Please enter a message before submitting.");
    }
});


  
  