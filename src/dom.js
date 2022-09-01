
import { body } from ".";

import bar from "./bar";
import {createProjectElement} from "./bar";

import projectView from "./projectView";

import { getProjects, addProject} from "./app";


import './style.css';

const projectViews = [];
const main = document.createElement('main');

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
    const lastProjectIndex = getProjects().length;
    createProjectElement(title, lastProjectIndex );
    main.append(newProjectView.getProjectDiv());
}


export {createElementWithClass, build, addProjectDom}