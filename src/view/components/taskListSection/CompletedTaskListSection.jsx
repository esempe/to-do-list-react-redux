import React, {useEffect} from 'react';
import styles from "./taskListSection.module.css";
import {useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import TaskItem from "./taskItem/taskItem";

const CompletedTaskListSection = () => {
    let tasks = useSelector(state => state.tasks)
    let filteredTasks = tasks.filter( task => task.isComplete === true)
    let renderedTasks = filteredTasks.map(task =>
        <TaskItem title={task.title} id={task.id} isComplete={task.isComplete}/>
    )
    return (
        <div className={styles.taskList}>
            {renderedTasks}
        </div>
    );
};

export default CompletedTaskListSection;