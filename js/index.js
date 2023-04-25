const navMenu = document.querySelector(".dropdown-mobile");
const navButton = document.querySelector(".menu-btn");

let isMenuOpen = false;

function openMenu(){
    isMenuOpen = true;
    navMenu.classList.add("visible");
}

function closeMenu(){
    isMenuOpen = false;
    navMenu.classList.remove("visible");
}

navButton.addEventListener("click", function(){
    
    if (isMenuOpen) {
        closeMenu();
    }else{
        openMenu();
    }
});
