let lang = "en";

function toggleLanguage() {
  lang = lang === "en" ? "te" : "en";
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute("data-" + lang);
  });
}

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
