import { html } from "../lib.js";


const skillsTemplate = () => html`


<div class="container">
    <div class="background"></div>
    <div class="post-skills">
        <p class="main-skills">SKILLS</p>
        <div class="resume-skills">
            <div class="pro-skills">
                <h4>PROGRAMMING SKILLS</h4>
                <ul>
                    <li class="icon-check">JavaScript</li>
                    <li class="icon-check">Mocha, Chai & Playwright</li>
                    <li class="icon-check">Lit & Page Libraries</li>
                    <li class="icon-check">SPA</li>
                    <li class="icon-check">Routing</li>
                    <li class="icon-check">POST requests</li>
                    <li class="icon-check">HTML & CSS</li>
                </ul>
            </div>
            <div class="pro-skills">
                <h4>SOFT SKILLS</h4>
                <ul>
                    <li class="icon-check">Team player.</li>
                    <li class="icon-check">Has good communication skills.</li>
                    <li class="icon-check">Has the ability to estabilsh and maintain effective working relationship with clients and collegues.</li>
                </ul>
            </div>
        </div>
`


export function showSkillsView(ctx) {

    ctx.render(skillsTemplate());
}