
import { body } from ".";
import { projectsBar } from "./bar";
import './style.css';

const main = document.createElement('main');

function createElementWithClass(tag, elementClass){
    const newElement = document.createElement(tag);
    newElement.classList.add(elementClass);
    return newElement;
}

function build(){
    main.append(projectsBar);
    body.append(main);
}



export {createElementWithClass, build}