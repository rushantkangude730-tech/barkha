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
            Type Writer
========================================== */

const message = `Hi ❤️

I don't know if this page
will make you smile...

But I wanted to create
something special for you.

Some people enter our lives
unexpectedly,

and somehow they make
everything feel happier.

I don't know what the future holds...

But I'd really love
to know you better. 😊`;

const typing = document.getElementById("typing");

let i = 0;

function typeWriter(){

    if(i < message.length){

        typing.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter,45);

    }

}

window.onload = typeWriter;



/* ==========================================
        Section Navigation
========================================== */

const hero = document.querySelector(".hero");
const story = document.getElementById("story");
const gallery = document.getElementById("gallery");
const proposal = document.getElementById("proposal");

document.getElementById("startBtn").onclick = () => {

    story.classList.remove("hidden");

    story.scrollIntoView({

        behavior:"smooth"

    });

};

document.getElementById("nextPage").onclick = () => {

    gallery.classList.remove("hidden");

    gallery.scrollIntoView({

        behavior:"smooth"

    });

};

document.getElementById("proposalBtn").onclick = () => {

    proposal.classList.remove("hidden");

    proposal.scrollIntoView({

        behavior:"smooth"

    });

};



/* ==========================================
        Falling Flowers
========================================== */

const flowerContainer =
document.getElementById("flowers");

const flowerList = [

    "🌸",
    "🌺",
    "🌷",
    "💮",
    "🌹"

];

function createFlower(){

    const flower =
    document.createElement("div");

    flower.className="flower";

    flower.innerHTML=

    flowerList[
        Math.floor(
            Math.random()*flowerList.length
        )
    ];

    flower.style.left=
    Math.random()*100+"vw";

    flower.style.fontSize=
    (20+Math.random()*25)+"px";

    flower.style.animationDuration=
    (6+Math.random()*5)+"s";

    flowerContainer.appendChild(flower);

    setTimeout(()=>{

        flower.remove();

    },12000);

}

setInterval(createFlower,350);

/* ==========================================
Floating Hearts
========================================== */

const heartContainer =
document.getElementById("hearts");

function createHeart(){

const heart =
document.createElement("div");

heart.className="heart";

heart.innerHTML="💖";

heart.style.left=
Math.random()*100+"vw";

heart.style.fontSize=
(18+Math.random()*18)+"px";

heart.style.animationDuration=
(5+Math.random()*4)+"s";

heartContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,500);



/* ==========================================
Sparkles
========================================== */

const sparkleContainer =
document.getElementById("sparkles");

function createSparkle(){

const sparkle=
document.createElement("div");

sparkle.className="sparkle";

sparkle.style.left=
Math.random()*100+"vw";

sparkle.style.top=
Math.random()*100+"vh";

sparkle.style.animationDuration=
(1+Math.random()*2)+"s";

sparkleContainer.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},2000);

}

setInterval(createSparkle,150);

/* ==========================================
YES BUTTON
========================================== */

const yesBtn = document.getElementById("yesBtn");

yesBtn.addEventListener("click", () => {

createFireworks();

createRoseShower();

proposal.innerHTML = `

<div class="proposalCard">

<div style="font-size:90px;">🥰</div>

<h1 style="font-family:'Great Vibes';color:#ff2f7f;">

    Thank You ❤️

</h1>

<p style="margin-top:20px;
          line-height:2;
          font-size:20px;">

    You just made my day.

    <br><br>

    I hope this is the beginning
    of a beautiful friendship.

    🌸😊

</p>

</div>

`;

});



/* ==========================================
NO BUTTON
========================================== */

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("touchstart", moveButton);

function moveButton(){

const x =
Math.random()*220-110;

const y =
Math.random()*180-90;

noBtn.style.transform=
`translate(${x}px,${y}px)`;

}



/* ==========================================
Fireworks
========================================== */

function createFireworks(){

for(let i=0;i<180;i++){

const dot =
document.createElement("div");

dot.style.position="fixed";

dot.style.left="50%";

dot.style.top="50%";

dot.style.width="8px";

dot.style.height="8px";

dot.style.borderRadius="50%";

dot.style.background=
randomColor();

dot.style.zIndex="9999";

document.body.appendChild(dot);

const angle=Math.random()*360;

const distance=
Math.random()*350;

dot.animate(

[

{

    transform:

    "translate(0,0)",

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

],

{

duration:1800,

easing:"ease-out"

}

);

setTimeout(()=>{

dot.remove();

},1800);

}

}



/* ==========================================
Rose Shower
========================================== */

const roses=[
"🌹",
"🌺",
"🌸",
"💖",
"💕"
];

function createRoseShower(){

for(let i=0;i<120;i++){

const rose=
document.createElement("div");

rose.innerHTML=

roses[
Math.floor(Math.random()*roses.length)
];

rose.style.position="fixed";

rose.style.left=
Math.random()*100+"vw";

rose.style.top="-50px";

rose.style.fontSize=
(22+Math.random()*20)+"px";

rose.style.zIndex=9999;

document.body.appendChild(rose);

rose.animate(

[

{

    transform:

    "translateY(0)",

    opacity:1

},

{

    transform:

    `translateY(${window.innerHeight+100}px)
    rotate(720deg)`,

    opacity:0

}

],

{

duration:

5000+

Math.random()*3000

}

);

setTimeout(()=>{

rose.remove();

},7000);

}

}



/* ==========================================
Music Button
========================================== */

const musicBtn=
document.createElement("div");

musicBtn.className="musicBtn";

musicBtn.innerHTML="🎵";

document.body.appendChild(musicBtn);

let playing=true;

musicBtn.onclick=()=>{

if(playing){

bgMusic.pause();

musicBtn.innerHTML="🔇";

}

else{

bgMusic.play();

musicBtn.innerHTML="🎵";

}

playing=!playing;

};



/* ==========================================
Random Colors
========================================== */

function randomColor(){

const colors=[

"#ff4081",

"#ff9800",

"#ffd600",

"#00e676",

"#40c4ff",

"#ffffff",

"#ff1744",

"#ff80ab"

];

return colors[

Math.floor(

Math.random()*colors.length

)

];

}