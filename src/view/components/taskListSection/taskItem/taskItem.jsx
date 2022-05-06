import React, {useState} from 'react';
import styles from "./../taskListSection.module.css";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteTask, isCompleted, isUnCompleted} from "../../../../data/taskSlice";





const TaskItem = (props) => {
    //hooks
    let [checkBoxStatus, setCheckboxStatus] = useState(false)
    let dispatch = useDispatch();
    //func
    let onDeleteClick =()=>{
        dispatch(
            deleteTask(
                {id: props.id,}))
    }
    let onSetCheckBox =(e)=>{
        setCheckboxStatus(e.target.checked)
        if (checkBoxStatus){
            dispatch(
                isUnCompleted({
                    id: props.id
                })
            )
        }else dispatch(
            isCompleted({
                id: props.id
            })
        )
    }

    return (
        <div className={styles.taskItemWrapper}>
            <input type="checkbox" className={styles.taskCheckBox}
                    checked={checkBoxStatus}
                   onChange={onSetCheckBox}
            />
            <div className={styles.taskBody}>
                {props.title}
            </div>
            <div className={styles.taskItemControl}>
                <div className={styles.deleteTask}
                    onClick={onDeleteClick}
                >
                </div>
                <NavLink
                    to={`/tasks/${props.id}`}
                    className={styles.editTask}>
                </NavLink>
                <div className={styles.starTask}></div>
            </div>
        </div>
    );
};




export default TaskItem;