import { html } from "../lib.js";


const langTemplate = () => html`


<div class="container">
    <div class="background"></div>
    <div class="post-lang">
        <p class="main-lang">LANGUAGES</p>
        <div class="resume-lang">
            <div class="pro-lang">
                <ul>
                    <li class="icon-check">Bulgarian - Native</li>
                    <li class="icon-check">English - C1</li>
                    <li class="icon-check">Polish - B1/B2</li>
                </ul>
            </div>
        </div>
`


export function showLangView(ctx) {

    ctx.render(langTemplate());
}