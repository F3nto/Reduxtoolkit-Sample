import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlide";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch()

  return (
    <>
      <div className="flex justify-center items-center mt-5">
        <h2 className="font-body font-semibold text-4xl">Todos</h2>
      </div>
      {todos.map((data) => (
        <ul className="list-none">
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800
        px-4 py-2 rounded-lg mx-10"
            key={data.id}
          >
            <div className="text-white">{data.text}</div>

            <button 
            onClick={() => dispatch(removeTodo(data.id))}
              className="text-white bg-red-500 border-0
          py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 6h18M12 6l-3 3m3-3l3 3M5 6L5 21a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2L19 6" />
              </svg>
            </button>
          </li>
        </ul>
      ))}
    </>
  );
};

export default Todos;
