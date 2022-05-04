import React from 'react';
import styles from "./../taskListSection.module.css";
import {NavLink} from "react-router-dom";




const TaskItem = (props) => {

    return (
        <div className={styles.taskItemWrapper}>
            <input type="checkbox" className={styles.taskCheckBox}/>
            <div className={styles.taskBody}>
                {props.title}
            </div>
            <div className={styles.taskItemControl}>
                <div className={styles.deleteTask}>1</div>
                <NavLink
                    to={`/tasks/${props.id}`}
                    className={styles.editTask}>edit
                </NavLink>
                <div className={styles.starTask}>3</div>
            </div>
        </div>
    );
};




export default TaskItem;