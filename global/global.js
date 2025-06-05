includeHTML()

function toggleBurger() {
    let burgerIcon = document.getElementById('burger-menu');
    let burgerMenu = document.getElementById('menu');
    burgerMenu.classList.toggle('toggled');
    if (burgerMenu.classList.contains('toggled')) {
        burgerIcon.setAttribute('src', '../Assets/images/xmark-solid.svg');
    } else{
        burgerIcon.setAttribute('src', '../Assets/images/bars-solid.svg');
    }
}