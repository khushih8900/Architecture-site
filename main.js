const carousel = document.getElementById("autoCarousel");
const items = carousel.querySelectorAll(".carousel-item");
let index = 0;

function autoSlide() {
  index = (index + 1) % items.length; 
  carousel.scrollTo({
    left: items[index].offsetLeft,
    behavior: "smooth",
  });
};

setInterval(autoSlide, 2500); 


// sticky navbar
const header = document.querySelector("header");
const navbar = document.querySelector(".sticky-navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > header.offsetHeight - 50) {
    navbar.classList.add("fixed", "top-0", "shadow");
  } else {
    navbar.classList.remove("fixed", "top-0", "shadow");
  }
});
// section animation
const sections = document.querySelectorAll(".section-to-animate");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Element viewport  animate 
        entry.target.classList.remove("opacity-0", "translate-y-10");
        entry.target.classList.add("opacity-100", "translate-y-0");
      } else {
        // Element viewport hide
        entry.target.classList.add("opacity-0", "translate-y-10");
        entry.target.classList.remove("opacity-100", "translate-y-0");
      }
    });
  },
  { threshold: 0.1 } 
);
sections.forEach((section) => observer.observe(section));

// slider function
const slider = document.getElementById("logoSlider");
const wrapper = document.getElementById("logoWrapper");


function syncSlider() {
  const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
  const percent = (wrapper.scrollLeft / maxScroll) * 100;
  slider.value = percent;
}

// Slider drag → move logos
slider.addEventListener("input", function () {
  const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
  const scrollPos = (this.value / 100) * maxScroll;
  wrapper.scrollLeft = scrollPos;
});
