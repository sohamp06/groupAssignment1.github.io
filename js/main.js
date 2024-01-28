/*
* Name: Soham Patel
* Student ID: 100894926
* Name: Salvi Patel
* Student ID: 100894926
* Date: January 27, 2024
*/

// JavaScript for the home page
let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 2000);
}

document.addEventListener("DOMContentLoaded", function () {
    showSlides();

    const projectsData = [
        { title: 'ICE 1', description: 'Description for Project 1', imageUrl: 'Assignment2/images/ice1.jpg' },
        { title: 'Project 2', description: 'Description for Project 2', imageUrl: 'project2.jpg' },
    ];

    let projectsPerPage = 2;
    let currentIndex = 0;

    function createProjectCard(project) {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <img src="${project.imageUrl}" alt="${project.title}">
            <p>${project.description}</p>
        `;
        return projectCard;
    }

    function displayProjects() {
        const portfolioSection = document.getElementById('portfolio');
        for (let i = currentIndex; i < currentIndex + projectsPerPage && i < projectsData.length; i++) {
            const projectCard = createProjectCard(projectsData[i]);
            portfolioSection.appendChild(projectCard);
        }
    }

    document.getElementById('loadMoreBtn').addEventListener('click', () => {
        currentIndex += projectsPerPage;
        displayProjects();
    });

    displayProjects();

    function openModal(name, role, description) {
        document.getElementById('modal-name').innerText = name;
        document.getElementById('modal-role').innerText = role;
        document.getElementById('modal-description').innerText = description;
        document.getElementById('modal').style.display = 'flex';
    }

    function closeModal() {
        document.getElementById('modal').style.display = 'none';
    }

    document.addEventListener('DOMContentLoaded', function () {
        const teamMembers = document.querySelectorAll('.team-member');

        teamMembers.forEach(member => {
            member.addEventListener('click', function () {
                const name = member.querySelector('h3').innerText;
                const role = member.querySelector('p').innerText;
                const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
                openModal(name, role, description);
            });
        });
    });
});
