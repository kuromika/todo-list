import { createElementWithClass } from "./dom";
import { creaetToDoView } from "./todoView";

const projectView = (project) => {
    const projectDiv = createElementWithClass('div', 'project-div');
    const projectTitle = createElementWithClass('h2', 'project-title');
    const addToDoButton = createElementWithClass('button', 'new-todo-button');
    addToDoButton.setAttribute('type','input');
    addToDoButton.textContent = "+";
    addToDoButton.addEventListener('click', () =>{
        const newToDo = project.addToDo();
        projectDiv.append(creaetToDoView(newToDo, project.getToDos().length));

    })
    projectTitle.textContent = project.getTitle();
    projectDiv.append(projectTitle);
    projectDiv.append(addToDoButton);


    const getProjectDiv = () => projectDiv;

    return {getProjectDiv}
}

export default projectView;
