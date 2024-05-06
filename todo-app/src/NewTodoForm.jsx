import { useState } from "react"

export function NewTodoForm ({onSubmit}){
    
    const [newItem, setNewItem] = useState("")

    function handelSubmit(e)
    {
      e.preventDefault()
    
      if(newItem ==="")
        return
      onSubmit(newItem)
      
          setNewItem("")    
    }
    return(
        <form onSubmit={handelSubmit} className="new-item-form">
    <div className="form-row"> 
       <label htmlFor="item">New Item</label>  
      <input value={newItem} placeholder="What is today's task!" onChange={e => setNewItem(e.target.value)} type="text" id="item"/> 
      
    </div> 
       <button className="btn">Add</button> 
   
      </form>
    )
}