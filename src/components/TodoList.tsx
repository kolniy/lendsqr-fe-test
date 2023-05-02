import React from 'react'
import { Todo } from "../models"

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div>{
            todos.map((todo) => <p>{todo.todo}</p>)
        }</div>
  )
}

export default TodoList