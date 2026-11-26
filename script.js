
/* =========================================
   ATIF DIGITAL STUDIO
   Main JavaScript
   Founder & Owner: Atif Khan
========================================= */

"use strict";

document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // MOBILE NAVIGATION
    // =====================================

    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            const isOpen = navMenu.classList.toggle("active");

            menuToggle.setAttribute("aria-expanded", String(isOpen));

            menuToggle.innerHTML = isOpen
                ? '<i class="fas fa-xmark"></i>'
                : '<i class="fas fa-bars"></i>';

        });

        navMenu.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';

            });

        });

        document.addEventListener("click", function (event) {

            if (
                !navMenu.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                navMenu.classList.remove("active");

                menuToggle.setAttribute("aria-expanded", "false");

                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';

            }

        });

    }


    // =====================================
    // AUTOMATIC FOOTER YEAR
    // =====================================

    const currentYear = document.getElementById("current-year");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    // =====================================
    // SMOOTH SCROLL
    // =====================================

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                event.preventDefault();
                return;
            }

            const targetElement = document.querySelector(targetId);

            if (targetElement) {

                event.preventDefault();

                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // =====================================
    // FORM VALIDATION
    // =====================================

    document.querySelectorAll("form").forEach(function (form) {

        form.addEventListener("submit", function (event) {

            if (!form.checkValidity()) {

                event.preventDefault();

                form.reportValidity();

            }

        });

    });


    // =====================================
    // WHATSAPP CONTACT FORM
    // =====================================

    const contactForm = document.getElementById("contact-form");

    const formStatus = document.getElementById("form-status");

    // WhatsApp Business Number
    const WHATSAPP_NUMBER = "923291105447";

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            // Get Form Values
            const name = document.getElementById("name").value.trim();

            const email = document.getElementById("email").value.trim();

            const service = document.getElementById("service").value;

            const message = document.getElementById("message").value.trim();

            // Validate Form
            if (!contactForm.checkValidity()) {

                contactForm.reportValidity();
                return;

            }

            if (!name || !email || !service || !message) {

                formStatus.textContent = "Please complete all fields.";

                return;

            }

            // Create WhatsApp Message
            const whatsappMessage =

                "NEW PROJECT INQUIRY\n\n" +

                "Website: Atif Digital Studio\n" +

                "----------------------------\n\n" +

                "Client Name: " + name + "\n\n" +

                "Email Address: " + email + "\n\n" +

                "Selected Service: " + service + "\n\n" +

                "Project Details:\n" + message + "\n\n" +

                "----------------------------\n" +

                "Sent through Atif Digital Studio Website.";

            // Encode Message
            const encodedMessage = encodeURIComponent(whatsappMessage);

            // WhatsApp URL
            const whatsappURL =
                "https://wa.me/" + WHATSAPP_NUMBER +
                "?text=" + encodedMessage;

            // Show Status
            formStatus.textContent =
                "Opening WhatsApp. Please send your inquiry there.";

            // Open WhatsApp
            window.open(whatsappURL, "_blank");

        });

    }


    // =====================================
    // PAGE INITIALIZATION
    // =====================================

    console.log("Atif Digital Studio Initialized Successfully!");

    console.log("Founder & Owner: Atif Khan");

    console.log("Website: Contact Page / Multi-page Website");

    console.log("Mobile Navigation: Ready");

    console.log("WhatsApp Contact Form: Ready");

});


/* =================================
   PROFESSIONAL MOBILE NAVIGATION
================================= */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (!menuToggle || !navMenu) return;

    function closeMenu() {
        navMenu.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }

    function openMenu() {
        navMenu.classList.add("active");
        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.innerHTML = '<i class="fas fa-times"></i>';
    }

    menuToggle.addEventListener("click", function () {
        const isOpen = navMenu.classList.contains("active");

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close menu after clicking a navigation link
    navMenu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", closeMenu);
    });

    // Close menu with Escape key
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (
            !navMenu.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            closeMenu();
        }
    });

});
