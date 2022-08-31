
import { body } from ".";
import { projectsBar, listProject, unlistProject } from "./bar";
import { getProjects } from "./app";
import './style.css';

const main = document.createElement('main');
const selectedProject = 0;

function createElementWithClass(tag, elementClass){
    const newElement = document.createElement(tag);
    newElement.classList.add(elementClass);
    return newElement;
}

function build(){
    listProject(getProjects()[0].getTitle(), 0);
    main.append(projectsBar);
    body.append(main);
}



export {createElementWithClass, build}