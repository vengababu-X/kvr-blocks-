let lang = "en";

function toggleLanguage() {
  lang = lang === "en" ? "te" : "en";

  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute("data-" + lang);
  });
}

document.querySelectorAll(".inquiry").forEach(btn => {
  btn.addEventListener("click", () => {
    const product = btn.getAttribute(lang === "en" ? "data-en" : "data-te");
    const message =
      lang === "en"
        ? `Hello, I want to inquire about ${product}.`
        : `హలో, నాకు ${product} గురించి సమాచారం కావాలి.`;

    window.open(
      `https://wa.me/919764238394?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  });
});
