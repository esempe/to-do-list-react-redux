import {createSlice, nanoid} from "@reduxjs/toolkit";

let initialState =[
    {
        id: nanoid(),
        title: 'сделанная задача',
        createdAt: 'xz',
        isComplete: true
    },
    {
        id: nanoid(),
        title: 'не сделанная',
        createdAt: 'xz',
        isComplete: false
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
            editTask(state, action) {
                const {id, title, isComplete} = action.payload;
                const existingTag = state.find(task => task.id === id)
                if (existingTag) {
                    existingTag.title = title;
                }
            },
            deleteTask(state, action) {
                const {id} = action.payload;
                const deletedTag = state.find(task => task.id === id)
                let indexOfDeleted = state.indexOf(deletedTag)
                state.splice(indexOfDeleted, 1)
            },
            isCompleted(state, action) {
                const {id} = action.payload;
                const completedTask = state.find(task => task.id === id);
                completedTask.isComplete = true

            },
            isUnCompleted(state, action) {
                const {id} = action.payload;
                const completedTask = state.find(task => task.id === id);
                completedTask.isComplete = false

            }

        }
    }
)
export default tasksSlice.reducer
export const {
    addTask, editTask,
    deleteTask, isCompleted,
    isUnCompleted
} = tasksSlice.actions;

let test = [
    {
        id: nanoid(),
        title: 'texxxssf',
        createdAt: 'xz',
        isComplete: false
    },
    {
        id: nanoid(),
        title: 'taskText',
        createdAt: 'xz',
        isComplete: false
    }
]
let test2 =     {
    complete: [
        {
            id: nanoid(),
            title: 'texxxssf',
            createdAt: 'xz',
            isComplete: true
        }
    ],
    unComplete: [
        {
            id: nanoid(),
            title: 'texxxssf',
            createdAt: 'xz',
            isComplete: false
        }
    ]
}