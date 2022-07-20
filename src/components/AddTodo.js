import React, { useState } from 'react'
import '../App.css'
import { addTodo } from '../redux/actions';

import {useDispatch} from 'react-redux'

function AddTodo() {
    const dispatch=useDispatch();
    const[value,setValue]=useState('')
    const handleSubmit=e=>{
        e.preventDefault();
        dispatch(addTodo(value))
        setValue('');
    }
    const handleInput=e=>{
        setValue(e.target.value)

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text'onChange={handleInput}  value={value}placeholder='add any todo'></input>
            <button type='submit' disabled={!value}>AddTodo</button>
        </form>
        
    </div>
  ) 
}

export default AddTodo