import { html } from "../lib.js";


const projectTemplate = () => html`


<div class="container">
    <div class="background"></div>
    <div class="post-project">
        <p class="main-project">PROJECTS</p>
        <div class="resume-project">
            <div class="pro-project">
                <ul>
                    <li class="icon-pet">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                            <rect width="256" height="256" fill="none" />
                            <path
                                d="M240,108a28,28,0,1,1-28-28A28.1,28.1,0,0,1,240,108ZM72,108a28,28,0,1,0-28,28A28.1,28.1,0,0,0,72,108ZM92,88A28,28,0,1,0,64,60,28.1,28.1,0,0,0,92,88Zm72,0a28,28,0,1,0-28-28A28.1,28.1,0,0,0,164,88Zm23.1,60.8a35.3,35.3,0,0,1-16.9-21.1,43.9,43.9,0,0,0-84.4,0A35.5,35.5,0,0,1,69,148.8,40,40,0,0,0,88,224a40.5,40.5,0,0,0,15.5-3.1,64.2,64.2,0,0,1,48.9-.1A39.6,39.6,0,0,0,168,224a40,40,0,0,0,19.1-75.2Z" />
                        </svg>
                        <a class="fi" href="https://github.com/darinski93/js-application/tree/main/petCare-project"
                        target="_blank" class="icon-link">Pet Care</a>
                    </li>

                </ul>
            </div>
            <div class="pro-project">
                <ul>
                    <li class="icon-cosmetics">
                        <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                            <path
                                d="M21.585 57.467h20.831a2.228 2.228 0 0 0 2.226-2.226V43.8a2.228 2.228 0 0 0-2.226-2.226h-.5a2.152 2.152 0 0 0 .023-.226V24.607a2.228 2.228 0 0 0-2.226-2.225H38.5V9.489a2.732 2.732 0 0 0-.727-2.228 2.638 2.638 0 0 0-1.936-.727c-1.868 0-4.428 1.4-6.681 3.652-2.177 2.177-3.806 4.936-3.649 6.958v5.239h-1.216a2.228 2.228 0 0 0-2.226 2.225v16.746a2.152 2.152 0 0 0 .023.226h-.5a2.228 2.228 0 0 0-2.229 2.22v11.441a2.228 2.228 0 0 0 2.226 2.226zM30.568 11.6c2.107-2.106 4.207-3.066 5.267-3.066a.809.809 0 0 1 .521.142c.5.5-.223 3.086-2.924 5.789-2.107 2.107-4.207 3.066-5.267 3.066a.811.811 0 0 1-.522-.142c-.504-.506.223-3.089 2.925-5.789zM27.5 19.464a3.3 3.3 0 0 0 .664.066c1.868 0 4.428-1.4 6.681-3.652a17.335 17.335 0 0 0 1.655-1.915v8.418h-9zm-3.437 21.89V24.607a.226.226 0 0 1 .226-.225H39.71a.226.226 0 0 1 .226.225v16.747a.226.226 0 0 1-.226.226H24.291a.226.226 0 0 1-.226-.226zM21.359 43.8a.226.226 0 0 1 .226-.226h20.831a.226.226 0 0 1 .226.226v11.441a.226.226 0 0 1-.226.226H21.585a.226.226 0 0 1-.226-.226z" />
                            <path
                                d="M37.9 28.5a1 1 0 0 0-1 1v7.375a1 1 0 1 0 2 0V29.5a1 1 0 0 0-1-1zM40.4 53.5a1 1 0 0 0 1-1v-5.562a1 1 0 0 0-2 0V52.5a1 1 0 0 0 1 1z" />
                            </svg>
                        <a class="fil" href="https://github.com/darinski93/js-application/tree/main/kingdomCosmetics-project" target="_blank"
                            class="icon-link">Kingdom Cosmetics</a>
                    </li>
                </ul>
            </div>
        </div>
`


export function showProjectView(ctx) {

    ctx.render(projectTemplate());
}