import React from 'react';

function TodoForm(props) {
    let todoItemValue = React.createRef();
    function addtoDoItem() {
        props.addtoDoItem(todoItemValue.current.value);
    }
    return (
        <div>
            <input type="text" ref={todoItemValue} placeholder="add something..." />
            <button type="submit" onClick={addtoDoItem}>添加</button>
        </div>
    );
}


export default TodoForm;