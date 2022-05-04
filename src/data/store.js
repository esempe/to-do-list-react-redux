import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from "./taskSlice";
import timeReducer from "./timeSlice"


export default configureStore ({
    reducer:{
        tasks: tasksReducer,
        time: timeReducer,
    },
    }
)

