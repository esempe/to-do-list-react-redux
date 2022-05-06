import React, {useState} from 'react';
import styles from "./InputSection.module.css";
import {useDispatch, useSelector} from "react-redux";
import {addTask} from "../../../data/taskSlice";
import {nanoid} from "@reduxjs/toolkit";

const InputSection = () => {

    let [taskText, setText] = useState('');

    let dispatch = useDispatch()

    let time = useSelector(state => state.time).currentTime

    const onTextChange = e => setText(e.target.value)
    let onTaskSave = () => {
        if (taskText) {
            dispatch(addTask({
                    id: nanoid(),
                    title: taskText,
                    createdAt: time,
                    isComplete: false
                }),
                setText('')
            )

        }
    }


    return (
        <div className={styles.inputSection}>
            <div className={styles.appTitle}>
                To Do App
            </div>
            <div className={styles.inputWrapper}>
                <input type="text"
                       className={styles.input}
                       placeholder={'need to do smt?'}
                       value={taskText}
                       onChange={onTextChange}
                />
                <div className={styles.inputButton}
                     onClick={onTaskSave}
                >
                    <div className={styles.inputButtonCross}></div>
                </div>
            </div>
        </div>
    );
};

export default InputSection;