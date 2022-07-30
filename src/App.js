import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
function App() {
  const [state, setState] = useState({
    todoItems: []
  });
  useEffect(() => {
    axios.get('http://localhost:8000/items')
      .then(function (res) {
        setState({
          todoItems: [...res.data]
        })
      })
  }, [state]);
  function addtoDoItem(todoItemValue) {
    const newTodoItem = {
      id: state.todoItems.length,
      value: todoItemValue,
      done: false,
      delete: false
    }
    axios.post('http://localhost:8000/items-add', {
      todoItems: newTodoItem
    })
    .then(function (res) {
      setState({
        todoItems: [...res.data]
      })
    })
  }
  function deleteToDoItem(item) {
    axios.delete('http://localhost:8000/items-delete', {
      data: {
        id: item.id
      }
    })
    .then(function (res) {
      setState({
        todoItems: [...res.data]
      })
    })
  }

  return (
    <div>
      <h1>My First React App - todolist</h1>
      <div>
        <TodoForm addtoDoItem={addtoDoItem}></TodoForm>
        <TodoList todoItems={state.todoItems} deleteToDoItem={deleteToDoItem}></TodoList>
      </div>
    </div>
  );
}

export default App;
