// mobile nav
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-navigation");

if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
        navigation.classList.toggle("open");

        const isOpen = navigation.classList.contains("open");
        menuButton.setAttribute("aria-expanded", isOpen);
        menuButton.textContent = isOpen ? "Close Menu" : "Menu";
    });
}

// highlight navigation
const currentPage = window.location.pathname.split("/").pop() || "index.html";
const navigationLinks = document.querySelectorAll(".site-nav a");

navigationLinks.forEach(function (link) {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.setAttribute("aria-current", "page");
    }
});

// menu
const filterButtons = document.querySelectorAll(".filter-button");
const menuCards = document.querySelectorAll(".menu-card[data-category]");

if (filterButtons.length > 0 && menuCards.length > 0) {
    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const selectedCategory = button.dataset.filter;

            filterButtons.forEach(function (filterButton) {
                filterButton.setAttribute("aria-pressed", "false");
            });

            button.setAttribute("aria-pressed", "true");

            menuCards.forEach(function (card) {
                const matchesCategory =
                    selectedCategory === "all" ||
                    card.dataset.category === selectedCategory;

                card.hidden = !matchesCategory;
            });
        });
    });
}

// contact form
const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();

        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Please complete all fields before sending.";
            formMessage.className = "form-message error";
            return;
        }

        formMessage.textContent =
            "Thanks, " + name + "! Your message has been checked. This demo form does not send email yet.";
        formMessage.className = "form-message success";
        contactForm.reset();
    });
}