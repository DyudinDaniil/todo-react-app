import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import styles from './TodoActions.module.css';

import Button from "../Button/Button";

function TodoActions({ resetTodos, deleteCompletedTodos, completedTodoExist }) {
  return (
    <div className={styles.todoActionsContainer}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>

      <Button title="Clear completed todos"
              onClick={deleteCompletedTodos}
              disabled={!completedTodoExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}

export default TodoActions;