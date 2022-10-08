

const AddTodo = (props) => {
    const {todo,setTodo,inputRef,handleSubmit} = props;
  return (
    <div>
        <input value = {todo} type="text" placeholder='enter todo...' ref={inputRef}
        onChange = {(e) => setTodo(e.target.value)}
        />
        <button onClick={()=>{
            handleSubmit()
            }}>Submit
        </button>
        <br /><br />
    </div>
  )
}

export default AddTodo