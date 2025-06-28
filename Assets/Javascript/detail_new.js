const urlParams = new URLSearchParams(window.location.search);
const scientistName = decodeURIComponent(urlParams.get('name')) || 'Albert Einstein';
const page = document.getElementById('page');

fetch('../Assets/Json/detail_page.json')
    .then(response => response.json())
    .then(data => {
        const scientist = data.detail.find(item => item.Fullname === scientistName);

        if (scientist) {

            page.innerHTML = `
          <!-- Announcement Bar -->
    <div class="announcement-bar">
        <span>Grand Opening - Explore our stories of greatness</span>
    </div>

    <!-- Header -->
    <div class="fullheader">
            <div class="header-wrapper">
                <div class="header">
                    <div class="quote-container">
                        <div class="quote active">The World's Most Prestigious Award for Excellence.</div>
                        <div class="quote next">Celebrating brilliance that reshapes the world since 1901.</div>
                    </div>
                    <div class="logo">
                        <img src="Assets/Images/Icons/logo.png" alt="Logo" />
                    </div>
                    <div class="account-icon">
                        <img src="Assets/Images/Icons/user.png" alt="Account Icon" />
                    </div>
                    <button class="sidebar-toggle" onclick="toggleSidebar(this)">
                        <div class="hamburger">
                            <div class="hamburger-line"></div>
                            <div class="hamburger-line"></div>
                            <div class="hamburger-line"></div>
                        </div>
                    </button>
                </div>
            </div>
            <nav class="navbar">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li class="dropdown">
                        <a href="#" onclick="opendropdown()">Laureates</a>
                        <div class="dropdown-content" id="dropdown-content">
                            <a href="detail_page_new.html?name=Albert Einstein">Albert Einstein</a>
                            <a href="detail_page_new.html?name=Marie Skłodowska Curie">Marie Curie</a>
                            <a href="detail_page_new.html?name=John Bardeen">John Bardeen</a>
                            <a href="detail_page_new.html?name=Linus Carl Pauling">Linus Pauling</a>
                            <a href="detail_page_new.html?name=Malala Yousafzai">Malala Yousafzai</a>
                            <a href="detail_page_new.html?name=Nelson Rolihlahla Mandela">Nelson Mandela</a>
                            <a href="detail_page_new.html?name=Mother Teresa">Mother Teresa</a>
                            <a href="detail_page_new.html?name=Sir Joseph John Thomson">J.J. Thomson</a>
                        </div>
                    </li>
                    <li><a href="gallery_new.html">Gallery</a></li>
                    <li><a href="about_page.html">About</a></li>
                    <li><a href="feedback.html">Feedback</a></li>
                </ul>
            </nav>
        </div>

    <!-- Mobile Sidebar -->
    <div id="mobileSidebar" class="mobile-sidebar">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li class="mobile-dropdown">
                <div class="mobile-dropdown-toggle" onclick="toggleMobileDropdown(this)">
                    Laureates
                </div>
                <div class="mobile-dropdown-content">
                    <a href="detail_page_new.html?name=Albert Einstein">Albert Einstein</a>
                    <a href="detail_page_new.html?name=Marie Skłodowska Curie">Marie Curie</a>
                    <a href="detail_page_new.html?name=John Bardeen">John Bardeen</a>
                    <a href="detail_page_new.html?name=Linus Carl Pauling">Linus Pauling</a>
                    <a href="detail_page_new.html?name=Malala Yousafzai">Malala Yousafzai</a>
                    <a href="detail_page_new.html?name=Nelson Rolihlahla Mandela">Nelson Mandela</a>
                    <a href="detail_page_new.html?name=Mother Teresa">Mother Teresa</a>
                    <a href="detail_page_new.html?name=Sir Joseph John Thomson">J.J. Thomson</a>
                </div>
            </li>
            <li><a href="gallery_new.html">Gallery</a></li>
            <li><a href="about_page.html">About</a></li>
            <li><a href="feedback.html">Feedback</a></li>
        </ul>
    </div>



   
   <section class="laureate-hero">
    <div class="hero-backdrop">
        <div class="hero-overlay"></div>
    </div>
    
    <div class="hero-content">
       
        
        <h1 class="hero-title">
            <span class="title-main">Laureate's</span>
            <span class="title-accent">Detailed Biography</span>
        </h1>
        
        <div class="hero-divider">
            <div class="divider-line"></div>
            <div class="medal-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2">
                    <path d="M12 2L15 8L21 9L17 14L18 21L12 18L6 21L7 14L3 9L9 8L12 2Z"/>
                </svg>
            </div>
            <div class="divider-line"></div>
        </div>
        
        <div class="hero-text-container"> <!-- New container -->
            <p class="hero-subtitle">
                Exploring the life and achievements of Nobel Prize recipients
            </p>
            
            <!-- Button positioned correctly -->
            <div class="cta-container">
                <button class="banner-cta" onclick= location.href="#about">
                    Explore Laureates Life
                    <svg class="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</section>


        <section class="profile-section" id="about">
            <div class="profile-container">

                <aside class="profile-nav">
                    <h2 class="nav-title">Navigation</h2>
                    <nav>
                        <ul class="nav-links">
                            <li><a href="#bio">Education & Career</a></li>
                            <li><a href="#relart">Related Articles</a></li>
                            <li><a href="#milach">Milestones & Achievements</a></li>
                            <li><a href="#books">Famous Books</a></li>
                        </ul>
                    </nav>
                </aside>


                <article class="profile-content">
                    <header class="profile-header">
                        <h1>${scientist.Title}</h1>
                        <p class="subtitle">${scientist.TitleBio}</p>
                    </header>


                    <section class="quick-facts">
                        <table>

                            <tr>
                                <th>Category</th>
                                <th>Details</th>
                            </tr>
                            <tr>
                                <td>FullName</td>
                                <td>${scientist.Fullname}</td>
                            </tr>
                            <tr>
                                <td>Born</td>
                                <td>${scientist.Born}</td>
                            </tr>
                            <tr>
                            <tr>
                                <td>Field</td>
                                <td>${scientist.Field}</td>
                            </tr>
                            <tr>
                                <td>Noble Prize</td>
                                <td>${scientist.NoblePrize}</td>
                            </tr>
                            <tr>
                                <td>Known For</td>
                                <td>${scientist.KnownFor}</td>
                            </tr>
                            <tr>
                                <td>Influence</td>
                                <td>${scientist.Influence}</td>
                            </tr>
                        </table>
                    </section>


                    <section class="bio-section" id="bio">
                        <article class="bio-article">
                            <h2>Biography - The Life of ${scientist.SubTitle}</h2>
                            <section class="bio-subsection">
                                <h3>Early Life & Education</h3>
                                <div class="bio-content">
                                    <p>${scientist.EarlyLife}</p>
                                    <figure class="bio-image">
                                        <img src="${scientist.heroimg}" alt="Albert Einstein">
                                        <figcaption>March 1879 - April 1955</figcaption>
                                    </figure>
                                </div>
                            </section>

                            <section class="bio-subsection">
                                <h3>Major Scientific Contributions</h3>
                                <ul class="contributions-list">

                                    <div class="points">
                                        <li>
                                            <strong>${scientist.Strong1}&nbsp;&nbsp;</strong>${scientist.Major1}
                                        </li>
                                    </div>
                                    <div class="points">
                                        <li>
                                            <strong>${scientist.Strong2}&nbsp;&nbsp;</strong>${scientist.Major2}
                                        </li>
                                    </div>
                                    <div class="points">
                                        <li>
                                            <strong>${scientist.Strong3}&nbsp;&nbsp;</strong>${scientist.Major3}
                                        </li>
                                    </div>
                                </ul>
                            </section>

                            <section class="bio-subsection">
                                <h3>Later Life & Legacy</h3>

                                <p>${scientist.LaterLife}</p>
                                <p>&nbsp;&nbsp;${scientist.FunFact}</p>
                            </section>
                        </article>
                    </section>


                    <section class="timeline-section">
                        <h2>Notable Works & Impact</h2>

                        <h5>${scientist.Workh1}</h5>
                        <ul>
                            <li>${scientist.Work1}</li>
                        </ul>

                        <h5>${scientist.Workh2}</h5>
                        <ul>
                            <li>${scientist.Work2}</li>
                        </ul>


                        <h5>${scientist.Workh3}</h5>
                        <ul>
                            <li>${scientist.Work3}</li>
                        </ul>


                        <h5>${scientist.Workh4}</h5>
                        <ul>
                            <li>${scientist.Work4}</li>
                        </ul>


                        <h5>${scientist.Workh5}</h5>
                        <ul>
                            <li>${scientist.Work5}</li>
                        </ul>


                    </section>


                    <section class="quotes-section">

                        <h3>Quotes</h3>
                        <p>${scientist.Quotes1}</p>
                        <p>- ${scientist.Fullname}</p>
                        <br>
                        <p>${scientist.Quotes2}</p>
                        <br>
                        <p>${scientist.Quotes3}</p>
                    </section>


                    <section class="gallery-section">
                        <h3>Gallery</h3>
                        <div class="gallery-images">
                            <img src="${scientist.Gallery1}"onclick="location.href='${scientist.GalleryLink}'" alt="">
                            <img src="${scientist.Gallery2}"onclick="location.href='${scientist.GalleryLink}'" alt="">
                            <img src="${scientist.Gallery3}"onclick="location.href='${scientist.GalleryLink}'" alt="">
                        </div>
                    </section>


                    <section class="faq-section">

                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        ${scientist.FAQ1}
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        ${scientist.FAQA1}
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        ${scientist.FAQ2}
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        ${scientist.FAQA2}
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                        ${scientist.FAQ3}
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse"
                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        ${scientist.FAQA3}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </article>
            </div>
        </section>

        <div class="space"></div>


        <section class="related-section">
            <div class="related-container" id="relart">
                <div class="articles-content">
                    <h2 class="section-title">Related Articles</h2>

                    <article class="related1" onclick="location.href='${scientist.RelatedLink1}'">
                    <div class="article-card">
                    <h3 class="article-title">${scientist.RelatedH1}</h3>
                    <p class="article-text">${scientist.Related1}</p>
                    </div>
                    <div class="image-card">
                    <img class="responsive-image" src="${scientist.RelatedImg1}" alt="Marie Curie portrait" class="responsive-image"
                    </div>
                    </article>

                    <article class="related1" onclick="location.href='${scientist.RelatedLink2}'">
                    <div class="article-card">
                    <h3 class="article-title">${scientist.RelatedH2}</h3>
                    <p class="article-text">${scientist.Related2}</p>
                    </div>
                    <div class="image-card">
                    <img class="responsive-image" src="${scientist.RelatedImg2}" alt="Marie Curie portrait" class="responsive-image"
                    </div>
                    </article>

                    <article class="related1" onclick="location.href='${scientist.RelatedLink3}'">
                    <div class="article-card">
                    <h3 class="article-title">${scientist.RelatedH3}</h3>
                    <p class="article-text">${scientist.Related3}</p>
                    </div>
                    <div class="image-card">
                    <img class="responsive-image" src="${scientist.RelatedImg3}" alt="Marie Curie portrait" class="responsive-image"
                    </div>
                    </article>
                </div>
            </div>
        </section>


        <div class="sec4" id="milach">
            <div class="sec4-container">
            <div class="add-details" id="education" onclick="window.open('${scientist.WikipediaLink}', '_blank')">
                <h2>${scientist.EduTitle || 'Education & Career'}</h2>
                <p>${scientist.Education || 'No education information available.'}</p>

            </div>
            </div>
            <div class="sec4-container">
            <div class="add-details" id="struggle" onclick="window.open('${scientist.WikipediaLink}', '_blank')">
                <h2>${scientist.StrTitle || 'Struggles'}</h2>
                <p>${scientist.Struggle || 'No struggle information available.'}</p>

            </div>
            </div>
            <div class="sec4-container">
            <div class="add-details" id="achievements" onclick="window.open('${scientist.WikipediaLink}', '_blank')">
                <h2>${scientist.AchTitle || 'Achievements'}</h2>
                <p>${scientist.Acheivement || 'No achievement information available.'}</p>

            </div>
            </div>
            <div class="sec4-container">
            <div class="add-details" id="research" onclick="window.open('${scientist.WikipediaLink}', '_blank')">
                <h2>${scientist.ResTitle || 'Research & Experiments'}</h2>
                <p>${scientist.Research || 'No research information available.'}</p>

            </div>
            </div>
        </div>
        <div class="luxury-container" id="books">
    <div class="gallery-header text-center">
        <h1 class="display-4">Famous Books by ${scientist.Fullname}</h1>
        <p class="lead">Celebrating Literary Excellence</p>
        <div class="header-divider"></div>
    </div>

    <div class="row g-4 nobel-gallery">
        <!-- Book 1 -->
        <div class="col-md-6 col-lg-4 col-xl-3">
            <div class="luxury-card">
                <div class="card-frame">
                    <div class="card-image">
                        <div class="image-overlay"></div>
                        <img src="${scientist.BookImg1}" alt="One Hundred Years of Solitude" class="img-portrait">
                    </div>
                    <div class="gold-overlay">
                        <div class="laureate-info">
                            <h3>${scientist.BookTitle1}</h3>
                            <div class="prize-meta">
                                <span class="category">${scientist.BookDesc1}</span>
                            </div>
                            <a class="btn btn-luxury" href="${scientist.BookLink1}">Download PDF</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Book 2 -->
        <div class="col-md-6 col-lg-4 col-xl-3">
            <div class="luxury-card">
                <div class="card-frame">
                    <div class="card-image">
                        <div class="image-overlay"></div>
                        <img src="${scientist.BookImg2}" alt="The Old Man and the Sea" class="img-portrait">
                    </div>
                    <div class="gold-overlay">
                        <div class="laureate-info">
                            <h3>${scientist.BookTitle2}</h3>
                            <div class="prize-meta">
                                <span class="category">${scientist.BookDesc2}</span>
                            </div>
                            <a class="btn btn-luxury" href="${scientist.BookLink2}" download>Download PDF</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Book 3 -->
        <div class="col-md-6 col-lg-4 col-xl-3">
            <div class="luxury-card">
                <div class="card-frame">
                    <div class="card-image">
                        <div class="image-overlay"></div>
                        <img src="${scientist.BookImg3}" alt="Beloved" class="img-portrait">
                    </div>
                    <div class="gold-overlay">
                        <div class="laureate-info">
                            <h3>${scientist.BookTitle3}</h3>
                            <div class="prize-meta">
                                <span class="category">${scientist.BookDesc3}</span>
                            </div>
                            <a class="btn btn-luxury" href="${scientist.BookLink3}" download>Download PDF</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Book 4 -->
        <div class="col-md-6 col-lg-4 col-xl-3">
            <div class="luxury-card">
                <div class="card-frame">
                    <div class="card-image">
                        <div class="image-overlay"></div>
                        <img src="${scientist.BookImg4}" alt="The Tin Drum" class="img-portrait">
                    </div>
                    <div class="gold-overlay">
                        <div class="laureate-info">
                            <h3>${scientist.BookTitle4}</h3>
                            <div class="prize-meta">
                                <span class="category">${scientist.BookDesc4}</span>
                            </div>
                            <a class="btn btn-luxury" href="${scientist.BookLink4}" download>Download PDF</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


       

        <div class="summary">
            <h1>Summary</h1>
            <p>
                ${scientist.Summary}
            </p>
        </div>

         <footer class="footer">
        <div class="footer-content">
            <div class="footer-logo">
                <img src="Assets/Images/Icons/logo.png" alt="Company Logo">
            </div>

            <div class="footer-menu">
                <div class="menu-section">
                    <h3 class="menu-title">Quick Links</h3>
                    <ul class="menu-list">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="feedback.html">Feedback</a></li>
                    </ul>
                </div>

                <div class="menu-section">
                    <h3 class="menu-title">More Pages</h3>
                    <ul class="menu-list">
                        <li><a href="gallery_new.html">Explore Gallery</a></li>
                        <li><a href="detail_page_new.html?name=Albert Einstein">Explore Details</a></li>
                        <li><a href="about_page.html">About Us</a></li>

                    </ul>
                </div>

                <div class="menu-section align-content-center">
                    <div class="social-icons">
                        <a href="https://www.facebook.com/wikipedia/" target="_blank"><i class="fab fa-facebook"></i></a>
                        <a href="https://x.com/wikipedia?lang=en" target="_blank"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com/wikipedia/?hl=en" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/company/wikipedia-the-free-encyclopedia/" target="_blank"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-divider"></div>

        <div class="footer-bottom">
            <p>© 2025 Wikipedia. All rights reserved.</p>
            <div class="download">
                <a href="https://play.google.com/store/apps/details?id=org.wikipedia&pcampaignid=web_share"
                    target="_blank"> <img class="playstore" src="Assets/Images/Icons/playstore-Photoroom.png"
                        alt="Get it on Google Play"></a>
                <a href="https://apps.apple.com/us/app/wikipedia/id324715238" target="_blank"> <img class="appstore"
                        src="Assets/Images/Icons/appstore-Photoroom.png" alt="Download on the App Store"></a>
            </div>
        </div>
    </footer>







    <!-- Feedback Popup -->

    <div class="backdropfeedback" id="backdropfeedback"></div>
    <div class="container d-flex justify-content-center align-items-center">
        <div class="feedback-Popup shadow-lg p-4 rounded" id="feedbackPopup">
            <span class="close-btn position-absolute top-0 end-0 m-2 fs-4" onclick="closeFeedbackPopup()">&times;</span>
            <div class="mb-3">
                <img src="Assets/Images/Cover Image/laurel wreath1.png" alt="Logo" class="img-fluid rounded-circle"
                    width="100" height="100">
            </div>
            <h2 class="fw-bold">We value your feedback</h2>
            <p>Your insights help us improve. Please take a moment to share your thoughts.</p>
            <div class="stars d-flex justify-content-center gap-2 mb-3">
                <i class="fa-solid fa-star fs-4" data-index="0"></i>
                <i class="fa-solid fa-star fs-4" data-index="1"></i>
                <i class="fa-solid fa-star fs-4" data-index="2"></i>
                <i class="fa-solid fa-star fs-4" data-index="3"></i>
                <i class="fa-solid fa-star fs-4" data-index="4"></i>
            </div>
            <textarea class="form-control mb-3" id="feedbackText" placeholder="Write your feedback here..."></textarea>
            <button class="btn btn-warning w-100 text-dark fw-bold" onclick="submitFeedback()">Submit Feedback</button>
        </div>
    </div>

    <div class="feedback-message" id="feedbackMessage">
        <i class="fa-solid fa-check-circle"></i> Your feedback is submitted
    </div>

    <div class="error-message" id="errorMessage">
        <i class="fa-solid fa-exclamation-circle"></i> Please enter your feedback before submitting!
    </div>
    </div>
          `;


            document.querySelectorAll('.stars i').forEach((star, index) => {
                star.addEventListener('click', function () {
                    document.querySelectorAll('.stars i').forEach((s, i) => {
                        s.classList.toggle('golden', i <= index);
                    });
                });
            });

        } else {
            page.innerHTML = `<p class="text-danger">Scientist not found.</p>`;
        }
    })
    .catch(error => {
        detailsDiv.innerHTML = `<p class="text-danger">Failed to load data.</p>`;
        console.error('Error loading JSON:', error);
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










$(document).ready(function () {
    $("#learnMoreBtn").click(function () {
        $("html, body").animate({
            scrollTop: $("#about").offset().top
        }, 800);
    });
});



let subMenu = document.getElementById("subMenu");

function toggleMenu() {
    subMenu.classList.toggle("open-Menu");
}





function feedback() {
    document.querySelector(".backdropfeedback").style.display = "block";
    document.getElementById("feedbackPopup").style.display = "block";
}

function closeFeedbackPopup() {
    document.getElementById("feedbackPopup").style.display = "none";
    document.getElementById("backdropfeedback").style.display = "none";
}



function submitFeedback() {
    const feedbackText = document.getElementById('feedbackText').value.trim();
    const feedbackMessage = document.getElementById('feedbackMessage');
    const errorMessage = document.getElementById('errorMessage');

    if (feedbackText === "") {

        errorMessage.style.display = 'block';
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 3000);
    } else {
        console.log("Feedback: " + feedbackText);
        feedbackMessage.style.display = 'block';
        setTimeout(() => {
            feedbackMessage.style.display = 'none';
        }, 3000);
        closeFeedbackPopup()
    }
}