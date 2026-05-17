const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const phoneButtons = document.querySelectorAll("[data-show-phone]");
const faqItems = document.querySelectorAll(".faq-list details");

const updateHeader = () => {
  header.classList.toggle("scrolled", window.scrollY > 12);
};

const closeMenu = () => {
  if (!menuToggle) return;

  header.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Открыть меню");
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("menu-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Закрыть меню" : "Открыть меню");
  });

  header.querySelectorAll(".nav a, .header-actions a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeMenu();
    }
  });
}

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
