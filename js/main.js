function setUpClickListener() {
    document.addEventListener('click', (event) => {
        var element = document.getElementById('menu');
        var isMenuButtonClick = event.target.closest('#menuButton') != null;
        var menuIsVisible = element.classList.contains('isVisible');
        if (isMenuButtonClick && !menuIsVisible) {
            element.classList.add('isVisible');
        } else {
            element.classList.remove('isVisible');
        }
    });
}
