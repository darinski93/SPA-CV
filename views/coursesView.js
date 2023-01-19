import { html } from "../lib.js";


const coursesTemplate = () => html`


<div class="container">
    <div class="background"></div>
    <div class="post-courses">
        <p class="main-courses">COURSES</p>
        <div class="resume-courses">
            <div class="pro-courses">
                <ul>
                    <li class="courses-w">
                        <i class="trophy">&#x1F3C6;</i>Programming Basics with JS
                    </li>
                    <li class="courses-w-1">
                        <i class="trophy">&#x1F3C6;</i>
                        <a class = 'demo'href="#" @click="${openPopup}">JavaScript Fundamentals</a>
                        <div id="popup" class="popup">
                            <div class="popup-content-one">
                                <div class="scroll-container">
                                    <img id="popup-img" class="fixing"
                                        src="./src/pdfs/Programming Fundamentals with JavaScript - September 2022 - Certificate.jpeg"
                                        alt="your-image-description-here">
                                </div>
                                <button @click=${closePopup}>Close</button>
                            </div>
                        </div>
                    </li>
                    <li class="courses-w">
                        <i class="trophy">&#x1F3C6;</i>JavaScript Advanced
                    </li>
                    <li class="courses-y">
                        <a class = 'demo'href="#" @click="${openPopupSec}">1. JavaScript Advanced</a>
                        <div id="popup-sec" class="popup">
                            <div class="popup-content">
                                <div class="scroll-container">
                                    <img id="popup-img" class="fixing"
                                        src="/src/pdfs/JS Advanced - September 2022 - Certificate.jpeg"
                                        alt="your-image-description-here">
                                </div>
                                <button @click=${closePopupSec}>Close</button>
                            </div>
                        </div>
                    </li>
                    <li class="courses-y">
                        <a class = 'demo'href="#" @click="${openPopupTh}">2. JavaScript Application</a>
                        <div id="popup-th" class="popup">
                            <div class="popup-content">
                                <div class="scroll-container">
                                    <img id="popup-img" class="fixing"
                                        src="/src/pdfs/JS Applications - October 2022 - Certificate.jpeg"
                                        alt="your-image-description-here">
                                </div>
                                <button @click=${closePopupTh}>Close</button>
                            </div>
                        </div>
                    </li>
                    <li class="courses-w">
                        <i class="trophy">&#x1F3C6;</i>JavaScript Application
                    </li>
                    <li class="courses-y">
                        <a class = 'demo'href="#" @click="${openPopupGifOne}">1. JavaScript Web</a>
                        <div id="popup-gif-one" class="popup">
                            <div class="popup-content-gif-one">
                                <div class="scroll-container">
                                    <img id="popup-img" class="fixing"
                                        src="/src/pdfs/rylsee-tooshytorap.gif"
                                        alt="your-image-description-here">
                                </div>
                                <button @click=${closePopupGifOne}>Close</button>
                            </div>
                        </div>
                    </li>
                    <li class="courses-y">
                        <a class ='demo'href="#" @click="${openPopupGifTwo}">2.ReactJS</a>
                        <div id="popup-gif-two" class="popup">
                            <div class="popup-content-gif-two">
                                <div class="scroll-container">
                                    <img id="popup-img" class="fixing"
                                        src="/src/pdfs/rylsee-tooshytorap.gif"
                                        alt="your-image-description-here">
                                </div>
                                <button @click=${closePopupGifTwo}>Close</button>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
`
function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function openPopupSec() {
    document.getElementById("popup-sec").style.display = "block";
}

function closePopupSec() {
    document.getElementById("popup-sec").style.display = "none";
}

function openPopupTh() {
    document.getElementById("popup-th").style.display = "block";
}

function closePopupTh() {
    document.getElementById("popup-th").style.display = "none";
}

function openPopupGifOne() {
    document.getElementById("popup-gif-one").style.display = "block";
}

function closePopupGifOne() {
    document.getElementById("popup-gif-one").style.display = "none";
}

function openPopupGifTwo() {
    document.getElementById("popup-gif-two").style.display = "block";
}

function closePopupGifTwo() {
    document.getElementById("popup-gif-two").style.display = "none";
}



export function showCoursesView(ctx) {
    
    ctx.render(coursesTemplate());
}