function toggleMenu(event) {
    if (event.type === 'click') {
        document.removeEventListener('touchstart', toggleMenu);
    } else {
        document.removeEventListener('click', toggleMenu);
    }
    var element = document.getElementById('menu');
    var isMenuButtonClick = event.target.closest('#menuButton') != null;
    var isMenuItemClick = event.target.closest('#menu') != null;
    var menuIsVisible = element.classList.contains('isVisible');
    if (isMenuButtonClick && !menuIsVisible) {
        element.classList.add('isVisible');
    } else if (!isMenuItemClick) {
        element.classList.remove('isVisible');
    }
}
function setUpClickListener() {
    document.addEventListener('touchstart', toggleMenu);
    document.addEventListener('click', toggleMenu);
}
