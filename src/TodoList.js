import TodoListItem from "./TodoListItem";

function TodoList(props) {
    function deleteTodoItem(item) {
        props.deleteToDoItem(item);
    }
    return (
        <ul>
        {
            props.todoItems.map((item) => {
                if (item.delete) return '';
                return (
                    <TodoListItem key={item.id} item={item} deleteTodoItem={deleteTodoItem}></TodoListItem>
                );
            })
        }
        </ul>
    );
}

export default TodoList;