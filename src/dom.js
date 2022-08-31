
import { body } from ".";

import bar from "./bar";
import { listProject, selectProject, createProjectElement} from "./bar";

import projectView from "./projectView";
import { setTitle as  setViewTitle } from "./projectView";

import { getProjects, addProject} from "./app";


import './style.css';

const main = document.createElement('main');

function createElementWithClass(tag, elementClass){
    const newElement = document.createElement(tag);
    newElement.classList.add(elementClass);
    return newElement;
}

function build(){
    addProjectDom('Default');
    setViewTitle(getProjects()[0]);
    main.append(bar);
    main.append(projectView);
    body.append(main);
}

function addProjectDom(title){
    createProjectElement(title, getProjects().length-1);
    addProject(title);
}



export {createElementWithClass, build, addProjectDom}