import React, { useState } from 'react'
import InputField from '../components/InputField';
import TodoList from '../components/TodoList';
import { Todo } from '../models';

const Task = () => {

  const [ todo, setTodo ] = useState<string>("")
  const [ todos, setTodos ] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    if(todo){
      setTodos([...todos, { id: Date.now(), todo, isCompleted: false}])
      setTodo("")
    }
  }

  return (
    <div className="app">
      <h2>Taskify</h2>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default Task