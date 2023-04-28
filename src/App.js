import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import './App.css';
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import TodoActions from "./components/TodoActions/TodoActions";

function App() {

  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      id: uuidv4(),
      text: text,
      isCompleted: false
    }

    setTodos([...todos, newTodo]);
  }

  const delTodoHandler = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const toggleTodoHandler = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : {...todo}))
  }

  const resetTodosHandler = () => {
    setTodos([]);
  }

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter(todo => !todo.isCompleted));
  }

  const completedTodoCount = todos.filter(todo => todo.isCompleted).length;

  return (
    <div className="App">
      <h1>
        Todo App
      </h1>

      <TodoForm addTodo={addTodoHandler}/>
      {!!todos.length && <TodoActions
        resetTodos={resetTodosHandler}
        deleteCompletedTodos={deleteCompletedTodosHandler}
        completedTodoExist={!!completedTodoCount}
      />}
      <TodoList
        todos={todos}
        delTodo={delTodoHandler}
        toggleTodo={toggleTodoHandler}
      />

      {!!completedTodoCount && <h2>{`You have completed ${completedTodoCount} todos`}</h2>}
    </div>
  );

}

export default App;
