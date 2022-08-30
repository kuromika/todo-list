import project from "./project";

const projects = [];
const defaultProject = project('Default',[]);
projects.push(defaultProject);

function getProject(index){
    return projects[index];
}

function addProject(title){
    projects.push(project(title,[]));
}