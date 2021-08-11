import React,{useState} from 'react'
import {counterActions} from './counterSlice'
import {useDispatch, useSelector} from 'react-redux'
import { selectCount } from '../store/store';

export const Counter = () => {
    const count=useSelector(selectCount);
    const dispatch=useDispatch()
    return (
        <div>
            <h2>This is counte{count}</h2>
            <button
                onClick={()=>dispatch(counterActions.increment())}
            >inc</button>
        </div>
    )
}

//export default Counter
