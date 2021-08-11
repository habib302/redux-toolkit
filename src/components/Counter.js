import React,{useState} from 'react'
import {counterActions,selectCount,selectTodos} from './counterSlice'
import {useDispatch, useSelector} from 'react-redux'
//import { selectCount } from '../store/store';

export const Counter = () => {
    const count=useSelector(selectCount);
    const todos=useSelector(selectTodos);
    console.log(todos);
    const dispatch=useDispatch();

    const [task,setTask]=useState({id:3,title:'title 3'});
    return (
    
        <div>
            <h2>This is counter {count} {}</h2>
            <button
                onClick={()=>dispatch(counterActions.increment())}
            >inc</button>
            <br></br><br></br>
            <button
                onClick={()=>dispatch(counterActions.decrement())}
            >dec</button>

            <br></br><br></br>
            <button
                onClick={()=>dispatch(counterActions.reset())}
            >reset</button>

            <br></br><br></br>
            <button
                onClick={()=>dispatch(counterActions.addTask(task))}
            >Add to todos</button>
        </div>
    )
}

//export default Counter
