
const toDo = (title, description, dueDate, priority, status) => {
    const proto = {
        type: 'ToDo',

        getTitle : () => title,
        getDescription: () => description,
        getDueDate: () => dueDate,
        getPriority: () => priority,
        getStatus: () => status,

        setDueDate: (newDate) => dueDate = newDate,
        setStatus: () => status = !status,


    }
    return Object.assign(Object.create(proto), {
        title, description, dueDate, priority, status});
}

export default toDo;