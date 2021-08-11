import { createSlice } from "@reduxjs/toolkit";

export const slice =  createSlice({
    name:'counter',
    initialState:{
        value:0,
        todos:[
            {id:1, title:'title 1'},
            {id:2, title:'title 2'},
        ]
    },
    reducers:{
        increment :(state)=>{
            state.value = state.value+1;
        },
        decrement:(state)=>{
            state.value = state.value-1;
        },
        reset:(state)=>{
            state.value =0;
        },
        addTask:(state,action)=>{
            state.todos.push(action.payload); 
        }
    }
});

export const counterActions = slice.actions;

export const selectCount =(state)=>{
    return state.counter.value;
}

export const selectTodos=(state)=>{
    return state.counter.todos;
}