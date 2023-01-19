import { render, page } from './lib.js'
import { showCoursesView } from './views/coursesView.js';
import { showEducationView } from './views/educationView.js';
import { showExperienceView } from './views/experience.js';
import { showHomeView } from './views/homeView.js'
import { showLangView } from './views/languagesView.js';
import { updateNav } from './views/navBar.js';
import { showProjectView } from './views/projectsView.js';
import { showSkillsView } from './views/skillsView.js';



const main = document.getElementById('content')


page(decorateCtx);

page('/', showHomeView);
page('/education',showEducationView);
page('/projects', showProjectView);
page('/experience', showExperienceView);
page('/skills', showSkillsView);
page('/languages', showLangView);
page('/courses', showCoursesView);

updateNav()
page.start();


function decorateCtx(ctx, next) {
    ctx.render = renderMain;
    ctx.updateNav = updateNav;

    next()
}

function renderMain(content) {
    render(content, main);
}