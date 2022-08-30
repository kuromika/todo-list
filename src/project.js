const project = (title, toDos) =>{
    const proto = {
        type : 'Project',

        addToDo : function(toDo){
            toDos.push(toDo);
        },

        removeToDo : function(index){
            toDos.splice(index,1);
        },

        getTitle : () => title,
        getToDos : () => toDos,
    }

    return Object.assign(Object.create(proto), {title, toDos});
}

export default project;