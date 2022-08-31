import { createElementWithClass } from "./dom";
import { addProject, getProjects} from "./app";

let selected;

const bar = createElementWithClass('div', 'projects-bar');
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

function createProjectElement(title, index){
    const newProject = createElementWithClass('button', 'project-button');
    newProject.textContent = title;
    newProject.setAttribute('index',index); 
    newProject.addEventListener('click', (e) =>{
        newProject.classList.add('selected');
        if (selected != e.target && selected != undefined){
            selected.classList.remove('selected');
        }
        selected = newProject;
    })
    newProject.click();
    return newProject;
}


function listProject(project){
    projectsList.append(project);
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
    const newProject = createProjectElement(newProjectTextField.value, getProjects().length-1);
    listProject(newProject);
    newProjectTextField.value = '';
    addProject(newProjectTextField.value);

})

function selectProject(select){
    selected = select;
}

bar.append(header);
bar.append(projectsList);
bar.append(newProjectDiv);

export default bar;

export {
    createProjectElement,
    selectProject,
    listProject
}