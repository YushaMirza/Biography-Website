document.addEventListener('DOMContentLoaded', function () {
    fetch('../Assets/Json/about.json')
        .then(response => response.json())
        .then(data => {
            renderTeam(data.team);
            renderLeader(data.leader);
        });

    function renderTeam(team) {
        const teamGrid = document.getElementById('team-grid');
        teamGrid.innerHTML = '';
        team.forEach(member => {
            teamGrid.innerHTML += `
            <div class="team-card" data-aos="fade-up" data-aos-delay="350">
                <div class="avatar-container">
                    <div class="avatar-circle">
                        <img src="${member.image}" alt="${member.name}" class="avatar-img">
                    </div>
                    <div class="avatar-hover-effect"></div>
                </div>
                <h3 class="member-name">${member.name}</h3>
                <p class="member-role">${member.role}</p>
                <div class="member-bio">
                    <p>${member.bio}</p>
                </div>
                <div class="social-links">
                    <a href="${member.social.Instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="${member.social.github}" target="_blank"><i class="fab fa-github"></i></a>
                </div>
            </div>
        `;
        });
    }

});


function toggleSidebar(button) {
    button.classList.toggle('active');
    const sidebar = document.getElementById('mobileSidebar');
    sidebar.classList.toggle('active');

    document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
}

function toggleMobileDropdown(toggleElement) {
    const dropdownContent = toggleElement.nextElementSibling;
    toggleElement.classList.toggle('active');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('click', function (event) {
    const sidebar = document.getElementById('mobileSidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');

    if (sidebar.classList.contains('active') &&
        !sidebar.contains(event.target) &&
        !sidebarToggle.contains(event.target)) {
        sidebar.classList.remove('active');
        sidebarToggle.classList.remove('active');
        document.body.style.overflow = '';
    }
});