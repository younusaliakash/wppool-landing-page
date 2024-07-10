const toggleBtn = document.getElementById("toggle_btn")
const nav = document.querySelector('.nav');
const headerLink = document.querySelector('.header_link');
const brandLogo = document.getElementById("brandLogo")
const shareLogo = document.getElementById("shareLogo");

toggleBtn.addEventListener("click", () => {
    headerLink.classList.toggle('toggle_on')

    if (headerLink.classList.contains('toggle_on')) {
        toggleBtn.src = '/assets/images/close_black.png';
    } else {
        // toggleBtn.src = '/assets/images/hamburger_menu.png';
        if(nav.classList.contains('active')){
            toggleBtn.src = '/assets/svg/hamburger.svg'
        } else {
            toggleBtn.src = '/assets/images/hamburger_menu.png';
        }
    }
})

window.addEventListener('scroll', fixNav);

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 300) {
        nav.classList.add('active')
        brandLogo.src = '/assets/images/brand_logo_black.png'
        if (!headerLink.classList.contains('toggle_on')) {
            shareLogo.src = '/assets/images/share_black.png'
            toggleBtn.src = '/assets/svg/hamburger.svg'
        }
    } else {
        nav.classList.remove('active')
        brandLogo.src = '/assets/images/brand_logo.png'
        shareLogo.src = '/assets/images/share.png'
        if (!headerLink.classList.contains('toggle_on')) {
            toggleBtn.src = '/assets/images/hamburger_menu.png';
        }
    }
}