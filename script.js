// Sample Project Data
const projects = [
    {
        title: 'Project 1',
        description: 'A dynamic website built with HTML, CSS, and JavaScript.',
        image: 'assets/images/project1.jpg',
        link: 'https://github.com/yourusername/project1'
    },
    {
        title: 'Project 2',
        description: 'A responsive web application built with React.js.',
        image: 'assets/images/project2.jpg',
        link: 'https://github.com/yourusername/project2'
    },
    {
        title: 'Project 3',
        description: 'An API service built with Node.js and Express.',
        image: 'assets/images/project3.jpg',
        link: 'https://github.com/yourusername/project3'
    }
];

// Function to populate projects dynamically
function loadProjects() {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';  // Clear existing content

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View on GitHub</a>
        `;
        
        projectList.appendChild(projectCard);
    });
}

// Function to handle form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you for your message, ${name}!`);
        document.getElementById('contact-form').reset(); // Reset form after submission
    } else {
        alert('Please fill out all fields.');
    }
});

// Load Projects on page load
window.onload = function() {
    loadProjects();
};
