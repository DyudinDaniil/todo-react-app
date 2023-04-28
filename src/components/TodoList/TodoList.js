import Todo from "../Todo/Todo";

function TodoList({ todos, delTodo, toggleTodo }) {
  return (
    <div>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo) => <Todo key={todo.id} todo={todo} delTodo={delTodo} toggleTodo={toggleTodo}/>)}
    </div>
  );
}

export default TodoList;