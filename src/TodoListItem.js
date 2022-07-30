
function TodoListItem(props) {
    function deleteToDoItem() {
        props.deleteTodoItem(props.item)
    }
    return (
        <li key={props.item.id}>
            <label>{props.item.value}</label>
            <button onClick={() => deleteToDoItem()}>删除</button>
        </li>
    );
}

export default TodoListItem;