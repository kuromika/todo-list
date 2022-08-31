
import { body } from ".";

import bar from "./bar";
import { listProject, selectProject, createProjectElement} from "./bar";

import projectView from "./projectView";
import { setTitle as  setViewTitle } from "./projectView";

import { getProjects } from "./app";


import './style.css';

const main = document.createElement('main');

function createElementWithClass(tag, elementClass){
    const newElement = document.createElement(tag);
    newElement.classList.add(elementClass);
    return newElement;
}

function build(){
    const defaultProjectElement = createProjectElement(getProjects()[0].getTitle(), 0);
    setViewTitle(getProjects()[0]);
    selectProject(defaultProjectElement);
    listProject(defaultProjectElement);
    main.append(bar);
    main.append(projectView);
    body.append(main);
}



export {createElementWithClass, build}