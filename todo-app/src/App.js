import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import "./style.css"
import { TodoList } from "./TodoList"

export default function App()
 {
  const [todos, settodos] =useState(()=>{
    const localValue =localStorage.getItem("ITEMS")
    if(localValue == null)
      return []
    return JSON.parse(localValue)
  })

  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])
  
 
  function addTodo(title)
   {
     settodos((currentTodos)=>{
      return[
     ...currentTodos,
     { id: crypto.randomUUID(),title,completed: false },
    ]
  })
  }

  function toggleTodo(id, completed)
  {
    settodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id===id){
          return { ...todo, completed}
        }

        return todo

      })
    })
  }

    function deleteTodo(id){
      settodos(currentTodos => {
        return currentTodos.filter(todo => todo.id !== id)
      })
    
  }
  
   return (
    
    <div className="centered">
      <NewTodoForm onSubmit ={addTodo}/>
      <h1 className="header">Hi There,your</h1>
      <h2 className="header">ToDo List</h2>
      <h3 className="header"> </h3>
      
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      </div>
      
      )

 }













