const toggleButton = document.getElementById('nav-toggle')
const linksContainer = document.getElementById('nav-links-container')
const dateFooter = document.getElementById('date')
const homeLink = document.querySelector('.home-link')
const aboutLink = document.querySelector('.about-link') 
const servicesLink = document.querySelector('.services-link') 
const toursLink = document.querySelector('.tours-link') 


dateFooter.innerText = new Date().getFullYear()

toggleButton.addEventListener('click', navToggle)
homeLink.addEventListener('click',navToggle)
aboutLink.addEventListener('click',navToggle)
servicesLink.addEventListener('click',navToggle)
toursLink.addEventListener('click',navToggle)

let linksDisplayed = false;

function navToggle() {
    if (linksDisplayed == false) {
        linksContainer.classList.remove('hide');
    } else if (linksDisplayed == true) {
        linksContainer.classList.add('hide');
    }

    setLinksBackToDefault()
}

function setLinksBackToDefault() {
    linksDisplayed = !linksDisplayed
}

const navBar = document.querySelector('.nav-bar')
const topLink = document.querySelector('.scroll-link')

window.addEventListener("scroll", function() {
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navBar.classList.add('fixed-nav');
    } else {
        navBar.classList.remove('fixed-nav');
    }

    if(scrollHeight > navHeight) {
        topLink.classList.remove('top-link');
    } else {
        topLink.classList.add('top-link');
    }
})
