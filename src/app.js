import project from "./project";
import toDo from "./toDo";

const projects = [];


function addProject(title){
    projects.push(project(title,[]));
}

function removeProject(index){
    projects.splice(index,1);
}

function createToDo(title, description, dueDate, priority, projectIndex){
    const newToDo = toDo(title, description, dueDate, priority);
    projects[projectIndex].addToDo(newToDo);
}

function eliminateToDo(projectIndex, toDoIndex){
    projects[projectIndex].removeToDo(toDoIndex);
}

function getProjects(){
    return projects;
}

export {
    createToDo, 
    eliminateToDo, 
    addProject,
    removeProject,
    getProjects
};