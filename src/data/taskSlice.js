import {createSlice} from "@reduxjs/toolkit";

let initialState = [
    {id: '1', title: 'купить слона', createdAt: 'time'},
    {id: '2', title: 'нарики лохи', createdAt: '121212'},
    {id: '2', title: 'нарики лохи', createdAt: '121212'},


]


export const tasksSlice = createSlice(
    {
        name: 'tasks',
        initialState,
        reducers: {
            addTask(state,action){
                state.push(action.payload)
            }
        }
    }
)
export default tasksSlice.reducer
export const {addTask} = tasksSlice.actions;

