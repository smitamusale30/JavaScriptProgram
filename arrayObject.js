const toDos=[
    {
        id:1,
        text:"Take out trash",
    },
    {
        id:2,
        text:"Take out trash",
    },
    {
        id:3,
        text:"Take out trash",
    }

]

for(let i=0;i<toDos.length;i++)
{
    console.log(toDos[i]);
    console.log(toDos[i].text);
}

for(let todo of toDos)
{
    console.log(todo);
    console.log(todo.id);
}