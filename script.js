let currentLang = "en";

function toggleLanguage() {
  currentLang = currentLang === "en" ? "te" : "en";

  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute("data-" + currentLang);
  });
}

document.querySelectorAll(".inquiry").forEach(btn => {
  btn.addEventListener("click", () => {
    const product =
      currentLang === "en"
        ? btn.dataset.productEn
        : btn.dataset.productTe;

    const message =
      currentLang === "en"
        ? `Hello, I want to inquire about ${product}.`
        : `హలో, నాకు ${product} గురించి సమాచారం కావాలి.`;

    window.open(
      `https://wa.me/919764238394?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  });
});

const sections = document.querySelectorAll(".animate");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
});

sections.forEach(sec => observer.observe(sec));
