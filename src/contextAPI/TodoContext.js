import { createContext, useContext } from "react";

const TodoContext = createContext({
    todos:[{}],
    addTodo: () => {},
    updateTodo: () => {},
    deleteTodo: () => {},
    toggle: () => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider