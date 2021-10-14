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
const subMenu = document.querySelector(".sub-menu");
const main = document.querySelector("main");

const nav1 = document.querySelector(".header__nav1");

let active2 = false

anime({
    targets: '.sub-menu1',
    translateY: -100
})

function asm() {
    const start = anime.timeline({
        easing: 'easeInSine',
    })
    .add({
        targets: '.sub-menu',
        translateY: 0,
        duration: 0
    })
    .add({
        targets: '.sub-menu',
        width: "100%",
        easing: 'easeInSine',
        opacity: 1,
        duration: 450
    })
}

function dasm() {
    const end = anime.timeline({
        easing: 'easeOutSine',
    })
    .add({
        targets: '.sub-menu',
        width: "0%",
        easing: 'easeInSine',
        opacity: 0,
        duration: 450
        
    })
    .add({
        targets: '.sub-menu',
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

///////// Title Animation Controls /////////
const title = document.querySelector(".header__title")

  // Go to home page
title.addEventListener('click', () => {
    anime({
        targets: '.header__title p',
        opacity: 0,
        duration: 90,
        direction: 'reverse',
        delay: anime.stagger(30),
        complete: () => {
            history.back()
        }
      })
})