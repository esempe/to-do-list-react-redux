import React from 'react';
import styles from "../../syles.module.css";
import {useSelector} from "react-redux";



const TaskItem = () => {

    let tasks = useSelector(state => state.tasks)
    let renderedTasks = tasks.map(task =>
        <TaskContainer title={task.title}/>
    )
    return (
        renderedTasks
    );
};

const TaskContainer = (props) => {
    return (
        <div className={styles.taskItemWrapper}>
            <input type="checkbox" className={styles.taskCheckBox}/>
            <div className={styles.taskBody}>
                {props.title}
            </div>
            <div className={styles.taskItemControl}>
                <div className={styles.deleteTask}>1</div>
                <div className={styles.editTask}>2</div>
                <div className={styles.starTask}>3</div>
            </div>
        </div>
    )
}


export default TaskItem;