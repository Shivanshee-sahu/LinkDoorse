import React, { useState,useEffect } from 'react';
import gsap from 'gsap';
function Influencer() {
    const [activeAccordion, setActiveAccordion] = useState(null);

    // Function to toggle accordion items
    const toggleAccordion = (index) => {
      if (activeAccordion === index) {
        setActiveAccordion(null); 
      } else {
        setActiveAccordion(index);
      }
    };
  const goBack = () => {
    window.history.back();
  };
  const people = [
    {
      photo: 'url("https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843_960_720.jpg")',
      name: "Susan Smith",
      profession: "WEB DEVELOPER",
      description: "Cheese and biscuits chalk and cheese fromage frais. Cheeseburger caerphilly cheese slices chalk and cheese cheeseburger mascarpone danish fontina rubber cheese. Squirty cheese say cheese manchego jarlsberg lancashire taleggio cheese and wine squirty cheese. Babybel pecorino feta macaroni cheese brie queso everyone loves gouda. Cheese and biscuits camembert de normandie fromage fromage macaroni cheese"
    },
    {
      photo: "url('https://cdn.pixabay.com/photo/2019/02/11/20/20/woman-3990680_960_720.jpg')",
      name: "Anna Grey",
      profession: "UFC FIGHTER",
      description: "I'm baby migas cornhole hell of etsy tofu, pickled af cardigan pabst. Man braid deep v pour-over, blue bottle art party thundercats vape. Yr waistcoat whatever yuccie, farm-to-table next level PBR&B. Banh mi pinterest palo santo, aesthetic chambray leggings activated charcoal cred hammock kitsch humblebrag typewriter neutra knausgaard. Pabst succulents lo-fi microdosing portland gastropub Banh mi pinterest palo santo"
    },
    {
      photo: "url('https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg')",
      name: "Branson Cook",
      profession: "ACTOR",
      description: "Radio telescope something incredible is waiting to be known billions upon billions Jean-François Champollion hearts of the stars tingling of the spine. Encyclopaedia galactica not a sunrise but a galaxyrise concept of the number one encyclopaedia galactica from which we spring bits of moving fluff. Vastness is bearable only through love paroxysm of global death concept"
    },
    {
      photo: "url('https://cdn.pixabay.com/photo/2014/10/30/17/32/boy-509488_960_720.jpg')",
      name: "Julius Grohn",
      profession: "PROFESSIONAL CHILD",
      description: "Biscuit chocolate pastry topping lollipop pie. Sugar plum brownie halvah dessert tiramisu tiramisu gummi bears icing cookie. Gummies gummi bears pie apple pie sugar plum jujubes. Oat cake croissant bear claw tootsie roll caramels. Powder ice cream caramels candy tiramisu shortbread macaroon chocolate bar. Sugar plum jelly-o chocolate dragée tart chocolate marzipan cupcake gingerbread."
    }
  ];

  useEffect(() => {
    const reviewWrap = document.getElementById("reviewWrap");
    const leftArrow = document.getElementById("leftArrow");
    const rightArrow = document.getElementById("rightArrow");
    const imgDiv = document.getElementById("imgDiv");
    const personName = document.getElementById("personName");
    const profession = document.getElementById("profession");
    const description = document.getElementById("description");

    let currentPerson = 0;

    function slide(whichSide, personNumber) {
      let reviewWrapWidth = reviewWrap.offsetWidth + "px";
      let descriptionHeight = description.offsetHeight + "px";
      let side1symbol = whichSide === "left" ? "" : "-";
      let side2symbol = whichSide === "left" ? "-" : "";

      let tl = gsap.timeline();

      tl.to(reviewWrap, {
        duration: 0.4,
        opacity: 0,
        translateX: `${side1symbol + reviewWrapWidth}`
      });

      tl.to(reviewWrap, {
        duration: 0,
        translateX: `${side2symbol + reviewWrapWidth}`
      });

      setTimeout(() => {
        imgDiv.style.backgroundImage = people[personNumber].photo;
        description.style.height = descriptionHeight;
        personName.innerText = people[personNumber].name;
        profession.innerText = people[personNumber].profession;
        description.innerText = people[personNumber].description;
      }, 400);

      tl.to(reviewWrap, {
        duration: 0.4,
        opacity: 1,
        translateX: 0
      });
    }

    function setNextCardLeft() {
      if (currentPerson === 3) {
        currentPerson = 0;
      } else {
        currentPerson++;
      }
      slide("left", currentPerson);
    }

    function setNextCardRight() {
      if (currentPerson === 0) {
        currentPerson = 3;
      } else {
        currentPerson--;
      }
      slide("right", currentPerson);
    }

    leftArrow.addEventListener("click", setNextCardLeft);
    rightArrow.addEventListener("click", setNextCardRight);

    return () => {
      leftArrow.removeEventListener("click", setNextCardLeft);
      rightArrow.removeEventListener("click", setNextCardRight);
    };
  }, []); 
<style>
    {
        `#vision3{
  position: relative;
  font-size:3.5rem;
  letter-spacing: 10px;
  color: #08454d;
  margin-bottom: 5%;

  text-transform: uppercase;
  width: 100%;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0008);
  line-height: 0.70em;
  outline: none;
  align-items: center;
  text-align: center;
}
.feature{
  align-items: center;
  text-align: center;
}
:root {
--Very-Dark-Blue: hsl(234, 12%, 34%);
--Grayish-Blue: hsl(229, 6%, 66%);
--Very-Light-Gray: hsl(0, 0%, 98%);
--border-color: hsl(0, 0%, 50%);
--fw-light: 200;
--fw-regular: 400;
--fw-bold: 600;

color: var(--Grayish-Blue);
font-size: 15px;
font-family: "Poppins", sans-serif;
font-weight: var(--fw-regular);
}


section{
  background-color: white;
  width: 100%;
  margin: 15px 0;

}
.cyan {
border-color:rgb(26, 219, 219);
grid-area: 1 / 1 / 3 / 2;
}

.red {
border-color: rgb(211, 44, 44);
}

.orange {
border-color: rgb(248, 116, 34);
}

.blue {
border-color: rgb(33, 120, 241);
grid-area: 1 / 3 / 3 / 4;
}

.header {
text-align: center;
}

.header_subtitle,
.header_title {
font-size: clamp(1.6rem, 5vw, 2rem);
}

.header_subtitle {
font-weight: var(--fw-light);
}

.header_title {
margin-bottom: 1rem;
}

.header_title,
.card_title {
color:white;
}

.header_description {
max-width: 500px;
margin: 0 auto;
}

.card_grid {
margin-top: 3rem;
display: grid;
justify-content: center;
align-items: center;
gap: 1.5rem;
}

.card {
max-width: 320px;
margin: 0 auto;
padding: 2rem;
background-color: #07252d;
border-top: 5px solid grey;
border-radius: 5px;
box-shadow: 0 10px 10px rgba(23, 79, 138, 0.1);
}

.card_title {
margin-bottom: 1rem;
font-size: 1.3rem;
font-weight: 600;
}

.card_content {
margin-bottom: 1.5rem;
font-size: 0.9rem;
}

.card_img {
margin-left: auto;
display: block;
}

@media (max-width: 768px) {
.card_grid {
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  align-items: stretch;
}

.cyan {
  grid-area: auto;
}

.blue {
  grid-area: auto;
}

.card {
  max-width: 300px;
}
}

@media screen and (max-width: 500px) {
.card_grid {
  grid-template-columns: repeat(1, minmax(200px, 1fr));
}
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.slider {
  padding-block: 12px;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  position: relative;
  mask-image: linear-gradient(to right, transparent 20% 80%, #e81a1a, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, #aca5a5, transparent);
}

.list {
  display: flex;
  width: calc(
    var(--width) * var(--imageQuantity) * 2
  ); /* Double the width for seamless looping */
  gap: calc(var(--width) / 4);
  animation: autoScroll 20s linear infinite;
}

.list:hover {
  animation-play-state: paused !important;
}

.item {
  width: var(--width);
  height: var(--height);
  flex-shrink: 0;
}

.item img {
  width: 100%;
  height: 100%;
  transition: filter 0.5s ease-in-out;
}

@keyframes autoScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-1 * var(--width) * var(--imageQuantity)));
  }
}

.slider[reverse="true"] .list {
  animation: reverseScroll 20s linear infinite;
}

@keyframes reverseScroll {
  0% {
    transform: translateX(calc(-1 * var(--width) * var(--imageQuantity)));
  }
  100% {
    transform: translateX(0);
  }
}

.slider:hover .item img {
  filter: grayscale(2);
}

.slider .item:hover img {
  filter: grayscale(0);
}
.collab{
  margin-top: 6%;
  background-color: #07252d;
}
.collabhead{
  margin-top: 3%;
}
/* testimonial */
.carousel img {
  width: 70px;
  max-height: 70px;
  border-radius: 50%;
  margin-right: 1rem;
  overflow: hidden;
}
.carousel-inner {
  padding: 1em;
}

@media screen and (min-width: 576px) {
  .carousel-inner {
    display: flex;
    width: 90%;
    margin-inline: auto;
    padding: 1em 0;
    overflow: hidden;
  }
  .carousel-item {
    display: block;
    margin-right: 0;
    flex: 0 0 calc(100% / 2);
  }
}
@media screen and (min-width: 768px) {
  .carousel-item {
    display: block;
    margin-right: 0;
    flex: 0 0 calc(100% / 3);
  }
}
.carousel .card {
  margin: 0 0.5em;
  border: 0;
}

.carousel-control-prev,
.carousel-control-next {
  width: 3rem;
  height: 3rem;
  background-color:#08454d;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
}
@import url("https://fonts.googleapis.com/css2?family=Shippori+Antique&display=swap");



button,
input,
select {
font-family: inherit;
font-size: 100%;
box-sizing: border-box;
padding: 0;
margin: 0;
}




.content-wrapper {
height: 100%;
width: 100%;
display: flex;
  
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 5rem;
  background-color: #07252d;
}

h1 {
margin-bottom: calc(0.7rem + 0.5vmin);
font-size: calc(2.3rem + 1vmin);
  margin-top: 2%;
}



.wrapper-for-arrows {
position: relative;
width: 70%;
border-radius: 2rem;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
overflow: hidden;
display: grid;
place-items: center;
}

.review-wrap {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: calc(2rem + 1vmin);
width: 100%;
  background-color: white
  ;
}

#imgDiv {
border-radius: 50%;
width: calc(6rem + 4vmin);
height: calc(6rem + 4vmin);
position: relative;
box-shadow: 5px -3px #08454d;
background-size: cover;
margin-bottom: calc(0.7rem + 0.5vmin);
}


#imgDiv::after {
content: "''";
font-size: calc(2rem + 2vmin);
font-family: sans-serif;
line-height: 150%;
color: #08454d;
display: grid;
place-items: center;
border-radius: 50%;
background-color:white;
position: absolute;
top: 10%;
left: -10%;
width: calc(2rem + 2vmin);
height: calc(2rem + 2vmin);
}

#personName {
margin-bottom: calc(0.7rem + 0.5vmin);
font-size: calc(1rem + 0.5vmin);
letter-spacing: calc(0.1rem + 0.1vmin);
font-weight: bold;
}

#profession {
font-size: calc(0.8rem + 0.3vmin);
margin-bottom: calc(0.7rem + 0.5vmin);
color: #08454d;
}

#description {
font-size: calc(0.8rem + 0.3vmin);
width: 70%;
max-width: 40rem;
text-align: center;
margin-bottom: calc(1.4rem + 1vmin);
color: #08454d;
line-height: 2rem;
}

.arrow-wrap {
position: absolute;
top: 50%;
}

.arrow {
width: calc(1.4rem + 0.6vmin);
height: calc(1.4rem + 0.6vmin);
border: solid #08454d;
border-width: 0 calc(0.5rem + 0.2vmin) calc(0.5rem + 0.2vmin) 0;
cursor: pointer;
transition: transform 0.3s;
}

.arrow:hover {
transition: 0.3s;
transform: scale(1.15);
}

.left-arrow-wrap {
left: 5%;
transform: rotate(135deg);
-webkit-transform: rotate(135deg);
}

.right-arrow-wrap {
transform: rotate(-45deg);
-webkit-transform: rotate(-45deg);
right: 5%;
}




.move-head {
animation: moveHead 1.55s infinite;
animation-delay: -0.8s;
}




@keyframes moveHead {
0% {
}
25% {
  transform: translate(0.5rem, 1rem) rotate(5deg);
}
100% {
  transform: translate(0, 0) rotate(-5deg);
}
}
@media screen and (max-width: 900px) {
.content-wrapper {
  width: 100%;
}
}
.container{
  background-color: #07252d;
  color:#08454d;
}
/* footer */
footer {
  padding: 20px;
  text-align: center;
  background-color: #07252d;
  color: white;
  width: 100%;
  border-top: 5px solid #08454d;
}

footer nav ul {
  list-style: none;
  padding: 0;
}

footer nav ul li {
  display: inline;
  margin-right: 10px;
}

footer nav ul li a {
  color:white;
  text-decoration: none;
}

footer nav ul li a:hover {
  text-decoration: underline;
}

footer p {
  margin-top: 10px;
  font-size: 0.9rem;
}

footer h2 {
  font-size: 2em;
  color: white;
  margin-bottom:0.5em;
}

footer p {
  margin: 0.5em 0;
  color:white;
}

footer .social-media {
  margin-top: 20px;
}

footer .social-media a {
  margin: 0 10px;
  font-size: 1em;
  color: white;
  transition: color 0.3s;
}

footer .social-media a:hover {
  color: #f04;
}
/* steps*/

:root {
 
  --font-size: 0.8em;

  --bg1: #f5f8f7;
  --blue: #3498db;
  --green: #2ecc71;
  --purple: #9b59b6;
  --gold: #f1c40f;
  --red: #e74c3c;
  --orange: #e67e22;
  --shadow1: 0 2px 4px #00000026, 0 3px 6px #0000001f;
  --shadow2: 0 2px 6px #00000044, 0 4px 7px #00000022;
}
main{
  margin: 80px;
}
 


ul.infoGraphic {
  
  font-size: var(--font-size);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 40px;
 
  justify-content: center;
  li {
    position: relative;
    width: 100%;
    max-width: 25em;
    background:#07252d;
    border-radius: 0.5em;
    padding: 1.5em;
    z-index: 1;
    list-style-type: none;
    text-decoration: none;
    transition: all 0.2s;
    cursor: pointer;
    
    .numberWrap {
      position: absolute;
    }
 
 
    .number {
      font-family: "maven pro", sans-serif;
      font-size: 12.6em;
      font-weight: 900;
      width: 0.9em;
      text-align: center;
      &.fontColor1 {
        color: var(--blue);
      }
      &.fontColor2 {
        color: var(--green);
      }
      &.fontColor3 {
        color: var(--purple);
      }
      &.fontColor4 {
        color: var(--gold);
      }
      &.fontColor5 {
        color: var(--red);
      }
      &.fontColor6 {
        color: var(--orange);
      }
    }
    .coverWrap {
      transform: rotate(130deg);
      position: absolute;
      width: 18em;
      height: 15em;
      left: -3em;
      top: -1em;
      .numberCover {
        position: absolute;
        background:#07252d;
        width: 18em;
        height: 6em;
        border-radius: 50% 50% 0 0;
        border-bottom: 3px solid #f5f8f7;
        transition: all 0.4s;
background-color
   
        &::after {
          position: absolute;
          bottom: 0;
          content: "";
          left: -10%;
          width: 120%;
          height: 150%;
          background: radial-gradient(
            at bottom,
            #48668533,
            transparent,
            transparent
          );
          z-index: 1;
        }
      }
    }
    .content {
      margin: 8em 3em 1em 7em;
      position: relative;
      h2 {
        font-size: 1.6em;
        font-weight: 500;
        text-align: center;
        margin-bottom: 10px;
        text-transform: uppercase;
      }
      p {
        line-height: 1.5em;
      }
    }
  }
}


ul.infoGraphic li:hover .coverWrap .numberCover {
  border-radius: 100%;
}


ul.infoGraphic :nth-child(5) {
margin-left: 50%;
}

.icon {
  position: absolute;
  font-size: 2rem;
  text-align: center;
  top: -1.3em;
  left: 50%;
  transform: translatex(-50%);

}




@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Maven+Pro:wght@800&display=swap");




.controls {
    position: fixed;
    z-index: 2;
    bottom: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background: #07252d;
    padding: .5rem 2em;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    border: 1px solid #0000004d;
}

.sliderBox {
  text-align: center;
  .range-value {
    font-weight: 500;
    font-size: 22px;
  }
}

input[type="range"] {
  width: 100%;
  margin: 1em 0;
  -webkit-appearance: none;
}
input[type="range"]:focus {
  outline: none;
}
input[type="range"]::-webkit-slider-runnable-track {
  background: #00000066;
  border: 0;
  border-radius: 1.3px;
  width: 100%;
  height: 2px;
  cursor: pointer;
}
input[type="range"]::-webkit-slider-thumb {
  margin-top: -10px;
  width: 20px;
  height: 20px;
  background:#07252d;
  box-shadow: inset 0px 1px 1px #ffffff66, 0px 1px 3px rgba(0, 0, 0, 1);
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 50px;
  cursor: pointer;
  -webkit-appearance: none;
}
input[type="range"]:focus::-webkit-slider-runnable-track {
  background: #101010;
}
input[type="range"]::-moz-range-track {
  background: #000;
  border: 0;
  border-radius: 1.3px;
  width: 100%;
  height: 1px;
  cursor: pointer;
}
input[type="range"]::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #151728;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 50px;
  cursor: pointer;
}
input[type="range"]::-ms-track {
  background: transparent;
  border-color: transparent;
  border-width: 13px 0;
  color: transparent;
  width: 100%;
  height: 1px;
  cursor: pointer;
}
input[type="range"]::-ms-fill-lower {
  background: #151728;
  border: 0;
  border-radius: 2.6px;
}
input[type="range"]::-ms-fill-upper {
  background: #151728;
  border: 0;
  border-radius: 2.6px;
}
input[type="range"]::-ms-thumb {
  width: 25px;
  height: 25px;
  background: #151728;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 50px;
  cursor: pointer;
  margin-top: 0px;
  /* /Needed to keep the Edge thumb centred/ */
}
.container1 {

  padding: 5rem;
  width: 100%;
  background-color: white;
 
}

.accordion {
  .accordion-item {
    border-bottom: 1px solid lightgray;
    button[aria-expanded='true'] {
      border-bottom: 1px solid #07252d;
    }
  }
  button {
    position: relative;
    display: block;
    text-align: left;
    width: 100%;
    padding: 1em 0;
    color: #08454d;
    font-size: 1.15rem;
    font-weight: 400;
    border: none;
    background: none;
    outline: none;
    &:hover, &:focus {
      cursor: pointer;
      color:#08454d;
      &::after {
        cursor: pointer;
        color: #08454d;
        border: 1px solid #0e3742;
      }
    }
    .accordion-title {
      padding: 1em 1.5em 1em 0;
    }
    .icon {
      display: inline-block;
      position: absolute;
      top: 18px;
    
      left: 95%;
      width: 22px;
      height: 22px;
      border: 1px solid;
      border-radius: 22px;
      &::before {
        display: block;
        position: absolute;
        content: '';
        top: 9px;
        left: 5px;
        width: 10px;
        height: 2px;
        background: currentColor;
      }
      &::after {
        display: block;
        position: absolute;
        content: '';
        top: 5px;
        left: 9px;
        width: 2px;
        height: 10px;
        background:#08454d;
      }
    }
  }
  button[aria-expanded='true'] {
    color: #08454d;
    .icon {
      &::after {
        width: 0;
      }
    }
    + .accordion-content {
      opacity: 1;
      max-height: 9em;
      transition: all 200ms linear;
      will-change: opacity, max-height;
    }
  }
  .accordion-content {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: opacity 200ms linear, max-height 200ms linear;
    will-change: opacity, max-height;
    p {
      font-size: 1rem;
      font-weight: 300;
      margin: 2em 0;
    }
  }
}
.logo-grid{
   margin-top: 4%;
}
.logo-grid img{
    height: 200px;
    width: 200px;
}
.accordion-item{
    color: #08454d;
}
/* For smaller screens (like mobile phones) */
@media (max-width: 768px) {
  /* Example: Adjust card grid */
  .card_grid {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    
  }
  ul.infoGraphic {
    grid-template-columns: 1fr; /* Stack items in a single column on smaller screens */
    gap: 10px;
  }
  ul.infoGraphic :nth-child(5) {
    margin-left: 0%;
    }
}

/* For even smaller screens (like phones) */
@media screen and (max-width: 500px) {
  /* Example: Adjust card grid further */
  .card_grid {
    grid-template-columns: repeat(1, minmax(200px, 1fr));
   
  }
 .container1{

  width: 130%;
  margin-right: 1%;

 }
  #vision{
    font-size: 1.6rem;
    
  }
  #vision3{
    font-size: 2.3rem;
  }
}
`
    }
</style>
  return (
    <div>
      <header>
        <img
          onClick={goBack}
          style={{
            padding: '10px 20px',
            border: 'none',
            cursor: 'pointer',
            height: '70px',
            width: '90px',
            display: 'flex'
          }}
          src="back.png"
          alt="Go Back"
        />
        <h1 id="vision3" style={{  position: 'relative',
  fontSize: '3.5rem',
  letterSpacing: '10px',
  color: '#08454d',
  marginBottom: '5%',
  textTransform: 'uppercase',
  width: '100%',
  WebkitBoxReflect: 'below 1px linear-gradient(transparent, #0008)',
  lineHeight: '0.70em',
  outline: 'none',
  alignItems: 'center',
  textAlign: 'center'}}>Join Our Influencer Network</h1>
      </header>

        <h1 className="header_title" id="vision">
          Empowered by Brands
        </h1>
      
      <main style={{ marginTop: '3rem', display: 'grid', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }} className="card_grid">
          <section   style={{
  maxWidth: '320px',
  margin: '10px auto',
  padding: '2rem',
  backgroundColor: '#07252d',
  borderTop: '5px solid grey',
  borderRadius: '5px',
  boxShadow: '0 10px 10px rgba(23, 79, 138, 0.1)'
,
  borderColor: 'rgb(26, 219, 219)',
  gridArea: '1 / 1 / 3 / 2'
}} className="card cyan">
            <h2  style={{
  marginBottom: '1rem',
  fontSize: '1.3rem',
  fontWeight: '600', color:'white' // Ensure --fw-bold is defined in your CSS variables or replace with a specific font weight value
}} className="card_title">Paid Collaborations</h2>
            <p style={{
  marginBottom: '1.5rem',
  fontSize: '0.9rem',color:'grey'
}} className="card_content">Dive in world of influencer marketing with unlimited paid Collaborations from your desired Brand.</p>
            <img style={{
  marginLeft: 'auto',
  display: 'block'
}} className="card_img" src="https://raw.githubusercontent.com/davidsonaguiar/frontendmentor/main/Four%20card%20feature%20section/images/icon-supervisor.svg" alt="Supervisor"/>
          </section>
      
          <section  style={{
  maxWidth: '320px',
  margin: '0 auto',
  padding: '2rem',
  backgroundColor: '#07252d',
  borderTop: '5px solid grey',
  borderRadius: '5px',
  boxShadow: '0 10px 10px rgba(23, 79, 138, 0.1)',borderColor: 'rgb(211, 44, 44)'
}} className="card red">
            <h2  style={{
  marginBottom: '1rem',
  fontSize: '1.3rem',
  fontWeight: ' 600' ,color:'white'// Ensure --fw-bold is defined in your CSS variables or replace with a specific font weight value
}} className="card_title">Empower your community</h2>
            <p style={{
  marginBottom: '1.5rem',
  fontSize: '0.9rem',color:'grey'
}}  className="card_content">Empower your community by replying all comments with personalised DM's</p>
            <img style={{
  marginLeft: 'auto',
  display: 'block'
}} className="card_img" src="https://raw.githubusercontent.com/davidsonaguiar/frontendmentor/main/Four%20card%20feature%20section/images/icon-team-builder.svg" alt="page-home"/>
          </section>
      
          <section  style={{
  maxWidth: '320px',
  margin: '0 auto',
  padding: '2rem',
  backgroundColor: '#07252d',
  borderTop: '5px solid grey',
  borderRadius: '5px',
  boxShadow: '0 10px 10px rgba(23, 79, 138, 0.1)'
 ,  borderColor: 'rgb(33, 120, 241)',
 gridArea: '1 / 3 / 3 / 4'}} className="card blue">
            <h2  style={{
  marginBottom: '1rem',
  fontSize: '1.3rem',
  fontWeight: '600',color:'white' // Ensure --fw-bold is defined in your CSS variables or replace with a specific font weight value
}} className="card_title">Collaborate with unlimited brands.</h2>
            <p style={{
  marginBottom: '1.5rem',
  fontSize: '0.9rem',color:'grey'
}}  className="card-content">Create your content in your own terms, no script provided by BRANDS </p>
            <img style={{
  marginLeft: 'auto',
  display: 'block'
}} className="card_img" src="https://raw.githubusercontent.com/davidsonaguiar/frontendmentor/main/Four%20card%20feature%20section/images/icon-karma.svg" alt="Karma"/>
          </section>
      
          <section  style={{
  maxWidth: '320px',
  margin: '0 auto',
  padding: '2rem',
  backgroundColor: '#07252d',
  borderTop: '5px solid grey',
  borderRadius: '5px',
  boxShadow: '0 10px 10px rgba(23, 79, 138, 0.1)',borderColor: 'rgb(248, 116, 34)'
}} className="card orange">
            <h2  style={{
  marginBottom: '1rem',
  fontSize: '1.3rem',
  fontWeight: '600' ,color:'white'// Ensure --fw-bold is defined in your CSS variables or replace with a specific font weight value
}} className="card_title">Track Everything</h2>
            <p style={{
  marginBottom: '1.5rem',
  fontSize: '0.9rem',color:'grey'
}}  className="card_content">With our tech. track sales you genrated, Earning, Engagement and much more.</p>
            <img style={{
  marginLeft: 'auto',
  display: 'block'
}} className="card_img" src="https://raw.githubusercontent.com/davidsonaguiar/frontendmentor/main/Four%20card%20feature%20section/images/icon-calculator.svg" alt="Calculator"/>
          </section>
        </main>
        <section style={{ marginTop: '6%', backgroundColor: '#07252d' }} className="collab">
  <h1 id="vision" style={{ marginTop: '3%' }} className="collabhead">Brands We've Collaborated With</h1>
  <div className="slider">
    <div className="list" style={{
      display: 'flex',
      width: 'calc(var(--width) * var(--imageQuantity) * 2)',
      gap: 'calc(var(--width) / 4)',
      animation: 'autoScroll 20s linear infinite'
    }}>
      {/* Your image items here */}
      <div style={{
        width: 'var(--width)',
        height: 'var(--height)',
        flexShrink: 0
      }} className="item">
        <img style={{
          width: '100%',
          height: '100%',
          transition: 'filter 0.5s ease-in-out'
        }} src="https://raw.githubusercontent.com/HoanghoDev/youtube_v2/main/auto_slider/images/slider1_2.png" alt="" />
      </div>
      {/* Add more image items as needed */}
    </div>
  </div>

  {/* Second slider with reverse animation */}
  <div className="slider" reverse="true">
    <div className="list" style={{
      display: 'flex',
      width: 'calc(var(--width) * var(--imageQuantity) * 2)',
      gap: 'calc(var(--width) / 4)',
      animation: 'reverseScroll 20s linear infinite'
    }}>
      {/* Your second set of image items here */}
      <div style={{
        width: 'var(--width)',
        height: 'var(--height)',
        flexShrink: 0
      }} className="item">
        <img style={{
          width: '100%',
          height: '100%',
          transition: 'filter 0.5s ease-in-out'
        }} src="https://raw.githubusercontent.com/HoanghoDev/youtube_v2/main/auto_slider/images/slider2_1.png" alt="" />
      </div>
      {/* Add more image items as needed */}
    </div>
  </div>
</section>
<main>
    <h1 id="vision">Steps to Join</h1>
    <ul className="infoGraphic"> 
      <li>
        <div className="numberWrap">
          <div className="number fontColor1">1</div>
          <div className="coverWrap">
            <div className="numberCover"></div>
          </div>
        </div>
        <div className="content">
          <div className="icon iconCodepen"></div>
          <h2>Sign up</h2>
          </div>
      </li>
      <li>
        <div className="numberWrap">
          <div className="number fontColor2">2</div>
          <div className="coverWrap">
            <div className="numberCover"></div>
          </div>
        </div>
        <div className="content">
          <div className="icon iconSocial"></div>
          <h2>Wait for our confirmation.</h2>
          <p>Usually takes 24hr.</p>
         </div>
      </li>
      <li>
        <div className="numberWrap">
          <div className="number  fontColor3">3</div>
          <div className="coverWrap">
            <div className="numberCover"></div>
          </div>
        </div>
        <div className="content">
          <div className="icon iconAirplane"></div>
          <h2>Choose your prefered Brand</h2>
          </div>
      </li>
      <li>
        <div className="numberWrap">
          <div className="number  fontColor4">4</div>
          <div className="coverWrap">
            <div className="numberCover"></div>
          </div>
        </div>
        <div className="content">
          <div className="icon iconMap"></div>
          <h2>Create content & post it with link provided.</h2>
           </div>
      </li>
      <li>
        <div className="numberWrap">
          <div className="number  fontColor5">5</div>
          <div className="coverWrap">
            <div className="numberCover"></div>
          </div>
        </div>
        <div className="content">
          <div className="icon iconBulb"></div>
          <h2>Get paid once someone buy from that link.</h2>
          </div>
      </li>
     </ul>
  </main>
 
  <div className="content-wrapper" style={{ 
      height: '100%', 
      width: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      paddingBottom: '5rem', 
      backgroundColor: '#07252d' 
    }}>
      <h1 id="vision" style={{ 
        marginBottom: 'calc(0.7rem + 0.5vmin)', 
        fontSize: 'calc(2.3rem + 1vmin)', 
        marginTop: '2%' 
      }}>Our Reviews</h1>
   
      <div style={{ 
        position: 'relative', 
        width: '70%', 
        borderRadius: '2rem', 
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', 
        overflow: 'hidden', 
        display: 'grid', 
        placeItems: 'center' 
      }} className="wrapper-for-arrows">
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', 
          paddingTop: 'calc(2rem + 1vmin)', 
          width: '100%', 
          backgroundColor: 'white' 
        }} id="reviewWrap" className="review-wrap">
          <div id="imgDiv" style={{ 
            borderRadius: '50%', 
            width: 'calc(6rem + 4vmin)', 
            height: 'calc(6rem + 4vmin)', 
            position: 'relative', 
            boxShadow: '5px -3px #08454d', 
            backgroundSize: 'cover', 
            marginBottom: 'calc(0.7rem + 0.5vmin)' 
          }}>
            <div style={{ 
              content: "''", 
              fontSize: 'calc(2rem + 2vmin)', 
              fontFamily: 'sans-serif', 
              lineHeight: '150%', 
              color: '#08454d', 
              display: 'grid', 
              placeItems: 'center', 
              borderRadius: '50%', 
              backgroundColor: 'white', 
              position: 'absolute', 
              top: '10%', 
              left: '-10%', 
              width: 'calc(2rem + 2vmin)', 
              height: 'calc(2rem + 2vmin)' 
            }}></div>
          </div>
          <div id="personName" style={{ 
            marginBottom: 'calc(0.7rem + 0.5vmin)', 
            fontSize: 'calc(1rem + 0.5vmin)', 
            letterSpacing: 'calc(0.1rem + 0.1vmin)', 
            fontWeight: 'bold' 
          }}>
            {people[0].name}
          </div>
          <div id="profession" style={{ 
            fontSize: 'calc(0.8rem + 0.3vmin)', 
            marginBottom: 'calc(0.7rem + 0.5vmin)', 
            color: '#08454d' 
          }}>
            {people[0].profession}
          </div>
          <div id="description" style={{ 
            fontSize: 'calc(0.8rem + 0.3vmin)', 
            width: '70%', 
            maxWidth: '40rem', 
            textAlign: 'center', 
            marginBottom: 'calc(1.4rem + 1vmin)', 
            color: '#08454d', 
            lineHeight: '2rem' 
          }}>
            {people[0].description}
          </div>
        </div>
      
        <div className="arrow-wrap" style={{ position: 'absolute', top: '50%', left:'5%'}}>
        <div id="leftArrow" className="arrow left-arrow-wrap" style={{ 
    width: 'calc(1.4rem + 0.6vmin)', 
    height: 'calc(1.4rem + 0.6vmin)', 
    border: 'solid #08454d', 
    borderWidth: '0 calc(0.5rem + 0.2vmin) calc(0.5rem + 0.2vmin) 0', 
    cursor: 'pointer', 
    transition: 'transform 0.3s',
    transform: 'rotate(140deg)',
    WebkitTransform: 'rotate(140deg)' 
  }}></div>
        </div>
        <div className="arrow-wrap" style={{ position: 'absolute', top: '50%', right: '5%' }}>
          <div id="rightArrow" className="arrow right-arrow-wrap" style={{ 
            width: 'calc(1.4rem + 0.6vmin)', 
            height: 'calc(1.4rem + 0.6vmin)', 
            border: 'solid #08454d', 
            borderWidth: '0 calc(0.5rem + 0.2vmin) calc(0.5rem + 0.2vmin) 0', 
            cursor: 'pointer', 
            transition: 'transform 0.3s', 
            transform: 'rotate(-45deg)', 
            WebkitTransform: 'rotate(-45deg)' 
          }}></div>
        </div>
      </div>
    </div>
