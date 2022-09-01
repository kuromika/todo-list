import { createElementWithClass } from "./dom";

function creaetToDoView(todo, index) {
    const todoDiv = createElementWithClass('div', 'todo-div');
    todoDiv.setAttribute('toddo-index', index);
    const checkbox = createElementWithClass('input', 'todo-checkbox');
    checkbox.setAttribute('type','checkbox');
    if (todo.getStatus()){
        checkbox.checked = true;
    }
    const textfield = createElementWithClass('input','todo-textfield');
    textfield.setAttribute('type','textfield');
    textfield.value = todo.getTitle();
    const date = createElementWithClass('input','todo-date');
    date.setAttribute('type', 'date');
    date.value = todo.getDueDate();
    const select = createSelectPriority(todo,todoDiv);
 
    checkbox.addEventListener('change', () => {
        todo.setStatus();
        const status = todo.getStatus();
        date.disabled = status;
        textfield.disabled = status;
        select.disabled = status;
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

function createSelectPriority(todo, todoDiv){
    const select = createElementWithClass('select','todo-select');
    select.append(createOptionElement('select priority', 'select priority'));
    select.append(createOptionElement('Low', 'low'));
    select.append(createOptionElement('Medium', 'medium'));
    select.append(createOptionElement('High', 'high'));
    select.value = todo.getPriority();

    select.addEventListener('change', ()=>{
        // could be improved
        const oldClass = `${todo.getPriority()}-todo`;
        if (oldClass != '') {
            todoDiv.classList.remove(oldClass);
        }
        todo.setPriority(select.value);
        const newClass = `${todo.getPriority()}-todo`;
        todoDiv.classList.add(newClass);
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