import { createElementWithClass } from "./dom";

const projectsBar = createElementWithClass('div', 'projects-bar');
const header = createElementWithClass('h2', 'bar-header');
header.textContent = 'My Projects';
const projectsList = createElementWithClass('ul', 'projects-list');
const newProjectButton = createElementWithClass('button', 'new-project');
newProjectButton.textContent = '+ New Project';
newProjectButton.setAttribute('type', 'button');

projectsBar.append(header);
projectsBar.append(projectsList);
projectsBar.append(newProjectButton);


export {projectsBar}