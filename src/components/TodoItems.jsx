import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center justify-between bg-gray-50 shadow-sm px-5 py-3 rounded-xl hover:bg-gray-100 transition">
      <div
        onClick={() => toggle(id)}
        className="flex items-center gap-3 cursor-pointer"
      >
        <img
          src={isComplete ? tick : not_tick}
          alt="status"
          className="w-7"
        />
        <p
          className={`text-lg font-medium ${
            isComplete ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => deleteTodo(id)}
        src={delete_icon}
        alt="delete"
        className="w-5 cursor-pointer hover:scale-110 transition"
      />
    </div>
  )
}

export default TodoItems
