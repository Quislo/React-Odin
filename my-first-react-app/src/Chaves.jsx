const todos = [
    {task: "mow the yard", id: crypto.randomUUID() },
    {task: "Work on Odin Projects", id: crypto.randomUUID() },
    {task: "feed the cat", id: crypto.randomUUID() },

];

function TodoList(){
    return(
        <ul>
            {todos.map((todos) => (
                <li key={todos.id}>{todos.task}</li>
            ))}
        </ul>
    );
}

export default TodoList;