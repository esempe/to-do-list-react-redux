import React, {useState} from 'react';
import styles from "./SingleTask.module.css";
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deleteTask, editTask, isCompleted, isUnCompleted} from "../../../../data/taskSlice";


const SingleTaskItem = (props) => {
    //hooks
    debugger
    const {taskId} = useParams();
    const task = useSelector(state =>
        state.tasks.find(task => task.id === taskId));
    let [checkBoxStatus, setCheckboxStatus] = useState()
    let [editedText, setEditText] = useState(task.title);
    let dispatch = useDispatch();
    //fun
    checkBoxStatus = task.isComplete
    let onEditedTextChange = e => setEditText(e.target.value);
    let onEditedTaskSave = () => {
        dispatch(
            editTask({
                id: taskId,
                title: editedText,

            })
        )
    }
    let onDeleteClick = () => {
        dispatch(
            deleteTask(
                {id: task.id,},
            )
        )
    };
    let onSetCheckBox = (e) => {
        setTimeout(() => setCheckboxStatus(e.target.checked), 1000)
        if (checkBoxStatus) {
            dispatch(
                isUnCompleted({
                    id: task.id
                })
            )
        } else dispatch(
            isCompleted({
                id: task.id
            })
        )
    }


    return (
        <div className={styles.taskItemWrapper}>
            <input type="checkbox"
                   checked={checkBoxStatus}
                   onChange={onSetCheckBox}
                   className={styles.taskCheckBox}

            />
            <input value={editedText}
                        type='text'
                      onChange={onEditedTextChange}
                      className={styles.textArea}

            ></input>
            <div className={styles.taskItemControl}>
                <NavLink
                    to="/"
                    className={styles.deleteTask}
                    onClick={onDeleteClick}>
                </NavLink>
                <NavLink
                    to="/"
                    className={styles.editTask}
                    onClick={onEditedTaskSave}
                >
                </NavLink>
                <div className={styles.starTask}></div>
            </div>
        </div>
    );
};


export default SingleTaskItem;