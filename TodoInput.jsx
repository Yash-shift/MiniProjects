import React from 'react';
import { useState } from 'react';

function TodoInput(){

    const[inputText,setInputText] = useState("");

    const[listTodo,setListTodo] = useState([]);


    return (

        <div className="input-container">

            <input type="text" placeholder="Add a new task..."  onChange={e=>{
                setInputText(e.target.value)
            }}/>

            <button className='btn-red'>Add Task</button>
            

        </div>
    )
}

export default TodoInput;