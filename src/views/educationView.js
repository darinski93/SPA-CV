import { html } from "../lib.js";


const educationTemplate = () => html`

</body>

</html>

<div class="resume-section">
    <h2>Education</h2>
    <div class="background"></div>
    <div class="post-resume">
        <p class="mainP">EDUCATION</p>
        <div class="resume">
            <div class="column-one">
                <p>JavaScript Development</p>
                <p>Software University (SoftUni)</p>
                <p>February 2022 - present</p>
            </div>
            <div class="column-two">
                <p>Special Education</p>
                <p>Sofia University "St. Kliment Ohridski"</p>
                <p>September 2013 - July 2017</p>
            </div>
        </div>
    </div>
`


export function showEducationView(ctx) {

    ctx.render(educationTemplate());
}