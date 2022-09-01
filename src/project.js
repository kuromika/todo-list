import toDo from "./toDo";

const project = (title, toDos) =>{
    const proto = {
        type : 'Project',

        addToDo : function(){
            const newToDo = toDo('','','','','');
            toDos.push(newToDo);
            return newToDo;
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