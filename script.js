// Get all the anchor tags inside the ".project" class
const projectLinks = document.querySelectorAll('.project a');

// Add an event listener to each anchor tag
projectLinks.forEach(link => {
    link.addEventListener('click', event => {
        link.classList.add('clicked'); // Add a class to the clicked anchor tag
    });
});
