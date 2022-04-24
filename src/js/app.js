/*==========SHOW-MENU==========*/
const navMenu = document.querySelector('.nav_menu')
navToggle = document.querySelector('.nav_toggle')
navClose = document.querySelector('.nav_close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*==========REMOVE-MENU-MOBILE==========*/
const navLink = document.querySelectorAll('.nav_link')

const linkAction = () => {
    const navMenu = document.querySelector('.nav_menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*==========CHANGE-BACKGROUND-HEADER==========*/
const scrollHeader = () => {
    const header = document.querySelector('.header')
    if (this.scrollY >= 80) {
        header.classList.add('scroll-header')
    } else {
        header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)
/*==========QUESTIONS-ACCORDION==========*/
const accordionItems = document.querySelectorAll('.questions_item')
accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.questions_header')
    accordionHeader.addEventListener('click',() =>{
        const openItem = document.querySelector('.accordion-open')
        toggleItem(item)
        if (openItem && openItem!== item){
            toggleItem(openItem)
        }
    })

})
const toggleItem = (item) =>{
    const accordionContent =item.querySelector('.questions_content')
    if (item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}
/*=============== SCROLL WHEN PRESSED ===============*/
const menuLinks = document.querySelectorAll('.nav_link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    })

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const goToBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            window.scrollTo({
                top:goToBlockValue,
                behavior:"smooth"
            });
            e.preventDefault();
        }
    }
}
/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById('scrollUp');
    if (this.scrollY >= 200) {
        scrollUp.classList.add('show-scroll')
    } else {
        scrollUp.classList.remove('show-scroll')
    }
}
window.addEventListener('scroll', scrollUp)
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.querySelector('.change-theme')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home_data`)
sr.reveal(`.home_img`, {delay: 500})
sr.reveal(`.home_social`, {delay: 600})
sr.reveal(`.about_img, .contact_box`,{origin: 'left'})
sr.reveal(`.about_data, .contact_form`,{origin: 'right'})
sr.reveal(`.steps_card, .product_card, .questions_group, .footer`,{interval: 100})



