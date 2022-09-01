import project from "./project";
import toDo from "./toDo";

const projects = [];


function addProject(title){
    const newProject = project(title,[])
    projects.push(newProject);
    return newProject;
}

function removeProject(index){
    projects.splice(index,1);
}


function getProjects(){
    return projects;
}

export {
    addProject,
    removeProject,
    getProjects
};