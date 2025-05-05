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







document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const laureateName = urlParams.get('name');
    
    const laureates = {
        'einstein': {
            name: 'Albert Einstein',
            title: 'Physics Nobel Laureate (1921)',
            images: [
                'Assets/Images/Winners/albert-gallery1.jpg',
                'Assets/Images/Winners/albert-gallery2.jpg',
                'Assets/Images/Winners/albert-gallery3.jpg',
                'Assets/Images/Winners/albert-gallery4.jpg',
               
            ]
        },
        'curie': {
            name: 'Marie Curie',
            title: 'Physics (1903) & Chemistry (1911) Nobel Laureate',
            images: [
                'Assets/Images/Winners/marie-gallery1.png',
                'Assets/Images/Winners/marie-gallery2.png',
                'Assets/Images/Winners/marie-gallery3.png',
                'Assets/Images/Winners/marie-gallery4.jfif',
                
            ]
        },
        'bardeen': {
            name: 'John Bardeen',
            title: 'Physics Nobel Laureate (1956, 1972)',
            images: [
                'Assets/Images/Winners/john-gallery1.jpg',
                'Assets/Images/Winners/john-gallery2.jpg',
                'Assets/Images/Winners/john-gallery3.jpg',
                'Assets/Images/Winners/john-gallery4.jpg',
                
            ]
        },
        'pauling': {
            name: 'Linus Pauling',
            title: 'Chemistry (1954) & Peace (1962) Nobel Laureate',
            images: [
                'Assets/Images/Winners/linus-gallery1.png',
                'Assets/Images/Winners/linus-gallery2.jpg',
                'Assets/Images/Winners/linus-gallery3.png',
                'Assets/Images/Winners/linus-gallery4.jpg',
               
            ]
        },
        'malala': {
            name: 'Malala Yousafzai',
            title: 'Peace Nobel Laureate (2014)',
            images: [
                'Assets/Images/Winners/malala.jpg',
                'Assets/Images/Winners/malala-gallery1.jpg',
                'Assets/Images/Winners/malala-gallery2.jpg',
                'Assets/Images/Winners/malala-gallery3.jpg',
            ]
        },
        'nelson': {
            name: 'Nelson Mandela',
            title: 'Peace Nobel Laureate (1993)',
            images: [
                'Assets/Images/Winners/nelson.jpg',
                'Assets/Images/Winners/nelson-gallery1.jpg',
                'Assets/Images/Winners/nelson-gallery2.jpg',
                'Assets/Images/Winners/nelson-gallery3.jpg'
            ]
        },
        'teresa': {
            name: 'Mother Teresa',
            title: 'Peace Nobel Laureate (1979)',
            images: [
                'Assets/Images/Winners/teresa.jpg',
                'Assets/Images/Winners/teresa-gallery1.jpg',
                'Assets/Images/Winners/teresa-gallery2.jpg',
                'Assets/Images/Winners/teresa-gallery3.jpg'
            ]
        },
        'jjthomson': {
            name: 'J.J. Thomson',
            title: 'Physics Nobel Laureate (1906)',
            images: [
                'Assets/Images/Winners/jjthomson.png',
                'Assets/Images/Winners/jjthomson-gallery1.png',
                'Assets/Images/Winners/jjthomson-gallery2.png',
                'Assets/Images/Winners/jjthomson-gallery3.png'
            ]
        }
    };

    if (laureateName && laureates[laureateName]) {
        const laureate = laureates[laureateName];
        document.getElementById('laureateName').textContent = laureate.name;
        document.getElementById('laureateDesc').textContent = laureate.title;
        document.title = `${laureate.name} - Gallery`;

        const galleryContainer = document.getElementById('laureateGallery');
        laureate.images.forEach(imagePath => {
            const cardHtml = `
                <div class="col-md-6 col-lg-4 col-xl-3">
                    <div class="luxury-card">
                        <div class="card-frame">
                            <div class="card-image">
                                <div class="image-overlay"></div>
                                <img src="${imagePath}" alt="${laureate.name}" class="img-portrait">
                            </div>
                        </div>
                    </div>
                </div>
            `;
            galleryContainer.innerHTML += cardHtml;
        });
    }
});