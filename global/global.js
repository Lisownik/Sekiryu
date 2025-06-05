includeHTML()

document.addEventListener('DOMContentLoaded', () => {
    let burgerIcon, burgerMenu;
    setTimeout(() => {
        burgerIcon = document.getElementById('burger-menu');
        burgerMenu = document.getElementById('menu');
        burgerIcon.addEventListener('click', () => {
            burgerMenu.classList.toggle('toggled');
            if (burgerMenu.classList.contains('toggled')) {
                burgerIcon.setAttribute('src', '../../Assets/images/xmark-solid.svg');
            } else{
                burgerIcon.setAttribute('src', '../../Assets/images/bars-solid.svg');
            }
        })
    }, 100)
})