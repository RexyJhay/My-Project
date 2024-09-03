import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodoItem = {
      id: Date.now(),
      text: newTodo,
      timestamp: new Date().toLocaleTimeString(),
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  return (
    <div className=' container mx-auto p-4 pt-6 md:p-6 lg:p-12'>
      <h1 className=' text-3xl font-bold mb-4'>To-Do App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          Value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new to-do"
          className=' w-full p-2 pl-10 text-sm text-gray-700'
        />
        <button
          type="submit"
          className=' bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded'
        >
          Add
        </button>
      </form>
      <ul className=' list-none mb-0'>
        {todos.map((todo) => (
          <li key={todo.id} className=' flex items-center mb-4'>
            <span className=' text-gray-600'>{todo.text}</span>
            <span className=' text-gray-400 ml-2'>{todo.timestamp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
