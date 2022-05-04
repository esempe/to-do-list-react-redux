import React, {useEffect} from 'react';
import styles from "./taskListSection.module.css";
import {useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import TaskItem from "./taskItem/taskItem";

const TaskListSection = () => {
    let tasks = useSelector(state => state.tasks)
    let renderedTasks = tasks.map(task =>
        <TaskItem title={task.title} id={task.id}/>
    )
    const task = useSelector(state =>
        state.tasks
    )
    console.log(task)

    return (
        <div className={styles.taskList}>
            {renderedTasks}
        </div>
    );
};

export default TaskListSection;