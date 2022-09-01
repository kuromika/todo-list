
import { body } from ".";

import bar from "./bar";
import {createProjectElement} from "./bar";

import projectView from "./projectView";

import { getProjects, addProject, saveProjects, loadProjects} from "./app";


import './style.css';

const projectViews = [];
const main = document.createElement('main');


function createElementWithClass(tag, elementClass){
    const newElement = document.createElement(tag);
    newElement.classList.add(elementClass);
    return newElement;
}

function build(){
    loadProjects();
    main.append(bar);
    body.append(main);
    if (getProjects().length == 0){
        addProjectDom(addProject('Default'));
        return;
    }
    loadDomProjects();
}

function addProjectDom(project){
    const newProjectView = projectView(project);
    projectViews.push(newProjectView);
    const lastProjectIndex = getProjects().length;
    const projectButton = createProjectElement(project.getTitle(), lastProjectIndex);
    projectButton.addEventListener('click', () => {
        if (main.childElementCount > 1){
            main.getElementsByClassName('project-div')[0].remove();
        }
        main.append(newProjectView.getProjectDiv());
    });
    projectButton.click();
    saveProjects();
}

function loadDomProjects(){
    const projects = getProjects();
    for (let i = 0; i < projects.length; i++){
        addProjectDom(projects[i]);
    }
}


export {createElementWithClass, build, addProjectDom}