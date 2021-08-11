import { configureStore } from "@reduxjs/toolkit";
import {slice} from '../components/counterSlice'

export default configureStore({
    reducer:{
        counter: slice.reducer,
    }
})

export const selectCount =(state)=>{
    return state.counter.value;
}