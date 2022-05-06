import React from 'react';
import styles from '../syles.module.css'
import { useSelector} from "react-redux";
import InputSection from "../components/InputSection/InputSection";
import TaskListSection from "../components/taskListSection/TaskListSection";
import {NavLink, Route, Routes} from "react-router-dom";
import SingleTaskItem from "../components/taskListSection/SingleTaskItem/SingleTaskItem";
import CompletedTaskListSection from "../components/taskListSection/CompletedTaskListSection";

const App = (props) => {
    let LinkActive = ({isActive})=> {
        return isActive ? styles.active : styles.navItem;
    }
    let allTasks = useSelector(state => state.tasks)
    let completedTasks = allTasks.filter( task => task.isComplete === true)
    let completedTasksCount = completedTasks.length
    let allTasksCount = allTasks.length - completedTasksCount


    return (
        <div className={styles.globalWrapper}>
            <div className={styles.appWrapper}>
                <InputSection/>
                <div className={styles.navSection}>

                    <NavLink to="/completed" className={LinkActive}>
                        <div className={styles.completedCounter}>
                            {completedTasksCount}
                        </div>
                        completed
                    </NavLink>
                    <NavLink to="/" className={LinkActive}>
                         all
                        <div className={styles.completedCounter}>
                            {allTasksCount}
                        </div>
                    </NavLink>
                </div>
                <Routes>
                    <Route path="/" element={<TaskListSection/>}/>
                    <Route path="/tasks/:taskId" element={<SingleTaskItem/>}/>
                    <Route path="/completed" element={<CompletedTaskListSection/> }></Route>
                </Routes>
            </div>
        </div>
    );
};

export default App;