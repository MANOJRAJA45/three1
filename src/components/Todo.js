
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../App.css'
import {toggleTodo} from '../redux/actions'



const Todo=({todo})=> {
    const dispatch=useDispatch();
    const [checked,isChecked]=useState(false);
    const handleCheked=()=>dispatch(toggleTodo(todo.id))

  return (
    <div>
       <div className='checkbox'>
        <input type="checkbox" onChange={handleCheked} class="strikethrough" isChecked={checked}/>
        <label  class="strikeThis" as={todo.completed && "del"}>{todo.content}</label>
       </div>
    </div>
  )
  }
export default Todo