<div className="container1">
      <h2 className="que" id="vision">
        Frequently Asked Questions
      </h2>
      <div className="accordion">
        <div className="accordion-item">
          <button
            id="accordion-button-1"
            aria-expanded={activeAccordion === 1 ? 'true' : 'false'}
            className="accordion-title"
            onClick={() => toggleAccordion(1)}
          >
            Why is the moon sometimes out during the day?
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className={`accordion-content ${activeAccordion === 1 ? 'open' : 'closed'}`}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <button
            id="accordion-button-2"
            aria-expanded={activeAccordion === 2 ? 'true' : 'false'}
            className="accordion-title"
            onClick={() => toggleAccordion(2)}
          >
            Why is the sky blue?
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className={`accordion-content ${activeAccordion === 2 ? 'open' : 'closed'}`}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <button
            id="accordion-button-3"
            aria-expanded={activeAccordion === 3 ? 'true' : 'false'}
            className="accordion-title"
            onClick={() => toggleAccordion(3)}
          >
            Will we ever discover aliens?
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className={`accordion-content ${activeAccordion === 3 ? 'open' : 'closed'}`}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <button
            id="accordion-button-4"
            aria-expanded={activeAccordion === 4 ? 'true' : 'false'}
            className="accordion-title"
            onClick={() => toggleAccordion(4)}
          >
            How much does the Earth weigh?
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className={`accordion-content ${activeAccordion === 4 ? 'open' : 'closed'}`}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <button
            id="accordion-button-5"
            aria-expanded={activeAccordion === 5 ? 'true' : 'false'}
            className="accordion-title"
            onClick={() => toggleAccordion(5)}
          >
            How do airplanes stay up?
            <span className="icon" aria-hidden="true"></span>
          </button>
          <div className={`accordion-content ${activeAccordion === 5 ? 'open' : 'closed'}`}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.
            </p>
          </div>
        </div>
      </div>
    </div>

<footer id="contact">
        <h2>Contact Us</h2>
        <p>Email: info@startup.com</p>
        <p>Phone: (123) 456-7890</p>
        <div className="social-media">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
    <nav>
        <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
        </ul>
    </nav>
    <p>&copy; 2024 Your Company. All rights reserved.</p>
</footer>
    </div>
  );
}

export default Influencer;
