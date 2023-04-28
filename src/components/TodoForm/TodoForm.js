import {useState} from "react";
import styles from './TodoForm.module.css';

import Button from "../Button/Button";

function TodoForm({ addTodo }) {

  const [text, setText] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  }

  return (
    <div className={styles.form__container}>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Enter new todo"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <Button type="submit" title="submit">submit</Button>
      </form>
    </div>
  );

}

export default TodoForm;