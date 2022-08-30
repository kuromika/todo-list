import project from "./project";
import toDo from "./toDo";

const projects = [];
const defaultProject = project('Default',[]);
projects.push(defaultProject);


function addProject(title){
    projects.push(project(title,[]));
}

function createToDo(title, description, dueDate, priority, projectIndex){
    const newToDo = toDo(title, description, dueDate, priority);
    projects[projectIndex].addToDo(newToDo);
}

function eliminateToDo(projectIndex, toDoIndex){
    projects[projectIndex].removeToDo(toDoIndex);
}

export {
    createToDo, 
    eliminateToDo, 
    addProject
};