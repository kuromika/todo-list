import { saveProjects } from "./app";
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
        const toDoView = creaetToDoView(newToDo, project.getToDos().length);
        const removeButton = createElementWithClass('button','remove-todo-button');
        removeButton.setAttribute('type','button');
        removeButton.textContent = '-';
        removeButton.addEventListener('click', () => {
            project.removeToDo(project.getToDos().length);
            toDoView.remove();
            saveProjects();
        });
        toDoView.append(removeButton);
        projectDiv.append(toDoView);
        saveProjects();
    })
    projectTitle.textContent = project.getTitle();
    projectDiv.append(projectTitle);
    projectDiv.append(addToDoButton);


    const getProjectDiv = () => projectDiv;

    return {getProjectDiv}
}

export default projectView;
