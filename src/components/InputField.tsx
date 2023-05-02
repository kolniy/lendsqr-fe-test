import React, { useRef } from 'react'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {

    const inputRef = useRef<HTMLInputElement>(null)

  return <form onSubmit={(e) => handleAdd(e)}>
    <input ref={inputRef} type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder='enter a task' />
    <button>Go</button>
  </form>
} 

export default InputField