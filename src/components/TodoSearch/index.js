import React from "react"

export default function TodoSearch({search, setSearch}) {
// const [search, setSearch] = React.useState("")

console.log(search)
  
  return (
    <div className="input-container"> 
        <h3>Buscar</h3>
        <input 
        type="text" 
        value={search}
        placeholder="Busque una tarea"
        onChange={ (ev) =>{
          setSearch(ev.target.value)
        }
          }
        />    
    </div>
  )
}
