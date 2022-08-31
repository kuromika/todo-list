import { createElementWithClass } from "./dom";
import { addProject, getProjects, removeProject} from "./app";

const projectsBar = createElementWithClass('div', 'projects-bar');
const header = createElementWithClass('h2', 'bar-header');
header.textContent = 'My Projects';
const projectsList = createElementWithClass('ul', 'projects-list');

const newProjectDiv = createElementWithClass('div', 'new-project-div');
const newProjectTextField = createElementWithClass('input', 'new-project-textfield');
newProjectTextField.setAttribute('type','textfield');
newProjectTextField.setAttribute('placeholder','Name');
const newProjectButton = createElementWithClass('button', 'new-project-button');
newProjectButton.textContent = '+ New Project';
newProjectButton.setAttribute('type', 'button');
newProjectDiv.append(newProjectTextField);
newProjectDiv.append(newProjectButton);

function listProject(title, index){
    const newProject = createElementWithClass('button', 'project-button');
    newProject.textContent = title;
    newProject.setAttribute('index',index); 
    projectsList.append(newProject);
}

function unlistProject(index){
    projectsList.getElementsByClassName('project-button')[index].remove();
    removeProject(index);
}

newProjectTextField.addEventListener('keypress', (e)=>{
    if (e.code == 'Enter'){
        newProjectButton.click();
    }
})

newProjectButton.addEventListener('click', () => {
    if (newProjectTextField.value == ''){
        return;
    }
    listProject(newProjectTextField.value, getProjects().length-1);
    addProject(newProjectTextField.value);

})

projectsBar.append(header);
projectsBar.append(projectsList);
projectsBar.append(newProjectDiv);

export {
    projectsBar,
    listProject,
    unlistProject
}