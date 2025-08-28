import React, { useRef, useState, useEffect } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {
  const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
  
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggle = (id) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-gradient-to-br from-gray-600 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-lg p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <img className="w-10" src={todo_icon} alt="todo icon" />
          <h1 className="text-4xl font-bold text-indigo-600">My To-Do</h1>
        </div>

        {/* Input box */}
        <div className="flex items-center bg-gray-100 rounded-full shadow-inner mb-6">
          <input
            ref={inputRef}
            className="bg-transparent border-0 outline-none flex-1 h-14 px-6 placeholder-gray-500 text-gray-700"
            type="text"
            placeholder="✍️ Add your task..."
          />
          <button
            onClick={add}
            className="bg-gradient-to-r from-gray-500 to-purple-500 px-6 h-14 rounded-full text-white font-semibold hover:opacity-90 transition"
          >
            Add +
          </button>
        </div>

        {/* Todo List */}
        <div className="space-y-4">
          {todoList.map((item) => (
            <TodoItems
              key={item.id}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
