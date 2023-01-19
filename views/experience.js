import { html } from "../lib.js";


const experienceTemplate = () => html`

</body>

</html>

<div class="experience-section">
    <h2>Experience</h2>
    <div class="background"></div>
    <div class="post-resume-e">
        <p class="main-experience-e">EXPERIENCE</p>
        <div class="resume">
            <div class="column-one-e">
                <p>Sales representative/Account Manager</p>
                <p>Foodpanda / Glovo</p>
                <p>February 2020 - June 2022</p>
            </div>
            <div class="column-two-e">
                <p>Sales representative</p>
                <p>B.M. Investment</p>
                <p>January 2017 - February 2019 </p>
            </div>
            <div class="column-three-e">
                <p>Sales representative</p>
                <p>VIVACOM</p>
                <p>August 2015 - July 2016</p>
            </div>
           
        </div>
    </div>
`


export function showExperienceView(ctx) {

    ctx.render(experienceTemplate());
}