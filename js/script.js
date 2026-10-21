document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    // Mobile menu
    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            menuToggle.classList.toggle("active");
            navLinks.classList.toggle("active");

        });

        // Tutup menu saat link diklik
        document
            .querySelectorAll("#navLinks a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    menuToggle.classList.remove("active");
                    navLinks.classList.remove("active");

                });

            });

        // Tutup menu saat klik di luar
        document.addEventListener("click", (e) => {

            if (
                navLinks.classList.contains("active") &&
                !navLinks.contains(e.target) &&
                !menuToggle.contains(e.target)
            ) {
                navLinks.classList.remove("active");
                menuToggle.classList.remove("active");
            }

        });
    }

    // Highlight halaman aktif
    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    document
        .querySelectorAll(".nav-links a, .footer-links a")
        .forEach(link => {

            if (link.getAttribute("href") === currentPage) {
                link.classList.add("active-link");
            }

        });

    // Validasi link
    validateLinks();

});

function validateLinks() {

    const links = document.querySelectorAll("a");

    links.forEach(link => {

        const href = link.getAttribute("href");

        if (!href) {

            console.warn("Link tanpa href:", link);
            return;

        }

        if (
            href === "#" ||
            href === "javascript:void(0)"
        ) {
            console.warn("Placeholder link:", href);
        }

        if (href.startsWith("http://")) {
            console.warn("HTTP tidak aman:", href);
        }

    });

    console.log("✅ Link validation completed");

}