/* ==========================================
        Background Music
========================================== */

const bgMusic = document.getElementById("bgMusic");

document.body.addEventListener(
    "click",
    () => {

        bgMusic.play().catch(() => {});

    },
    { once: true }
);

/* ==========================================
        Typewriter Text
========================================== */

const message = `Hi 😊

I don't usually do things like this...

But I wanted to make something
that would hopefully make you smile.

You're someone who is kind,
hard-working,
and has a beautiful heart.

Thank you for being you. ❤️`;

const typing = document.getElementById("typing");

let index = 0;

function typeWriter(){

    if(index < message.length){

        typing.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter,40);

    }

}

window.onload = typeWriter;


/* ==========================================
        Navigation
========================================== */

const pages = [

document.querySelector(".hero"),

document.getElementById("page2"),

document.getElementById("page3"),

document.getElementById("page4"),

document.getElementById("page5"),

document.getElementById("finalPage")

];

let current = 0;

function showPage(page){

    pages.forEach(p=>{

        if(p.classList.contains("hero")) return;

        p.classList.add("hidden");

    });

    page.classList.remove("hidden");

    page.scrollIntoView({

        behavior:"smooth"

    });

}

document.getElementById("startBtn").onclick=()=>{

    showPage(pages[1]);

};

document.querySelectorAll(".nextBtn").forEach((btn,index)=>{

    btn.onclick=()=>{

        showPage(pages[index+2]);

    };

});

document.getElementById("surpriseBtn").onclick=()=>{

    showPage(pages[5]);

};


/* ==========================================
        Petals
========================================== */

const petals=document.getElementById("petals");

const petalEmoji=[

"🌹",
"🌺",
"🌸",
"🥀"

];

function createPetal(){

    const petal=document.createElement("div");

    petal.className="petal";

    petal.innerHTML=

    petalEmoji[
    Math.floor(Math.random()*petalEmoji.length)
    ];

    petal.style.left=Math.random()*100+"vw";

    petal.style.fontSize=

    (20+Math.random()*20)+"px";

    petal.style.animationDuration=

    (6+Math.random()*6)+"s";

    petals.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },12000);

}

setInterval(createPetal,350);

/* ==========================================
Floating Hearts
========================================== */

const hearts=document.getElementById("hearts");

function createHeart(){

const heart=document.createElement("div");

heart.className="floatingHeart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=

(18+Math.random()*20)+"px";

heart.style.animationDuration=

(5+Math.random()*4)+"s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,500);


/* ==========================================
Sparkles
========================================== */

const sparkles=document.getElementById("sparkles");

function createSparkle(){

const s=document.createElement("div");

s.className="sparkle";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

sparkles.appendChild(s);

setTimeout(()=>{

s.remove();

},2000);

}

setInterval(createSparkle,150);

/* ==========================================
YES / FINAL CELEBRATION
========================================== */

const restartBtn = document.getElementById("restart");

restartBtn.addEventListener("click", () => {

location.reload();

});


/* ==========================================
ROSE SHOWER
========================================== */

const roseList = [

"🌹",
"🌺",
"🌸",
"💖",
"💕"

];

function roseShower(){

for(let i=0;i<80;i++){

const rose=document.createElement("div");

rose.innerHTML=
roseList[
Math.floor(Math.random()*roseList.length)
];

rose.style.position="fixed";

rose.style.left=Math.random()*100+"vw";

rose.style.top="-60px";

rose.style.fontSize=
(20+Math.random()*20)+"px";

rose.style.zIndex="9999";

document.body.appendChild(rose);

rose.animate([

    {

        transform:"translateY(0) rotate(0deg)",

        opacity:1

    },

    {

        transform:
        `translateY(${window.innerHeight+100}px)
        rotate(720deg)`,

        opacity:0

    }

],{

    duration:
    5000+
    Math.random()*3000,

    easing:"linear"

});

setTimeout(()=>{

    rose.remove();

},8000);

}

}


/* ==========================================
FIREWORKS
========================================== */

function fireworks(){

for(let i=0;i<120;i++){

const dot=document.createElement("div");

dot.style.position="fixed";

dot.style.left="50%";

dot.style.top="50%";

dot.style.width="8px";

dot.style.height="8px";

dot.style.borderRadius="50%";

dot.style.background=randomColor();

dot.style.zIndex="9999";

document.body.appendChild(dot);

const angle=Math.random()*360;

const distance=Math.random()*300;

dot.animate([

    {

        transform:"translate(0,0)",

        opacity:1

    },

    {

        transform:

        `translate(
        ${Math.cos(angle)*distance}px,
        ${Math.sin(angle)*distance}px
        )`,

        opacity:0

    }

],{

    duration:1700,

    easing:"ease-out"

});

setTimeout(()=>{

    dot.remove();

},1700);

}

}


/* ==========================================
MUSIC BUTTON
========================================== */

const musicBtn=document.createElement("div");

musicBtn.className="musicBtn";

musicBtn.innerHTML="🎵";

document.body.appendChild(musicBtn);

let musicPlaying=true;

musicBtn.onclick=()=>{

if(musicPlaying){

bgMusic.pause();

musicBtn.innerHTML="🔇";

}

else{

bgMusic.play();

musicBtn.innerHTML="🎵";

}

musicPlaying=!musicPlaying;

};


/* ==========================================
FINAL PAGE EFFECT
========================================== */

const surpriseBtn=document.getElementById("surpriseBtn");

surpriseBtn.addEventListener("click",()=>{

setTimeout(()=>{

roseShower();

fireworks();

},700);

});


/* ==========================================
RANDOM COLORS
========================================== */

function randomColor(){

const colors=[

"#ff1744",
"#ff4081",
"#ff80ab",
"#ffffff",
"#ffd54f",
"#ff6f91",
"#ff8a80"

];

return colors[
Math.floor(
    Math.random()*colors.length
)
];

}


/* ==========================================
PHOTO ANIMATION
========================================== */

setInterval(()=>{

document.querySelectorAll(".photo,.profile").forEach(img=>{

img.animate([

    {

        transform:"scale(1)"

    },

    {

        transform:"scale(1.03)"

    },

    {

        transform:"scale(1)"

    }

],{

    duration:2500

});

});

},3500);
