
import { body } from ".";

import { 
    projectsBar,
    listProject, 
    selectProject, 
    createProjectElement} from "./bar";

import { getProjects } from "./app";
import './style.css';

const main = document.createElement('main');

function createElementWithClass(tag, elementClass){
    const newElement = document.createElement(tag);
    newElement.classList.add(elementClass);
    return newElement;
}

function build(){
    const defaultProject = createProjectElement(getProjects()[0].getTitle(), 0);
    selectProject(defaultProject);
    listProject(defaultProject);
    main.append(projectsBar);
    body.append(main);
}



export {createElementWithClass, build}