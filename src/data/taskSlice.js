import {createSlice} from "@reduxjs/toolkit";

export const tasksSlice = createSlice(
    {
        name: 'tasks',
        initialState: {
            tasks: [{
                id: 'string',
                title: 'string',
                createdAt: 'number(date)'
            }],
            titleTyping: '',
        },
        reducers:{
            addTask: (title) =>{
                let newTask = {
                    id: '1',
                    title: state.titleTyping,
                    createdAt: '15:00хз'
                }
                state.tasks.push(newTask)
            }
        }
    }
)
export const {addTask} = tasksSlice.actions;

