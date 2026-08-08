/* =========================================================
   BARKHA — LUXURY BLACK EDITION
   Interactive Experience
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const bgMusic = document.getElementById("bgMusic");

const musicButton = document.getElementById("musicButton");

const beginButton = document.getElementById("beginButton");

const smileButton = document.getElementById("smileButton");

const closeSurprise =
    document.getElementById("closeSurprise");

const surprise =
    document.getElementById("surprise");

const particles =
    document.getElementById("particles");

const petals =
    document.getElementById("petals");


/* =========================================================
   MUSIC
========================================================= */

let musicPlaying = false;


/*
   Mobile browsers don't allow music to
   automatically start.

   The first interaction starts it.
*/

function startMusic() {

    if (!bgMusic) {
        return;
    }

    bgMusic.volume = 0.35;

    bgMusic.play()
        .then(() => {

            musicPlaying = true;

            musicButton.textContent = "♫";

            musicButton.classList.add("playing");

        })
        .catch(() => {

            console.log(
                "Music requires user interaction."
            );

        });

}


/*
   Start music when she taps anywhere.
*/

document.addEventListener(
    "click",
    startMusic,
    {
        once: true
    }
);


/* =========================================================
   MUSIC BUTTON
========================================================= */

musicButton.addEventListener(
    "click",
    function (event) {

        event.stopPropagation();

        if (!bgMusic) {
            return;
        }

        if (musicPlaying) {

            bgMusic.pause();

            musicPlaying = false;

            musicButton.textContent = "🔇";

            musicButton.classList.remove(
                "playing"
            );

        } else {

            bgMusic.play()
                .then(() => {

                    musicPlaying = true;

                    musicButton.textContent = "♫";

                    musicButton.classList.add(
                        "playing"
                    );

                })
                .catch(() => {});

        }

    }
);


/* =========================================================
   BEGIN BUTTON
========================================================= */

beginButton.addEventListener(
    "click",
    function () {

        const nextSection =
            document.getElementById(
                "photoSection1"
            );

        if (nextSection) {

            nextSection.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    }
);


/* =========================================================
   SURPRISE BUTTON
========================================================= */

smileButton.addEventListener(
    "click",
    function () {

        surprise.classList.add("active");

        createExtraPetals();

        createGoldenBurst();

    }
);


/* =========================================================
   CLOSE SURPRISE
========================================================= */

closeSurprise.addEventListener(
    "click",
    function () {

        surprise.classList.remove(
            "active"
        );

    }
);


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            surprise.classList.remove(
                "active"
            );

        }

    }
);


/* =========================================================
   GOLD PARTICLES
========================================================= */

function createParticle() {

    const particle =
        document.createElement("div");

    particle.className =
        "particle";

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.top =
        (80 + Math.random() * 30) + "vh";

    const size =
        1 + Math.random() * 3;

    particle.style.width =
        size + "px";

    particle.style.height =
        size + "px";

    particle.style.animationDuration =
        5 + Math.random() * 8 + "s";

    particle.style.animationDelay =
        Math.random() * 2 + "s";

    particles.appendChild(
        particle
    );

    setTimeout(
        () => {

            particle.remove();

        },
        15000
    );

}


/*
   Create particles continuously.
*/

setInterval(
    createParticle,
    450
);


/*
   Initial particles.
*/

for (
    let i = 0;
    i < 20;
    i++
) {

    setTimeout(
        createParticle,
        i * 120
    );

}


/* =========================================================
   ROSE PETALS
========================================================= */

const petalSymbols = [
    "🌹",
    "❣",
    "🌸"
];


function createPetal() {

    const petal =
        document.createElement("div");

    petal.className =
        "petal";

    petal.textContent =
        petalSymbols[
            Math.floor(
                Math.random() *
                petalSymbols.length
            )
        ];

    petal.style.left =
        Math.random() * 100 + "vw";

    petal.style.fontSize =
        12 + Math.random() * 13 + "px";

    petal.style.animationDuration =
        7 + Math.random() * 7 + "s";

    petal.style.animationDelay =
        Math.random() * 2 + "s";

    petals.appendChild(
        petal
    );

    setTimeout(
        () => {

            petal.remove();

        },
        16000
    );

}


/*
   Gentle petal frequency.
*/

setInterval(
    createPetal,
    900
);


/* =========================================================
   INITIAL PETALS
========================================================= */

