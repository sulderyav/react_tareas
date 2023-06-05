import { useState } from 'react'

export default function AddTodo(props) {
  const { addTask } = props;
  const [task, setTask] = useState(null);

  const handleSave = () => {
    addTask(task);
  }

  return (
    <div className="input-container save-container">
        <input 
        type="text" 
        value={task}
        placeholder="Crear tarea"
        onChange={ (ev) =>{
          // setSearch(ev.target.value)
          setTask(ev.target.value)
        }
          }
        />    
       <button 
      type="submit"
      onClick={handleSave}
      > Guardar </button>
    </div>
  ) 
}
