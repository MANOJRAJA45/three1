import React from 'react'
import {useSelector} from 'react-redux'
import Todo from './Todo';

 function TodoList(){
    const {todos}=useSelector(state=>state);
    

    return (
        <div>
            {todos.todos.length ? todos.todos.map(todo=>(
                <Todo key={`todo-${todo.id}`} todo={todo}/>

 )) :<div>No todos yay</div>}
            
        </div>
       
    )
}
export default TodoList

