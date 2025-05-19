import { useState } from "react";
import { useTodo } from "../contextAPI/TodoContext";

function TodoForm() {
    const [todo, setTodo] = useState("")

    const { addTodo } = useTodo()


    const handleClick = (e) => {
        e.preventDefault()

        if(!todo) return;
        addTodo({ id: Date.now(), todo: todo, completed: false})
        setTodo("")
        
    }
    

    return (
        <form className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-full px-3 outline-none duration-150 bg-white/20 py-1.5"
                onChange={e => setTodo(e.target.value)}
                value ={todo}
            />
            <button onClick={handleClick} type="submit" className="rounded-r-full px-3 py-1 bg-gradient-to-tr from-[#6fc5dd] to-[#359ab6] text-white font-semibold shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

