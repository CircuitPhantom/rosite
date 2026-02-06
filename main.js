
const header = document.querySelector('.header');

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const menuLinks = mobileMenu.querySelectorAll("a");


window.addEventListener('scroll', () => {
// Eğer sayfa 50px’den fazla kaydıysa
if (window.scrollY > 250) {
  header.classList.add('scrolled');
} else {
  header.classList.remove('scrolled');
}
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

// Linke basınca kapat
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".about-wrapper, .fade-up");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach(item => observer.observe(item));
});