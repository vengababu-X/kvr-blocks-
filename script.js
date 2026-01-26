let currentLang = "en";

function toggleLanguage() {
  currentLang = currentLang === "en" ? "te" : "en";

  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute("data-" + currentLang);
  });
}

// WhatsApp inquiry handling
document.querySelectorAll(".inquiry").forEach(btn => {
  btn.addEventListener("click", () => {
    const product = btn.getAttribute(
      currentLang === "en" ? "data-product-en" : "data-product-te"
    );

    const message =
      currentLang === "en"
        ? `Hello, I want to inquire about ${product}.`
        : `హలో, నాకు ${product} గురించి సమాచారం కావాలి.`;

    const url = `https://wa.me/919764238394?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  });
});
