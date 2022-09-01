
import { body } from ".";

import bar from "./bar";
import {createProjectElement} from "./bar";

import projectView from "./projectView";

import { getProjects, addProject} from "./app";


import './style.css';

const projectViews = [];
const main = document.createElement('main');

// FOR PERSISTENCE, save all project names, then all todos with an additional
//value (their project name), then add all projects, and all todos into
//their respective project, finally call the corresponding functions
//to populate the dom again.

function createElementWithClass(tag, elementClass){
    const newElement = document.createElement(tag);
    newElement.classList.add(elementClass);
    return newElement;
}

function build(){
    main.append(bar);
    body.append(main);
    addProjectDom('Default');
}

function addProjectDom(title){
    const newProjectView = projectView(addProject(title));
    projectViews.push(newProjectView);
    const lastProjectIndex = getProjects().length;
    const projectButton = createProjectElement(title, lastProjectIndex );
    projectButton.addEventListener('click', () => {
        if (main.childElementCount > 1){
            main.getElementsByClassName('project-div')[0].remove();
        }
        main.append(newProjectView.getProjectDiv());
    });
    projectButton.click();
}


export {createElementWithClass, build, addProjectDom}