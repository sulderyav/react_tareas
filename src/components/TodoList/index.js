

export default function TodoList(props) {
  return (
   <>
    <ul className="items-container"> 
        {props.children}
    </ul>
   
   </>
  )
}
