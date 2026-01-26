let lang = "en";

function toggleLanguage() {
  lang = lang === "en" ? "te" : "en";
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute("data-" + lang);
  });
}
