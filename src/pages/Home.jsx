import { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";
import { TodoProvider } from "../contextAPI/TodoContext";
import { useAuth0 } from "@auth0/auth0-react";
import myLogo from "../assets/ContextDo_Black_Logo.png";

function Home() {
  const [todos, setTodos] = useState([]);
  const { logout } = useAuth0();

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleLogout = () => {
    setTodos([]);
    localStorage.removeItem("todos");
    logout({
      logoutParams: {
        returnTo:
          import.meta.env.MODE === "development"
            ? "http://localhost:5173/"
            : "https://sandipnandy1.github.io/TodoApp/",
      },
    });
  };

  const addTodo = (todo) => {
    setTodos((prev) => [todo, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggle = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggle }}>
      <div className="bg-[#1e0d0b] flex flex-row justify-between items-center">
        <div className=" p-3">
          <img src={myLogo} alt="My Icon" className="w-20 h-20" />
        </div>
        <div className="bg-[#1e0d0b] p-3">
          <button
            onClick={handleLogout}
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:bg-red-500 transition-all text-white font-semibold py-1 pb-2 px-6 rounded-full m-2 mr-6"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="bg-[#1e0d0b] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2 bg-gradient-to-r from-slate-400 to-slate-50 bg-clip-text text-transparent">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default Home;
