(function () {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("theme");
    const themeButton = document.querySelector("[data-theme-toggle]");
    const menuButton = document.querySelector("[data-menu-toggle]");
    const navLinks = document.querySelector(".nav-links");
    const backToTop = document.querySelector("[data-back-to-top]");

    if (savedTheme === "dark") {
        root.setAttribute("data-theme", "dark");
        if (themeButton) themeButton.textContent = "亮色";
    }

    if (themeButton) {
        themeButton.addEventListener("click", function () {
            if (root.getAttribute("data-theme") === "dark") {
                root.removeAttribute("data-theme");
                localStorage.setItem("theme", "light");
                themeButton.textContent = "暗色";
            } else {
                root.setAttribute("data-theme", "dark");
                localStorage.setItem("theme", "dark");
                themeButton.textContent = "亮色";
            }
        });
    }

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", function () {
            navLinks.classList.toggle("open");
        });
    }

    document.querySelectorAll("[data-reveal-contact]").forEach(function (item) {
        item.addEventListener("click", function () {
            item.classList.toggle("revealed");
        });
    });

    if (backToTop) {
        window.addEventListener("scroll", function () {
            backToTop.classList.toggle("visible", window.scrollY > 320);
        });

        backToTop.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
})();

