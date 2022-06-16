///////// Side Menu Controls /////////
const sideMenu = document.querySelector(".header__nav--ion");
const listAll = document.querySelector(".header__nav4")
let active = false;
let active3 = false;

// FIXES SIDE MENU ITEMS FROM BEING VISIBLE
anime({
    targets: '.side-menu, .side-menu2',
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
            targets: '.side-menu, .side-menu2',
            width: "0%",
            easing: 'easeOutSine'
          });

          active = false;
          active3 = false;
    }
})

listAll.addEventListener("click", () => {
    if (!active3) {
        anime({
            targets: '.side-menu2',
            width: "100%",
            easing: 'easeInOutSine',
          });

          active3 = true;
    } else {
        anime({
            targets: '.side-menu2',
            width: "0%",
            easing: 'easeOutSine'
          });

          active3 = false;
    }
})

// CANCEL SIDE MENU IN CASE WIDTH > 600
window.addEventListener("resize", () => {
    if (window.innerWidth > 600) {
        anime({
            targets: '.side-menu, .side-menu2',
            width: "0%",
            easing: 'easeOutSine'
          });

          active = false;
    }
})

///////// Sub Menu Controls /////////
const nav1 = document.querySelector(".header__nav1"), 
    nav2 = document.querySelector(".header__nav2"), 
    nav3 = document.querySelector(".header__nav3"),
    ion2 = document.querySelector(".header__nav--ion2");

let active2 = false

const activateSm = () => {
     if (!active2) {
        active2 = true
            anime({
                targets: ".header__nav1, .header__nav2, .header__nav3",
                opacity: 0,
                easing: 'easeOutSine',
                duration: 600,
                complete: () => {
                    nav1.innerHTML = 'All';
                    nav2.innerHTML = 'New';
                    nav3.innerHTML = 'Trending';
        
                    let href = new String(window.location.href)
        
                    if (href.includes('list') || href.includes('trending')) {
                        nav1.setAttribute("href", "./listAll.html")
                        nav2.setAttribute("href", "./listNew.html")
                        nav3.setAttribute("href", "./trending.html")
                    } else {
                        nav1.setAttribute("href", "./html/listAll.html")
                        nav2.setAttribute("href", "./html/listNew.html")
                        nav3.setAttribute("href", "./html/trending.html")
                    }
        
                    if (href.includes('trending')) {
                        nav3.removeAttribute('href')
                        nav3.classList.add("header__active")
                    } 
                    if (href.includes('listNew')) {
                        nav2.removeAttribute('href')
                        nav2.classList.add("header__active")
                    }
                    if (href.includes('listAll')) {
                        nav1.removeAttribute('href')
                        nav1.classList.add("header__active")
                    }
                    
        
                    anime({
                        targets: ".header__nav1, .header__nav2, .header__nav3",
                        opacity: 1,
                        easing: 'easeInSine',
                        duration: 600,
                    })
        
                    anime({
                        targets: ".header__nav--ion2",
                        opacity: 1,
                        translateX: 0
                    })
                }
            })
    }
}

nav1.addEventListener('click', activateSm)

ion2.addEventListener('click', () => {
    active2 = false

    anime({
        targets: ".header__nav1, .header__nav2, .header__nav3",
        opacity: 0,
        easing: 'easeOutSine',
        duration: 600,
        complete: () => {
            nav1.innerHTML = 'LIST';
            nav2.innerHTML = 'BUY';
            nav3.innerHTML = 'NEWS';

            nav1.setAttribute("href", '#')
            nav2.setAttribute("href", "#")
            nav3.setAttribute("href", "#")

            anime({
                targets: ".header__nav1, .header__nav2, .header__nav3",
                opacity: 1,
                easing: 'easeInSine',
                duration: 600,
            })

            anime({
                targets: ".header__nav--ion2",
                opacity: 0,
                translateX: "25vw"
            })
        }
    })

    let href = new String(window.location.href)

    if (href.includes('trending')) {
        nav3.classList.remove("header__active")
    } 
    if (href.includes('listNew')) {
        nav2.classList.remove("header__active")
    }
    if (href.includes('listAll')) {
        nav1.classList.remove("header__active")
    }
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
            if (window.location.href.includes('gen94')) {
                window.location.href = '/~gen94/week9-hw/';
            } else {
                window.location.href = '/pixelmooncrypto';
            }
            
        }
      })
})

///////// Moon Animation /////////
anime({
    targets: '#cg',
    translateX: "-200%",
    duration: 15000,
    easing: 'easeInOutSine',
    loop: true,
    direction: 'alternate'
});

///////// AOS /////////
AOS.init();