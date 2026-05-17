const header = document.querySelector("[data-header]");
const phoneButtons = document.querySelectorAll("[data-show-phone]");
const faqItems = document.querySelectorAll(".faq-list details");

const updateHeader = () => {
  header.classList.toggle("scrolled", window.scrollY > 12);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

phoneButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetPhone = button.dataset.targetPhone || "+375 29 145-10-71";
    button.textContent = targetPhone;
  });
});

faqItems.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;

    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.open = false;
      }
    });
  });
});
