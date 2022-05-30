let buttonHamburger = document.getElementById('button-hamburger')
let menuHamburguer = document.getElementById('menu-hamburger')

buttonHamburger.addEventListener('click', () => {
    menuHamburguer.classList.toggle('menu-hamburger--active')
})
