/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
const scrollHeader = () =>{
    const nav = document.querySelector('.l-header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200});

/*===== CIRCULAR PROGRESS ANIMATION =====*/
function animateCircularProgress() {
    const progressElements = document.querySelectorAll('.progress-ring__progress');
    const progressTexts = document.querySelectorAll('.progress-text');
    
    progressElements.forEach((element, index) => {
        const percent = parseInt(element.getAttribute('data-percent'));
        const radius = element.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        
        element.style.strokeDasharray = `${circumference} ${circumference}`;
        element.style.strokeDashoffset = circumference;
        
        // Animation function
        let currentPercent = 0;
        const increment = percent / 60; // 60 frames for smooth animation
        
        const animateProgress = () => {
            if (currentPercent < percent) {
                currentPercent += increment;
                if (currentPercent > percent) currentPercent = percent;
                
                const offset = circumference - (currentPercent / 100) * circumference;
                element.style.strokeDashoffset = offset;
                
                // Update text
                if (progressTexts[index]) {
                    progressTexts[index].textContent = Math.round(currentPercent) + '%';
                }
                
                requestAnimationFrame(animateProgress);
            }
        };
        
        // Start animation after a delay
        setTimeout(() => {
            requestAnimationFrame(animateProgress);
        }, index * 200);
    });
}

// Initialize circular progress for all sections
document.addEventListener('DOMContentLoaded', () => {
    // Skills Section Only
    const skillsSection = document.querySelector('#skills');
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillProgressElements = skillsSection.querySelectorAll('.progress-ring__progress');
                    const skillProgressTexts = skillsSection.querySelectorAll('.progress-text');
                    animateProgressInSection(skillProgressElements, skillProgressTexts);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        observer.observe(skillsSection);
    }
    
    // Animation for info cards (non-skills sections)
    const infoCards = document.querySelectorAll('.info-card');
    const infoCardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });
    
    infoCards.forEach(card => {
        infoCardObserver.observe(card);
    });
});

// Helper function to animate progress in a specific section
function animateProgressInSection(progressElements, progressTexts) {
    progressElements.forEach((element, index) => {
        const percent = parseInt(element.getAttribute('data-percent'));
        const radius = element.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        
        element.style.strokeDasharray = `${circumference} ${circumference}`;
        element.style.strokeDashoffset = circumference;
        
        // Animation function
        let currentPercent = 0;
        const increment = percent / 60; // 60 frames for smooth animation
        
        const animateProgress = () => {
            if (currentPercent < percent) {
                currentPercent += increment;
                if (currentPercent > percent) currentPercent = percent;
                
                const offset = circumference - (currentPercent / 100) * circumference;
                element.style.strokeDashoffset = offset;
                
                // Update text
                if (progressTexts[index]) {
                    progressTexts[index].textContent = Math.round(currentPercent) + '%';
                }
                
                requestAnimationFrame(animateProgress);
            }
        };
        
        // Start animation after a delay
        setTimeout(() => {
            requestAnimationFrame(animateProgress);
        }, index * 200);
    });
}

/*===== SCROLL REVEAL FOR ALL SECTIONS =====*/
sr.reveal('.skill__item', { 
    interval: 100,
    delay: 200,
    distance: '30px',
    origin: 'bottom'
});

sr.reveal('.info-card', { 
    interval: 100,
    delay: 200,
    distance: '30px',
    origin: 'bottom'
}); 
