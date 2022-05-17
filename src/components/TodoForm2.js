import React, { useState } from "react";

function TodoForm2(props) {
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch('http://localhost:9292/tasks/superhero')
      .then(r => r.json())
      .then() => setBots()))
  }, []) 


  const handleSubmit = (e) => {
    e.preventDefault()
    props.addTodo(input)
    setInput("")
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form2">
      
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input"
        placeholder="Add a todo"
      />
      <button type="submit" className="todo-button">Add Todo</button>
    </form>
    
  );
}



export default TodoForm2