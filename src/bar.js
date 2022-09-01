import { addProject } from "./app";
import { createElementWithClass, addProjectDom} from "./dom";


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
    newProject.addEventListener('click', () =>{
        const prev = document.getElementsByClassName('selected')[0];
        if (prev != undefined){
            prev.classList.remove('selected');
        }

        newProject.classList.add('selected');
    })
    projectsList.append(newProject);
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
    addProjectDom(addProject(newProjectTextField.value));
    newProjectTextField.value = '';
})

bar.append(header);
bar.append(projectsList);
bar.append(newProjectDiv);

export default bar;

export {
    createProjectElement,
    listProject
}