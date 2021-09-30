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