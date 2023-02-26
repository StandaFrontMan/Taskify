import React from 'react';
import { Todo } from '../models';
import SingleTodo from './SingleTodo';
import './styles.css';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ListOfTodo: React.FC<Props> = ({todos, setTodos}: Props) => {
  return (
    <div className='todos'>
        {todos.map(todo => (
            <SingleTodo
                todo={todo}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
            />
        ))}
    </div>
  ) 
}

export default ListOfTodo;