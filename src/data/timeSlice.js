import {createSlice, nanoid} from "@reduxjs/toolkit";
let today = new Date();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

let initialState = {
        currentTime: time
    }
export const timeSlice = createSlice(
    {
        name: 'time',
        initialState,
        reducers: {}
    }
)
export default timeSlice.reducer