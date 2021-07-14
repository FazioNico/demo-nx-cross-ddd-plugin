import { Todo } from '@demo-nx-cross-ddd-plugin/todo-domain';
import { useEffect, useState } from 'react';
import { TodoFeatureList } from '@demo-nx-cross-ddd-plugin/todo-feature-list'
import './platform-react-todo-feature-list.module.css';
import { todoService } from './services/todo.service';
import styles from './platform-react-todo-feature-list.module.css';

/* eslint-disable-next-line */
export interface PlatformReactTodoFeatureListProps {
  apiUrl: string;
}

export function PlatformReactTodoFeatureList(
  props: PlatformReactTodoFeatureListProps
) {
  // create serivce instance
  const service = todoService(props.apiUrl);
  // define initial state
  const [todoList, setTodoList] = useState<Todo[]>([]);
  // call service using TodoFeatureList with the service instance (IoD)
  const todoListFeature = new TodoFeatureList(service)
  // useEffect to trigger the service call
  useEffect(() => {
    todoListFeature
      .loadTodo()
      .then(
        () => {
          setTodoList(todoListFeature?.todos||[]);
        },
        // Remarque : il faut gérer les erreurs ici plutôt que dans
        // un bloc catch() afin que nous n’avalions pas les exceptions
        // dues à de véritables bugs dans les composants.
        (error) => {
          console.error(error);
        }
      )
  }, []);
  
  // return the component DOM
  return (
    <div className={styles.todosList}>
      <ul>
        {todoList?.map((todo, index) => (
          <li key={index} className={styles.todoItem}>
            <input type="checkbox"/> 
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlatformReactTodoFeatureList;
