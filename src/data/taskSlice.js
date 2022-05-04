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
            },
            editTask(state, action){
                const {id,title} = action.payload;
                const existingTag = state.find(task => task.id === id)
                if (existingTag){
                    existingTag.title = title;
                }
            }
        }
    }
)
export default tasksSlice.reducer
export const {addTask,editTask} = tasksSlice.actions;

