import React from 'react';
import styles from "./taskListSection.module.css";
import {NavLink, useParams} from "react-router-dom";
import {useSelector} from "react-redux";




const SingleTaskItem = (props) => {
    const {taskId} = useParams()
    console.log(taskId)

    const task = useSelector(state =>
    state.tasks.find(task => task.id === taskId)
    )
    console.log(task)
    return (
        <div className={styles.taskItemWrapper}>
            <input type="checkbox" className={styles.taskCheckBox}/>
            <div className={styles.taskBody}>
                {task.title}
            </div>
            <div className={styles.taskItemControl}>
                <div className={styles.deleteTask}>1</div>
                <NavLink
                    to="/"
                    className={styles.editTask}>home
                </NavLink>
                <div className={styles.starTask}>3</div>
            </div>
        </div>
    );
};




export default SingleTaskItem;