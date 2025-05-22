import { useState } from "react";
import { useTodo } from "../contextAPI/TodoContext";

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const {updateTodo, deleteTodo, toggle} = useTodo()

    const handleClick = () => {
        if (isTodoEditable) {
          updateTodo(todo.id,{...todo, todo: todoMsg})
          setIsTodoEditable(false)
        } else setIsTodoEditable((prev) => !prev);
      }



  return (
    <div
      className={`flex border border-black/10 rounded-full px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#b0b1b0] text-gray-800" : "bg-gradient-to-r from-[#6fc5dd] to-[#359ab6]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer m-2 mt-2.5 appearance-none w-5 h-3 bg-gray-600 rounded-full checked:bg-gray-100 checked:border-transparent focus:outline-none focus:ring-2"
        // className="appearance-none w-6 h-6 border-2 border-gray-500 rounded-full checked:bg-blue-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
        checked={todo.completed}
        onChange={() => {if(!isTodoEditable) toggle(todo.id)
            else alert("Please save Todo first")
        }}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-full ${
          isTodoEditable ? "border-black/10 px-2 bg-slate-200" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex mt-0 w-8 h-8 rounded-full text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-200 shrink-0 disabled:opacity-50"
        onClick={handleClick}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex mt-0 w-8 h-8 rounded-full text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-200 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
