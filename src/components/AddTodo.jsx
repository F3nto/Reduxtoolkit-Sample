import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlide";
import Todos from '../components/Todos'

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
  <>  
    <form onSubmit={addTodoHandler} className="flex mt-7 justify-center items-center">
      
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 
        focus:ring-2 focus:ring-indigo-900 text-base outline-none
        text-gray-100 py-1 px-3 leading-8 transition-colors
        duration-200 ease-in-out"
        placeholder="Enter todo tas k..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="px-4">
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0
        py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded
        text-lg"
      >
        <p className="font-body font-semibold">Add To do</p>
      </button>
      </div>
      
    </form>
    <Todos />

  </>
  );
};

export default AddTodo;
