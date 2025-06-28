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
    
    
    
    $(document).ready(function () {
    $.ajax({
        url: "Assets/Json/home_page.json",
        type: "GET",
        success: function (data) {
            let featured = "";
            $.each(data.featured, function (index, object) {
                let data = "";
                const profileUrl = `detail_page_new.html?name=${encodeURIComponent(object.fullname)}`;
                const seeMoreClick = `showScientistModal(${JSON.stringify(object).replace(/"/g, '&quot;')}) `;
                if (index % 2 === 0) {
                    data = `
                        <div class="nobleContainerLeft" data-aos="fade-right">
                            <div class="left">
                                <div class="detail">
                                    <p class="topText">${object.name || "No Name"}</p>
                                    <p class="bottomText longtext">${object.body || "No Description"}</p>
                                    <p class="bottomText shorttext">${object.bodyshort || "No Description"}</p>
                                    <p class="bottomText shortesttext">${object.bodyshortest || "No Description"}</p>
                                    <button class="btnLeft" onclick="location.href='${profileUrl}'">${object.button || "View Profile"}</button>
                                </div>
                                <img src="${object.img || "Assets/Images/default.png"}" alt="${object.name || 'No Image'}">
                            </div>
                            <div class="right">
                                <div class="detail">
                                    <p class="topText">${object.textTop || "Lorem ipsum dolor"}</p>
                                    <p class="bottomText longtext">${object.textBottom || "No Bottom Text"}</p>
                                    <p class="bottomText shorttext">${object.textBottomshort || "No Bottom Text"}</p>
                                    <p class="bottomText shortesttext">${object.textBottomshortest || "No Bottom Text"}</p>
                                    <button class="btnRighttop" onclick="${seeMoreClick}">${object.btntop || "See More"}</button>
                                    <button class="btnRightBottom" onclick="location.href='laureate_gallery.html?name=${object.galleryname}'">${object.btnbottom || "Browse Gallery"}</button>
                                </div>
                            </div>
                        </div>`;
                } else {
                    data = `
                        <div class="nobleContainerRight" data-aos="fade-left">
                            <div class="left">
                                <div class="detail">
                                    <p class="topText">${object.textTop || "Lorem ipsum dolor"}</p>
                                    <p class="bottomText longtext">${object.textBottom || "No Bottom Text"}</p>
                                    <p class="bottomText shorttext">${object.textBottomshort || "No Bottom Text"}</p>
                                    <p class="bottomText shortesttext">${object.textBottomshortest || "No Bottom Text"}</p>
                                    <button class="btnRighttop" onclick=" ${seeMoreClick}">${object.btntop || "See More"}</button>
                                    <button class="btnRightBottom" onclick="location.href='laureate_gallery.html?name=${object.galleryname}'">${object.btnbottom || "Browse Gallery"}</button>
                                </div>
                            </div>
                            <div class="right">
                                <div class="detail">
                                    <p class="topText">${object.name || "No Name"}</p>
                                    <p class="bottomText longtext">${object.body || "No Description"}</p>
                                    <p class="bottomText shorttext">${object.bodyshort || "No Description"}</p>
                                    <p class="bottomText shortesttext">${object.bodyshortest || "No Description"}</p>
                                    <button class="btnLeft" onclick="location.href='${profileUrl}'">${object.button || "View Profile"}</button>
                                    </div>
                                    <img src="${object.img || "Assets/Images/default.png"}" alt="${object.name || 'No Image'}">
                            </div>
                        </div>`;
                }
                featured += data;
            });
            $(".featured").html(featured);
        },
        error: function (xhr, status, error) {
            console.error("Error fetching data:", error);
        }
    });
});


function header(){
    document.getElementById("header").style.display = "none"
}

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



function opendropdown() {
    const dropdown = document.getElementById("dropdown-content");
    
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    } else {
      dropdown.classList.add("show");
    }
  }




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







function closeFeedbackPopup() {
    document.getElementById("feedbackPopup").style.display = "none";
    document.getElementById("backdropfeedback").style.display = "none";
}
document.querySelectorAll('.stars i').forEach((star, index) => {
    star.addEventListener('click', function () {
        document.querySelectorAll('.stars i').forEach((s, i) => {
            s.classList.toggle('golden', i <= index);
        });
    });
});
function feedback() {
    document.querySelector(".backdropfeedback").style.display = "block";
    document.getElementById("feedbackPopup").style.display = "block";
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



function showScientistModal(scientist) {
    $.ajax({
        url: "../Assets/Json/summary.json",
        type: "GET",
        success: function (data) {
            const scientistData = data.laureates.find(item => 
                item.name.trim().toLowerCase() === (scientist.name || scientist.fullname || scientist.textTop).trim().toLowerCase()
            );

            if (scientistData) {    
                const factsHTML = scientistData.facts.map(fact => `<li>${fact}</li>`).join('');
                const profileUrl = `detail_page_new.html?name=${encodeURIComponent(scientistData.fullname)}`;

                document.getElementById('nobel-popup').innerHTML = `
                    <button class="close-btn"></button>
                    <div class="popup-header">
                        <h1 id="laureate-name">${scientistData.name || "No Name"}</h1>
                        <h3 id="laureate-year" class="mt-1">${scientistData.year || "No Year"}</h3>
                    </div>
                    <div class="popup-content">
                        <div class="laureate-image-container">
                            <div class="laureate-image">
                                <img src="${scientistData.image || "Assets/Images/default.png"}" id="laureate-image" class="img-fluid" alt="Laureate Portrait">
                            </div>
                            <div class="nobel-buttons">
                                <button onclick="location.href='${profileUrl}'" class="nobel-btn view-details">
                                    <span>View Details</span>
                                </button>
                                <button class="nobel-btn download-article" onclick="const a=document.createElement('a');a.href='${scientistData.articles[0].pdf}';a.download='';document.body.appendChild(a);a.click();document.body.removeChild(a);">
                                    <span id="download-button">Download Article</span>
                                    <svg class="btn-icon" viewBox="0 0 24 24" width="16" height="16">
                                        <path fill="currentColor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="info-section">
                            <div class="fact-card">
                                <h3>Biographical Summary</h3>
                                <p id="laureate-summary" class="text-white mt-3">${scientistData.summary || "No Summary"}</p>
                            </div>
                            <div class="fact-card">
                                <h3>Notable Achievements</h3>
                                <ul id="laureate-facts" class="text-white mt-3">${factsHTML}</ul>
                            </div>
                        </div>
                    </div>
                `;

                document.getElementById("header").style.display="none"
                document.getElementById('nobel-popup').classList.add('active');
                document.getElementById('overlay').classList.add('active');
                
                document.addEventListener('click', function (event) {
                    if (event.target.classList.contains('close-btn')) {
                        document.getElementById('nobel-popup').classList.remove('active');
                        document.getElementById('overlay').classList.remove('active');
                        document.getElementById("header").style.display="block"
                    }
                });

            } else {
                console.error("Scientist data not found in summary.json for:", scientist.name);
            }
        },
        error: function (xhr, status, error) {
            console.error("Error fetching summary.json:", error);
        }
    });
}
