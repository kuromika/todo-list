import { createElementWithClass } from "./dom";
import { creaetToDoView } from "./todoView";

const projectView = createElementWithClass('div', 'project-view');
const projectTitle = createElementWithClass('h2', 'project-title');
const toDosDiv = createElementWithClass('div', 'todos-div');

const newToDoButton = createElementWithClass('button', 'new-todo-button');
newToDoButton.setAttribute('type','button');
newToDoButton.textContent = "+";
newToDoButton.addEventListener('click', () => {
    const newTodoView = creaetToDoView();
    toDosDiv.append(newTodoView);
});


//create the todo element in the project and add the listeners directly into it
//use factories for the todos viewer and the project viewer?
//probably create one more module to link the projectview with the todos instead of mixing them.
//recap losely coupled modules.


projectView.append(projectTitle);
projectView.append(toDosDiv);
projectView.append(newToDoButton);

function setTitle(project){
    projectTitle.textContent = project.getTitle();
}

function loadToDos(project){ //complete later when doing persistence

    for(let todo in project.getTodos()){

    }

}


export default projectView;
export {setTitle};