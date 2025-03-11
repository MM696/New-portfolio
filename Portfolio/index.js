document.addEventListener("DOMContentLoaded", () => {
    // Navbar Toggle
    const navbarToggler = document.getElementById("navbarToggler");
    const navbarMenu = document.querySelector(".navbar-menu");

    if (navbarToggler && navbarMenu) {
        navbarToggler.addEventListener("click", () => {
            navbarMenu.classList.toggle("active");
        });
    }

    // Function for smooth scrolling
    function addSmoothScroll(triggerSelector, targetSelector) {
        const triggerElements = document.querySelectorAll(triggerSelector);
        const targetElement = document.querySelector(targetSelector);

        if (triggerElements.length > 0 && targetElement) {
            triggerElements.forEach((trigger) => {
                trigger.addEventListener("click", () => {
                    targetElement.scrollIntoView({ behavior: "smooth" });
                });
            });
        }
    }

    // Applying smooth scrolling for different elements
    addSmoothScroll(".title-2", ".jox-i");
    addSmoothScroll(".title-3", ".jox-k");
    addSmoothScroll(".title-4", ".jox-y");
});





