
/* =========================================
   NOVA AI - COMPLETE JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    "use strict";


    /* =====================================
       1. MOBILE NAVIGATION
    ===================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navbar && navLinks) {

        menuToggle.addEventListener("click", function () {

            navbar.classList.toggle("menu-open");

            const isOpen = navbar.classList.contains("menu-open");

            menuToggle.textContent = isOpen ? "✕" : "☰";

            menuToggle.setAttribute("aria-expanded", isOpen);

        });

        navLinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navbar.classList.remove("menu-open");

                menuToggle.textContent = "☰";

                menuToggle.setAttribute("aria-expanded", "false");

            });

        });

    }


    /* =====================================
       2. MOBILE MENU CSS SUPPORT
    ===================================== */

    const mobileMenuStyle = document.createElement("style");

    mobileMenuStyle.textContent = `

        @media (max-width: 768px) {

            .navbar.menu-open {
                flex-wrap: wrap;
            }

            .navbar.menu-open .nav-links {
                display: flex;
                width: 100%;
                flex-direction: column;
                align-items: flex-start;
                gap: 20px;
                padding: 20px 0;
                order: 3;
            }

            .navbar.menu-open .nav-actions {
                display: flex;
                width: 100%;
                padding-bottom: 20px;
                order: 4;
            }

        }

    `;

    document.head.appendChild(mobileMenuStyle);


    /* =====================================
       3. ACTIVE NAVIGATION LINKS
    ===================================== */

    const allNavLinks = document.querySelectorAll(".nav-links a");

    const pageSections = document.querySelectorAll("main section[id]");

    function updateActiveLink() {

        let currentSection = "home";

        pageSections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {

                currentSection = section.getAttribute("id");

            }

        });

        allNavLinks.forEach(function (link) {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", updateActiveLink);

    updateActiveLink();


    /* =====================================
       4. NAVBAR SCROLL EFFECT
    ===================================== */

    function navbarScrollEffect() {

        if (!navbar) return;

        if (window.scrollY > 50) {

            navbar.classList.add("navbar-scrolled");

        } else {

            navbar.classList.remove("navbar-scrolled");

        }

    }

    window.addEventListener("scroll", navbarScrollEffect);

    navbarScrollEffect();


    const navbarStyle = document.createElement("style");

    navbarStyle.textContent = `

        .navbar {
            transition: background 0.3s, box-shadow 0.3s;
        }

        .navbar.navbar-scrolled {
            background: rgba(8, 8, 17, 0.97);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
        }

    `;

    document.head.appendChild(navbarStyle);


    /* =====================================
       5. SMOOTH SCROLLING
    ===================================== */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================
       6. BUTTON INTERACTIONS
    ===================================== */

    const actionButtons = document.querySelectorAll(
        ".login-btn, .signup-btn, .primary-btn, .price-btn"
    );

    actionButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            const href = button.getAttribute("href");

            if (!href) return;

            if (href === "#login") {

                event.preventDefault();

                alert("Login system will be connected in a future step.");

            }

            if (href === "#signup") {

                event.preventDefault();

                alert("Signup system will be connected in a future step.");

            }

        });

    });


    /* =====================================
       7. REVEAL ANIMATIONS
    ===================================== */

    const revealElements = document.querySelectorAll(
        ".tool-card, .feature-item, .step-card, .price-card, .about-content, .about-visual"
    );

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(

            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("revealed");

                        observer.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.12
            }

        );

        revealElements.forEach(function (element) {

            element.classList.add("reveal-element");

            revealObserver.observe(element);

        });

        const revealStyle = document.createElement("style");

        revealStyle.textContent = `

            .reveal-element {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.7s ease, transform 0.7s ease;
            }

            .reveal-element.revealed {
                opacity: 1;
                transform: translateY(0);
            }

            @media (prefers-reduced-motion: reduce) {

                .reveal-element {
                    opacity: 1;
                    transform: none;
                    transition: none;
                }

            }

        `;

        document.head.appendChild(revealStyle);

    }


    /* =====================================
       8. HERO FLOATING ANIMATION
    ===================================== */

    const floatingCards = document.querySelectorAll(".floating-card");

    floatingCards.forEach(function (card, index) {

        card.style.animation = `novaFloat ${3 + index}s ease-in-out infinite`;

    });

    const floatingStyle = document.createElement("style");

    floatingStyle.textContent = `

        @keyframes novaFloat {

            0%, 100% {
                transform: translateY(0);
            }

            50% {
                transform: translateY(-12px);
            }

        }

    `;

    document.head.appendChild(floatingStyle);


    /* =====================================
       9. FOOTER CURRENT YEAR
    ===================================== */

    const footerText = document.querySelector(".footer-bottom p");

    if (footerText) {

        footerText.textContent =
            "© " + new Date().getFullYear() +
            " Nova AI. All rights reserved.";

    }


    /* =====================================
       10. BACK TO TOP BUTTON
    ===================================== */

    const backToTop = document.createElement("button");

    backToTop.className = "back-to-top";

    backToTop.innerHTML = "↑";

    backToTop.setAttribute("aria-label", "Back to top");

    document.body.appendChild(backToTop);

    const backToTopStyle = document.createElement("style");

    backToTopStyle.textContent = `

        .back-to-top {
            position: fixed;
            right: 25px;
            bottom: 25px;
            width: 45px;
            height: 45px;
            border-radius: 12px;
            background: linear-gradient(135deg, #9c62ff, #557aff);
            color: white;
            font-size: 23px;
            z-index: 999;
            opacity: 0;
            visibility: hidden;
            transform: translateY(15px);
            transition: 0.3s;
            box-shadow: 0 5px 20px rgba(146, 92, 255, 0.3);
        }

        .back-to-top.show {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }

        .back-to-top:hover {
            transform: translateY(-5px);
        }

    `;

    document.head.appendChild(backToTopStyle);


    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    /* =====================================
       11. CONSOLE INFORMATION
    ===================================== */

    console.log("%cNova AI", "color:#a77aff;font-size:28px;font-weight:bold;");

    console.log("Nova AI Website Initialized Successfully!");

    console.log("Founder & Owner: Atif Khan");

    console.log("AI API integration is pending.");


});
