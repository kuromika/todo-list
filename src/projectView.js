import { createElementWithClass } from "./dom";

const projectView = createElementWithClass('div', 'project-view');
const projectTitle = createElementWithClass('h2', 'project-title');
const toDosDiv = createElementWithClass('div', 'todos-div');

projectView.append(projectTitle);
projectView.append(toDosDiv);

function setTitle(project){
    projectTitle.textContent = project.getTitle();
}

function loadToDos(project){ //complete later when doing persistence

    for(let todo in project.getTodos()){

    }

}

function addToDo(project){


}

export default projectView;
export {setTitle};