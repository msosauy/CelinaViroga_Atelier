const navMenu = document.querySelector(".dropdown-mobile");
const navButton = document.querySelector(".menu-btn");

let isMenuOpen = false;

function openMenu() {
  isMenuOpen = true;
  navMenu.classList.add("visible");
}

function closeMenu() {
  isMenuOpen = false;
  navMenu.classList.remove("visible");
}

navButton.addEventListener("click", function () {
  if (isMenuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

// CAROUSEL

const slider = document.querySelector(".image-slider");
const arrLeft = document.querySelector(".arrow-left");
const arrRight = document.querySelector(".arrow-right");
const heading = document.querySelector(".caption h1");

const images = [
  "img_1.jpg",
  "img_2.jpg",
  "img_3.jpg",
  "img_4.jpg",
  "img_5.jpg",
  "img_6.jpg",
  "img_7.jpg",
  "img_8.jpg",
  "img_9.jpg",
  "img_10.jpg",
];
const headings = [
  "Atelier",
  "Atelier",
  "Atelier",
  "Atelier",
  "Atelier",
  "Atelier",
  "Atelier",
  "Atelier",
  "Atelier",
  "Atelier",
];
const description = [
  "by Celina Viroga",
  "by Celina Viroga",
  "by Celina Viroga",
  "by Celina Viroga",
  "by Celina Viroga",
  "by Celina Viroga",
  "by Celina Viroga",
  "by Celina Viroga",
  "by Celina Viroga",
  "by Celina Viroga",
];

// Slider ID
let id = 0;

function slide(id) {
  // Set the background Image
  slider.style.backgroundImage = `url(../img/galeria/${images[id]})`;
  // Add image fade animation
  slider.classList.add("image-fade");
  // Remove animation after it's done, so it can be used again
  setTimeout(() => {
    slider.classList.remove("image-fade");
  }, 550);
  // Change heading
  heading.innerText = headings[id];
  // Change description
  description.innerText = description[id];
}

//   Add click event to left arrow
arrLeft.addEventListener("click", () => {
  // Decrement img id
  id--;
  // Check if id is smaller than the number of available slides
  if (id < 0) {
    // Change to last image
    id = image.length - 1;
  }
  // Run the slide function
  slide(id);
});

arrRight.addEventListener("click", () => {
  // Increment img id
  id++;
  // Check if id is greater than the number of available slides
  if (id > images.length - 1) {
    // Change to first image
    id = 0;
  }
  // Run the slide function
  slide(id);
});
