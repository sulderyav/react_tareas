
import React from "react";

export default function TodoItem(props) {
  const { completeTask, deleteTask, undoTask } = props;

  
  const handleClickX = (defaultTodos) => {
    // Lógica que se ejecutará cuando se haga clic en la "X"
    console.log("Se hizo clic en 'X'");
    deleteTask(props.id);
  };
  
  const handleClickCheck = () => {
    // Lógica que se ejecutará cuando se haga clic en el checkmark (✓)
    console.log("Se hizo clic en el checkmark");
    completeTask(props.id); 
  };

  const handleClickUndo = () => {
    undoTask(props.id);
  }

  return (
    <>
        <li>
              <span className={`notcompleted ${props.notComplete && "active-completed"}`} 
              onClick={handleClickX}> X </span>  
              <p
                style={{
                  textDecoration:props.completed ? "line-through" : "none", 
                }}
              >{props.title}</p>
              {!props.completed ? (
                <span 
                  className={`completed ${props.Complete && "active-completed"}`} 
                  onClick={handleClickCheck}
                > 
                  ✓ 
                </span>
                ) : (
                <span 
                  className={`completed ${props.Complete && "active-completed"}`} 
                  onClick={handleClickUndo}
                > 
                  ø 
                </span>
              )}
        </li>
    </>
  )
  };
  
