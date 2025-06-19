import React, { useState, useReducer } from 'react';
import './ToDoList.css';
import Button from './style/Button';
import VStack from './style/VStack';
import HStack from './style/HStack';
import Input from './style/Input';

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'DELETE_TODO':
      return state.filter((_, index) => index !== action.payload);
    case 'CLEAR_TODOS':
      return [];
    default:
      throw new Error();
  }
}

function ToDoList() {
  // const [todos, setTodos] = useState([]); // 할 일 목록을 저장
  const [newTodo, setNewTodo] = useState(''); // 새 할 일을 입력할 상태 변수
  const [todos, dispatch] = useReducer(reducer, []); // useReducer로 할 일 목록 관리

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;
    // setTodos([...todos, newTodo]);
    dispatch({ type: 'ADD_TODO', payload: newTodo }); // useReducer로 새 할 일 추가
    setNewTodo('');
  };

  const handleDeleteTodo = (index) => {
    // setTodos(todos.filter((_, i) => i !== index));
    dispatch({ type: 'DELETE_TODO', payload: index }); // useReducer로 할 일 삭제
  };

  return (
    <VStack acenter="true">
      <h1>To Do List</h1>
      <HStack gap="10px">
        <Input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="새 할 일 추가" />
        <Button primary="true" onClick={handleAddTodo}>추가</Button>
        {/* <Button color="green" background="pink" onClick={() => setTodos([])}>모두 삭제</Button> */}
        <Button color="#dc3545" onClick={() => dispatch({ type: 'CLEAR_TODOS' })}>모두 삭제</Button>
      </HStack>
      <ul className="toDoList">
        {todos.map((todo, index) => (
          <li key={index}>{todo}{' '}
            <Button color="#dc3545" onClick={() => handleDeleteTodo(index)}>X</Button>
          </li>
        ))}
      </ul>
    </VStack>
  );
}

export default ToDoList;
