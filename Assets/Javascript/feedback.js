document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
      "The World's Most Prestigious Award for Excellence.",
      "A Legacy Written in Discovery, Peace, and Progress.",
      "Rewriting the Future, One Laureate at a Time.",
      "For Those Who Dare to Redefine Possible.",
      "Echoes of Brilliance, Resonating Through Time."
    ];
  
    let currentIndex = 0;
    const container = document.querySelector('.quote-container');
  
    function animateQuotes() {
      const active = container.querySelector('.active');
      const next = container.querySelector('.next');
  
      active.classList.add('exit');
      
      next.classList.add('active');
  
      setTimeout(() => {
        active.remove();
        next.classList.remove('next');
        
        const newNext = document.createElement('div');
        newNext.className = 'quote next';
        newNext.textContent = quotes[(currentIndex + 2) % quotes.length];
        container.appendChild(newNext);
  
        currentIndex = (currentIndex + 1) % quotes.length;
      }, 1000);
    }
  
    setTimeout(() => {
      setInterval(animateQuotes, 5000);
    }, 1000);
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


const stars = document.querySelectorAll('.star');
let rating = 0;

stars.forEach(star => {
    star.addEventListener('click', function () {
        rating = parseInt(this.dataset.value);
        document.getElementById('luxuryRating').value = rating;

        stars.forEach((s, index) => {
            s.classList.toggle('active', index < rating);
        });
    });
});

const serviceCards = document.querySelectorAll('.service-option');
const selectedServiceInput = document.getElementById('selectedService');
let selectedServices = new Set();

serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        const service = card.dataset.service;

        card.classList.toggle('selected');
        if (card.classList.contains('selected')) {
            selectedServices.add(service);
        } else {
            selectedServices.delete(service);
        }

        selectedServiceInput.value = Array.from(selectedServices).join(',');
    });
});

document.getElementById('luxuryForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const errorMessage = document.getElementById('errorMessage');
    errorMessage.style.display = 'none';
    errorMessage.innerHTML = '';

    let isValid = true;
    let messages = [];

    if (!rating) {
        messages.push('Please provide a rating by selecting stars');
        isValid = false;
    }

    if (selectedServices.size === 0) {
        messages.push('Please select at least one feature you liked about us');
        isValid = false;
    }

    if (!isValid) {
        errorMessage.innerHTML = messages.map(msg => `<span><i class='fas fa-exclamation-circle error-icon'></i> ${msg}</span>`).join('<br>');
        errorMessage.style.display = 'block';
        return;
    }

    const successPopup = document.getElementById('successPopup');
    successPopup.classList.add('active');

    setTimeout(() => {
        this.reset();
        selectedServices.clear();
        selectedServiceInput.value = '';
        serviceCards.forEach(card => card.classList.remove('selected'));
        stars.forEach(star => star.classList.remove('active'));
        rating = 0;
        successPopup.classList.remove('active');
    }, 3000);
});

window.addEventListener('load', () => {
    document.querySelectorAll('.form-group').forEach((el, index) => {
        el.style.animationDelay = `${index * 0.2 + 1}s`;
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




function submitFeedback(){
    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let feedback = document.getElementById("feedback").value;

    if (!rating) {
        console.log('Please provide a rating by selecting stars');
    } else if (selectedServices.size === 0) {
        console.log('Please select at least one feature you liked about us');
    } else if (name === "" || email === "" || feedback === "") {
        console.log("Please fill in all fields.");
    } else {
        console.log("User Feedback:" );
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Feedback: " + feedback);
    }
}