/* ==========================================================
   HOHO PORTFOLIO JAVASCRIPT
   ========================================================== */


/* ==========================================================
   YEAR
   ========================================================== */

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}



/* ==========================================================
   ELEMENTS
   ========================================================== */

const body = document.body;

const themeToggle =
    document.getElementById("themeToggle");

const themeIcon =
    document.getElementById("themeIcon");

const logoImage =
    document.getElementById("logoImage");

const favicon =
    document.getElementById("favicon");

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");

const topBtn =
    document.getElementById("topBtn");



/* ==========================================================
   DARK MODE
   ========================================================== */

function setTheme(theme) {

    const dark =
        theme === "dark";


    body.classList.toggle(
        "dark",
        dark
    );


    /* LOGO */

    if (logoImage) {

        logoImage.src = dark
            ? "image/logo-dark.png"
            : "image/logo-light.png";

    }


    /* FAVICON */

    if (favicon) {

        favicon.href = dark
            ? "image/logo-dark.png"
            : "image/favicon.png";

    }


    /* ICON */

    if (themeIcon) {

        themeIcon.textContent =
            dark
                ? "☀"
                : "☾";

    }


    /* Save */

    localStorage.setItem(
        "hoho-theme",
        theme
    );

}


/* ==========================================================
   LOAD SAVED THEME
   ========================================================== */

const savedTheme =
    localStorage.getItem("hoho-theme");


if (savedTheme) {

    setTheme(savedTheme);

} else {

    setTheme("light");

}



/* ==========================================================
   THEME BUTTON
   ========================================================== */

if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        () => {

            const isDark =
                body.classList.contains("dark");


            setTheme(
                isDark
                    ? "light"
                    : "dark"
            );

        }
    );

}



/* ==========================================================
   MOBILE MENU
   ========================================================== */

if (menuBtn && navMenu) {

    menuBtn.addEventListener(
        "click",
        () => {

            navMenu.classList.toggle(
                "show"
            );

        }
    );


    /* Close menu after click */

    document
        .querySelectorAll(".nav-menu a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navMenu.classList.remove(
                        "show"
                    );

                }
            );

        });

}



/* ==========================================================
   ACTIVE NAVIGATION
   ========================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-menu a"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach(
            section => {

                const sectionTop =
                    section.offsetTop - 180;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    current =
                        section.id;

                }

            }
        );


        navLinks.forEach(
            link => {

                link.classList.toggle(
                    "active",

                    link.getAttribute(
                        "href"
                    ) ===
                    "#" + current

                );

            }
        );

    }
);



/* ==========================================================
   BACK TO TOP
   ========================================================== */

if (topBtn) {

    topBtn.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}



/* ==========================================================
   BUTTON RIPPLE / CLICK EFFECT
   ========================================================== */

document
    .querySelectorAll(".btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            function () {

                this.classList.remove(
                    "clicked"
                );


                void this.offsetWidth;


                this.classList.add(
                    "clicked"
                );

            }
        );

    });