
const toDo = (title, description, dueDate, priority) => {
    const proto = {
        type: 'ToDo',

        getTitle : () => title,
        getDescription: () => description,
        getDueDate: () => dueDate,
        getPriority: () => priority,

        setDueDate: (newDate) => dueDate = newDate,
        

    }
    return Object.assign(Object.create(proto), {title, description, dueDate, priority});
}