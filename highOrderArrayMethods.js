const toDos=[
    {
        id:1,
        text:"Take out trash",
    },
    {
        id:2,
        text:"Take out trash2",
    },
    {
        id:3,
        text:"Take out trash3",
    }

]
//forEach: normal loop , map: Allow as to create new array form array, filter: allow as to create new based on the condition

toDos.forEach(function (todo) {
    console.log(todo.text);
});

const todotext= toDos.map(function (todo) {
    return todo.text;
});
console.log(todotext);

const todoId= toDos.filter(function (todo) {
    return todo.id== 3;
});
console.log(todoId);

const todoIds= toDos.filter(function (todo) {
    return todo.id==2;
}).map(function (todo) {
    return todotext;    
});
console.log(todoIds);