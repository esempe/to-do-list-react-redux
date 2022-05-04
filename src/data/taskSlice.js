import {createSlice, nanoid} from "@reduxjs/toolkit";

let initialState = [
    {
        id: nanoid(),
        title: 'texxxssf',
        createdAt: 'xz'
    },
    {
        id: nanoid(),
        title: 'taskText',
        createdAt: 'xz'
    }
]


export const tasksSlice = createSlice(
    {
        name: 'tasks',
        initialState,
        reducers: {
            addTask(state, action) {
                state.push(action.payload)
            }
        }
    }
)
export default tasksSlice.reducer
export const {addTask} = tasksSlice.actions;

