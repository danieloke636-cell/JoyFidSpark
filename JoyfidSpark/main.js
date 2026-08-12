// Mobile navigation

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const sidebarClose = document.querySelector(".sidebar-close");

function openMenu() {
    navLinks.classList.add("open");

    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close navigation");

    document.body.classList.add("menu-open");
}

function closeMenu() {
    navLinks.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");

    document.body.classList.remove("menu-open");
}

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", (event) => {
        event.stopPropagation();

        if (navLinks.classList.contains("open")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    sidebarClose?.addEventListener("click", (event) => {
        event.stopPropagation();
        closeMenu();
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });

    document.addEventListener("click", (event) => {

        if (
            navLinks.classList.contains("open") &&
            !navLinks.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {
            closeMenu();
        }

    });
}


// Hero slider

const slider = document.querySelector(".hero-slider");
const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".slider-dot");
const hero = document.querySelector(".hero");

if (slider && slides.length > 1) {

    const realSlides = slides.length - 1;

    let currentSlide = 0;
    let slideInterval;

    function showSlide(index, animate = true) {

        slider.style.transition = animate
            ? "transform 0.8s ease-in-out"
            : "none";

        slider.style.transform =
            `translateX(-${index * (100 / slides.length)}%)`;

        currentSlide = index;

        dots.forEach((dot, i) => {
            dot.classList.toggle(
                "active",
                i === (index % realSlides)
            );
        });
    }

    function nextSlide() {

        currentSlide++;

        showSlide(currentSlide);

        if (currentSlide === realSlides) {

            setTimeout(() => {

                currentSlide = 0;

                showSlide(0, false);

            }, 400);
        }
    }

    function startSlider() {

        clearInterval(slideInterval);

        slideInterval = setInterval(nextSlide, 3000);
    }

    function stopSlider() {

        clearInterval(slideInterval);
    }

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            currentSlide = index;

            showSlide(currentSlide);

            startSlider();
        });

    });

    if (hero) {

        hero.addEventListener("mouseenter", stopSlider);

        hero.addEventListener("mouseleave", startSlider);

        hero.addEventListener("touchstart", stopSlider, {
            passive: true
        });

        hero.addEventListener("touchend", startSlider, {
            passive: true
        });
    }

    showSlide(0, false);

    startSlider();
}