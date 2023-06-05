
// import "./TodoCounter.css"
import "./TodoCounter.css"
export default function TodoCounter(props) {
  const {todosP, totalT} = props 
  


  // const styleTodoCounter = {
  //   color: "red",
  //   backgroundColor:"#000000"
  // }
  return (
    <>
        {/* <h2 style={{color:"#fff", backgroundColor: "#000000"}}> Tienes 4 tareas pendientes de 4</h2> */}
        {/* /* <h2 style={styleTodoCounter}> Tienes 4 tareas pendientes de 4</h2> */}
        
        <div className="title-container">
            <h2 className="title"> Tienes {todosP} tareas pendientes de {totalT}</h2>
        </div>
    </>
  )
}
