import React, { useState } from 'react';
import './ToDoList.css';

function ToDoList() {
  const [todos, setTodos] = useState([]); // 할 일 목록을 저장
  const [newTodo, setNewTodo] = useState(''); // 새 할 일을 입력할 상태 변수

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <div className='container'>
      <h1>To Do List</h1>
      <div className='inputContainer'>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="새 할 일 추가" />
        <button onClick={handleAddTodo}>추가</button>
        <button onClick={() => setTodos([])}>모두 삭제</button>
      </div>
      <ul className='toDoList'>
        {todos.map((todo, index) => (
          <li key={index}>{todo} <button onClick={() => handleDeleteTodo(index)}>X</button></li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;