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




document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.card-img');

    images.forEach(img => {
        img.style.opacity = '1';

        img.onerror = function () {
            this.style.opacity = '1';
            this.src = 'https://via.placeholder.com/400x600?text=Portrait+Not+Available';
        };
    });

    document.querySelectorAll('.view-button').forEach(button => {
        button.addEventListener('click', function (e) {
            e.stopPropagation();
            const name = this.closest('.card-overlay').querySelector('h3').textContent;
            alert(`Showing details for ${name}`);
        });
    });

    
    const cards = document.querySelectorAll('.nobel-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});





document.addEventListener('DOMContentLoaded', function () {
    const menuTitles = document.querySelectorAll('.menu-title');
    const updateMenuStates = () => {
        const menuLists = document.querySelectorAll('.menu-list');

        if (window.innerWidth <= 768) {
            menuLists.forEach(list => {
                if (!list.classList.contains('active') && !list.parentElement.classList.contains('newsletter')) {
                    list.style.maxHeight = '0';
                    list.style.opacity = '0';
                }
            });
        } else {
            menuLists.forEach(list => {
                list.style.maxHeight = '';
                list.style.opacity = '';
                list.classList.remove('active');
            });
        }
    };

    const setupClickHandlers = () => {
        menuTitles.forEach(title => {
            title.addEventListener('click', function () {
                if (window.innerWidth <= 768) {
                    const menuList = this.nextElementSibling;
                    if (menuList.classList.contains('menu-list')) {
                        menuList.classList.toggle('active');

                        if (menuList.classList.contains('active')) {
                            menuList.style.maxHeight = menuList.scrollHeight + 'px';
                            menuList.style.opacity = '1';
                        } else {
                            menuList.style.maxHeight = '0';
                            menuList.style.opacity = '0';
                        }
                    }
                }
            });
        });
    };

    updateMenuStates();
    setupClickHandlers();

    window.addEventListener('resize', function () {
        updateMenuStates();
    });
});