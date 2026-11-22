const loader = document.querySelector(".lotus-loader");
if (loader) {
    window.addEventListener("load", () => {
        window.setTimeout(() => loader.classList.add("is-hidden"), 250);
    });
}

const menuToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");
if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!isOpen));
        siteNav.classList.toggle("is-open", !isOpen);
    });

    siteNav.addEventListener("click", (event) => {
        if (event.target instanceof HTMLAnchorElement) {
            menuToggle.setAttribute("aria-expanded", "false");
            siteNav.classList.remove("is-open");
        }
    });
}

const searchInput = document.querySelector("[data-search-input]");
if (searchInput instanceof HTMLInputElement) {
    const results = [...document.querySelectorAll("[data-search-result]")];
    const emptyState = document.querySelector("#search-empty");
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim().toLowerCase();
        for (const result of results) {
            result.hidden = query.length > 0 && !result.textContent.toLowerCase().includes(query);
        }
        if (emptyState) {
            emptyState.hidden = query.length === 0 || results.some((result) => !result.hidden);
        }
    });
}
