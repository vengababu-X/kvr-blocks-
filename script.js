let currentLang = "en";

function toggleLanguage() {
  currentLang = currentLang === "en" ? "te" : "en";

  document.querySelectorAll("[data-en]").forEach(el => {
    el.innerText = el.getAttribute("data-" + currentLang);
  });
}

toggleLanguage();
toggleLanguage();
