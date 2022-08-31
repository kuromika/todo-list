import { createElementWithClass } from "./dom";


function creaetToDoView(todo, index){
    const todoDiv = createElementWithClass('div', 'todo-div');
    todoDiv.setAttribute('toddo-index', index);
    const checkbox = createElementWithClass('input', 'todo-checkbox');
    const textfield = createElementWithClass('input','todo-textfield');
    const date = createElementWithClass('input','todo-date');
    const dateObject = new Date();
    const dateAsString = `${dateObject.getFullYear()}-${dateObject.getMonth()}-${dateObject.getDate()}`;
    date.value(dateAsString);
    todo.setDate(dateAsString);
    const select = createSelectPriority(todo);
 
    checkbox.addEventListener('change', () => {
        todo.setStatus();
        todoDiv.classList.toggle('completed-todo');
    });

    textfield.addEventListener('change', ()=> {
        todo.setTitle(textfield.value);
    });

    date.addEventListener('change', () => {
        todo.setDueDate(date.value);
    });

   
    todoDiv.append(checkbox);
    todoDiv.append(textfield);
    todoDiv.append(date);
    todoDiv.append(select);

    return todoDiv;

}

function createSelectPriority(todo){
    const select = createElementWithClass('select','todo-select');
    select.append(createOptionElement('-- select priority --', ''));
    select.append(createOptionElement('low', 'Low'));
    select.append(createOptionElement('medium', 'Medium'));
    select.append(createOptionElement('high', 'High'));

    select.addEventListener('change', ()=>{
        todo.setPriority(select.value);
    });

    return select;
    
}

function createOptionElement(text, value){
    const option = document.createElement('option');
    option.value = value;
    option.textContent = text;
    return option;
}

export {creaetToDoView};