for (
    let i = 0;
    i < 8;
    i++
) {

    setTimeout(
        createPetal,
        i * 500
    );

}


/* =========================================================
   EXTRA PETALS FOR SURPRISE
========================================================= */

function createExtraPetals() {

    for (
        let i = 0;
        i < 45;
        i++
    ) {

        setTimeout(
            createPetal,
            i * 80
        );

    }

}


/* =========================================================
   GOLDEN BURST
========================================================= */

function createGoldenBurst() {

    const colors = [

        "#d4a856",
        "#f1d58f",
        "#ffffff",
        "#a00018"

    ];


    for (
        let i = 0;
        i < 60;
        i++
    ) {

        const particle =
            document.createElement(
                "div"
            );

        particle.style.position =
            "fixed";

        particle.style.left =
            "50%";

        particle.style.top =
            "50%";

        particle.style.width =
            "4px";

        particle.style.height =
            "4px";

        particle.style.borderRadius =
            "50%";

        particle.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];

        particle.style.boxShadow =
            "0 0 10px rgba(212,168,86,.8)";

        particle.style.zIndex =
            "6000";

        document.body.appendChild(
            particle
        );


        const angle =
            Math.random() *
            Math.PI *
            2;

        const distance =
            80 +
            Math.random() * 220;


        const x =
            Math.cos(angle) *
            distance;

        const y =
            Math.sin(angle) *
            distance;


        particle.animate(

            [

                {
                    transform:
                        "translate(-50%, -50%) scale(0)",

                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        ) scale(1)`,

                    opacity: 0
                }

            ],

            {

                duration:
                    1300 +
                    Math.random() * 700,

                easing:
                    "cubic-bezier(.16,1,.3,1)"

            }

        );


        setTimeout(
            () => {

                particle.remove();

            },
            2200
        );

    }

}


/* =========================================================
   INTERSECTION OBSERVER
========================================================= */


/*
   Sections gently appear as the user
   scrolls into them.
*/

const sections =
    document.querySelectorAll(
        ".section"
    );


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },

        {

            threshold: 0.25

        }

    );


sections.forEach(
    (section) => {

        observer.observe(
            section
        );

    }
);


/* =========================================================
   PHOTO PARALLAX
========================================================= */

const photos =
    document.querySelectorAll(
        ".barkha-photo"
    );


let ticking = false;


function updatePhotoParallax() {

    const windowHeight =
        window.innerHeight;


    photos.forEach(
        (photo) => {

            const rect =
                photo.getBoundingClientRect();


            const center =
                rect.top +
                rect.height / 2;


            const distance =
                (center -
                    windowHeight / 2) /
                windowHeight;


            const movement =
                distance * -12;


            photo.style.setProperty(
                "--parallax",
                movement + "px"
            );

        }
    );


    ticking = false;

}


window.addEventListener(
    "scroll",
    () => {

        if (!ticking) {

            window.requestAnimationFrame(
                updatePhotoParallax
            );

            ticking = true;

        }

    },
    {
        passive: true
    }
);


/* =========================================================
   TOUCH FEEDBACK
========================================================= */

const buttons =
    document.querySelectorAll(
        "button"
    );


buttons.forEach(
    (button) => {

        button.addEventListener(
            "touchstart",
            () => {

                button.style.transform =
                    "scale(.96)";

            },
            {
                passive: true
            }
        );


        button.addEventListener(
            "touchend",
            () => {

                button.style.transform =
                    "";

            },
            {
                passive: true
            }
        );

    }
);


/* =========================================================
   PHOTO TAP EFFECT
========================================================= */

photos.forEach(
    (photo) => {

        photo.addEventListener(
            "click",
            () => {

                photo.animate(

                    [

                        {
                            transform:
                                "scale(1)"
                        },

                        {
                            transform:
                                "scale(1.025)"
                        },

                        {
                            transform:
                                "scale(1)"
                        }

                    ],

                    {

                        duration: 700,

                        easing:
                            "ease-in-out"

                    }

                );

            }
        );

    }
);


/* =========================================================
   VISIBILITY CHANGE
========================================================= */


/*
   Pause expensive effects when the tab
   is not visible.
*/

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.hidden &&
            musicPlaying
        ) {

            bgMusic.pause();

        }

        if (
            !document.hidden &&
            musicPlaying
        ) {

            bgMusic.play()
                .catch(() => {});

        }

    }
);


/* =========================================================
   PAGE LOAD
========================================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );

    }
);