import { configureStore } from "@reduxjs/toolkit";
import {slice} from '../components/counterSlice'

export default configureStore({
    reducer:{
        counter: slice.reducer,
    }
})
