import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.css';

function Todo({ todo, delTodo, toggleTodo }) {
  return (
    <div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`}>
      <RiTodoFill className={styles.todoIcon}/>
      <p className={styles.todoText}>
        {todo.text}
      </p>
      <RiDeleteBin2Line className={styles.deleteIcon} onClick={() => delTodo(todo.id)}/>
      <FaCheck className={styles.checkIcon} onClick={() => toggleTodo(todo.id)}/>
    </div>
  );
}

export default Todo;