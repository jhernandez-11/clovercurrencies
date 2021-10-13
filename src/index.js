///////// Side Menu Controls /////////
const sideMenu = document.querySelector(".header__nav--ion");
let active = false;

// FIXES SIDE MENU ITEMS FROM BEING VISIBLE
anime({
    targets: '.side-menu',
    translateX: "-30vw"
  });

// ACTIVATES SIDE MENU
sideMenu.addEventListener("click", () => {
    if (!active) {
        anime({
            targets: '.side-menu',
            width: "100%",
            easing: 'easeInOutSine',
          });

          active = true;
    } else {
        anime({
            targets: '.side-menu',
            width: "0%",
            easing: 'easeOutSine'
          });

          active = false;
    }
})

// CANCEL SIDE MENU IN CASE WIDTH > 600
window.addEventListener("resize", () => {
    if (window.innerWidth > 600) {
        anime({
            targets: '.side-menu',
            width: "0%",
            easing: 'easeOutSine'
          });

          active = false;
    }
})

///////// Sub Menu Controls /////////
const subMenu1 = document.querySelector(".sub-menu1");
const main = document.querySelector(".main")

const nav1 = document.querySelector(".header__nav1")
const nav2 = document.querySelector(".header__nav2")
const nav3 = document.querySelector(".header__nav3")

let active2 = false

anime({
    targets: '.sub-menu1',
    translateY: -100
})

function asm(nav) {
    const start = anime.timeline({
        easing: 'easeInSine',
    })
    .add({
        targets: '.sub-menu1',
        translateY: 0,
        duration: 0
    })
    .add({
        targets: '.sub-menu1',
        width: "100%",
        easing: 'easeInSine',
        opacity: 1,
    })
}

function dasm(nav) {
    const start = anime.timeline({
        easing: 'easeOutSine',
    })
    .add({
        targets: '.sub-menu1',
        width: "0%",
        easing: 'easeInSine',
        opacity: 0,
        
    })
    .add({
        targets: '.sub-menu1',
        translateY: -90,
    })
}

nav1.addEventListener('mouseover', () => {
    asm()
    active2 = true
})

nav1.addEventListener('click', () => {
    if (!active2) {
        asm()
        active2 = true
    } else {
        dasm()
        active2 = false
    }
})
main.addEventListener('click', () => {
    dasm()
    active2 = false
})