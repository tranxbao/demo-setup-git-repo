

const DisplayTodo = (props) => {
    const handleDeleteFromChild = (id)=>{
        props.handleDeleteInParent(id)
}
const todos = props.childData
  return (
    <div>
         <div>-----List todo-----</div>
         {todos.map((item,index)=>{
           return(
            <div key= {item.id} onClick={()=> handleDeleteFromChild(item.id)}>{item.name} &times;</div>
           )
        })} 
    </div>
  )
}

export default DisplayTodo