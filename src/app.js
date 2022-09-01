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

function saveProjects(){
    localStorage.setItem('projects', JSON.stringify(projects));
}

function loadProjects(){
    const JSONprojects = localStorage.getItem('projects');
    if (JSONprojects){
        const oldProjects = JSON.parse(JSONprojects);
        for (let i = 0; i < oldProjects.length; i++){
            projects.push(project(oldProjects[i].title, oldProjects[i].toDos))
        }
    }
}

export {
    addProject,
    removeProject,
    getProjects,
    saveProjects,
    loadProjects
};