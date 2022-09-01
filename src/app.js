import project from "./project";
import toDo from "./toDo";

let projects = [];


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

function saveProjects(){
    localStorage.setItem('projects', JSON.stringify(projects));
}

function loadProjects(){
    const JSONprojects = localStorage.getItem('projects');
    if (JSONprojects){
        const oldProjects = JSON.parse(JSONprojects);
        projects = oldProjects;
    }
}

export {
    addProject,
    removeProject,
    getProjects,
    saveProjects,
    loadProjects
};