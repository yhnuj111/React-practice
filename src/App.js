import './App.css';
import React, { useState } from 'react';
import TodoForm from './TodoForm';
function App() {
  const [state, setState] = useState({
    todoItems: [{
      id: 0, value: 'React', done: false, delete: false
    }]
  });
  function addtoDoItem(todoItemValue) {
    const newTodoItem = {
      id: state.todoItems.length,
      value: todoItemValue,
      done: false,
      delete: false
    }
    setState({
      todoItems: [...state.todoItems, newTodoItem]
    })
  }
  function deleteToDoItem(item) {
    item.delete = true;
    setState({
      todoItems: [...state.todoItems, item]
    })
  }

  return (
    <div>
      <h1>My First React App - todolist</h1>
      <div>
        <TodoForm addtoDoItem={addtoDoItem}></TodoForm>
        <ul>
          {
            state.todoItems.map((item) => {
              if (item.delete) return '';
              return (
                <li key={item.id}>
                  <label>{item.value}</label>
                  <button onClick={() => deleteToDoItem(item)}>删除</button>
                </li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
