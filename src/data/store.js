import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import { composeWithDevTools } from 'redux-devtools-extension';


export let store = configureStore ({
    reducer:{
        counter: counterReducer,

    },
    }
)