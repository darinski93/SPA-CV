import { html, render, page } from "../lib.js";

const nav = document.querySelector('div')

const navTemplate = () => html`

<nav>
    <img class="fix" src="./src/picture/profilePicture.jpg" alt="Avatar" style="width: 200px;">
    <ul>

        <li><a href="/">About</a></li>
        <li><a href="/education">Education</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/skills">Skills</a></li>
        <li><a href="/languages">Languages</a></li>
        <li><a href="/courses">Courses</a></li>

    </ul>
</nav>
`

export function updateNav() {

    render(navTemplate(), nav);
   
}






