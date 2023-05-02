// ToDoForm.js

import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import './ToDoList.css'


export default function ToDoForm(props) {
  const [input, setInput] = useState('');

  let inputRef = useRef(null)
  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      return;
    }
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput('');
  };

  return (
    <div >
      <form 
      onSubmit={handleSubmit} 
      className="todo-form">
        <input 
          className="todo-input"
          type="text" 
          placeholder="Add a to do"
          value={input}
          onChange={handleChange}
          ref={inputRef}
        />
        <button className="addTodo">Add</button>
      </form>
    </div>
  );
}