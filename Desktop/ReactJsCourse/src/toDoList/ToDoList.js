import React, { useState } from "react";
import ToDoForm from './ToDoForm'
import Todo from "./Todo";
import './ToDoList.css'
export default function ToDoList() {
  const [todos, setTodos] = useState([])

  const addToDo = (todo) => {
    if(!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    let newTodos = [todo, ...todos];
    setTodos(newTodos);
    
  }

  let completeTodo = id => {
    let updatedTodos = todos.map(todo => {
        if(todo.id === id) {
            todo.isComplete = !todo.isComplete
        }
        return todo;
    })
    setTodos(updatedTodos)
   

  }

  let removeToDo = (id) => {
    let removeArr =[...todos].filter(todo => todo.id !== id )
    setTodos(removeArr)
}

let updateTodo = (todoId, newValue) => {
    console.log('todoId:', todoId);
    console.log("newValue:", newValue.text);
    if (!newValue || !newValue.text || /^\s*$/.test(newValue.text)) {
        return;
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
};

  return (
    <div className="todo-app">
      <h1> What's the plan for Today</h1>
      <ToDoForm onSubmit={addToDo} />
      <Todo
       todos={todos} 
      completeTodo={completeTodo}
      removeToDo={removeToDo}
      updateToDo={updateTodo}
      />
    </div>
  )
}