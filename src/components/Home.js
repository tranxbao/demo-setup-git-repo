import React, {useState,useRef} from 'react'
import _ from 'lodash'
import AddTodo from './AddTodo'
import DisplayTodo from './DisplayTodo'


const Home = () => {
    const [todo,setTodo] = useState('')
    const [todos,setTodos] = useState([
        {id: 'todo1',name: 'watching youtube'},
        {id: 'todo2',name: 'watching neflix'},
        {id: 'todo3',name: 'watching tvb'}
    ])

    const inputRef = useRef()


   const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
    }
  

    const handleSubmit = () => {
        if(!todo){
            alert("Nothing to submit. Please enter todo...");
            return;
        }
        let todoId = randomIntFromInterval (4,9999999);
        let todoItem ={
            id: `todo${todoId}`, name : todo
        }

        setTodos(prev =>[...prev,todoItem])
        setTodo('')
        inputRef.current.focus()
    }

    const handleDelete = (id)=>{
        let currentTodos = _.clone(todos)
        currentTodos = currentTodos.filter(item => item.id !== id)
        setTodos(currentTodos)
    }

    const myInfo = {group: 'din21sp', age : 25}
  return (
    <div>
        <AddTodo
        todo = {todo}
        setTodo = {setTodo}
        inputRef = {inputRef}
        handleSubmit = {handleSubmit}
        />
       
        <DisplayTodo
        childData={todos} // x=y => x<--y
        name={'Bao'}
        myInfo={myInfo}
        handleDeleteInParent={handleDelete}
        />
       
    </div>
  )
}



// class Home extends React.Component{
//     state = {
//         name: '',
//         job : 'student'
//     }
   
//     render (){
//         return(
//         <div>
//             <label>Name:</label>
//             <input type="text" onChange = {(e) => this.setState({name:e.target.value})}/>
//             <br /> <br />
//             Hello {this.state.name}
//         </div>
//         )
//     }
// }

export default Home