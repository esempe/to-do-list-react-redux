import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import { composeWithDevTools } from 'redux-devtools-extension';
import tasksReducer from "./taskSlice";


export default configureStore ({
    reducer:{
        tasks: tasksReducer

    },
    }
)

