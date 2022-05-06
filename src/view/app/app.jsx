import React from 'react';
import styles from '../syles.module.css'
import {Connect} from "react-redux";
import InputSection from "../components/InputSection/InputSection";
import TaskItem from "../components/taskListSection/taskItem/taskItem";
import TaskListSection from "../components/taskListSection/TaskListSection";
import {NavLink, Redirect, Route, Routes} from "react-router-dom";
import SingleTaskItem from "../components/taskListSection/SingleTaskItem/SingleTaskItem";

const App = (props) => {
    let LinkActive = ({isActive})=> {
        return isActive ? styles.active : styles.navItem;
    }

    return (
        <div className={styles.globalWrapper}>
            <div className={styles.appWrapper}>
                <InputSection/>
                <div className={styles.navSection}>
                    <NavLink to="/completed" className={LinkActive}>
                        {1}completed
                    </NavLink>
                    <NavLink to="/" className={LinkActive}>
                         all
                    </NavLink>
                </div>
                <Routes>
                    <Route path="/" element={<TaskListSection/>}/>
                    <Route path="/tasks/:taskId" element={<SingleTaskItem/>}/>
                    <Route path="/completed" element={15}></Route>
                </Routes>
            </div>
        </div>
    );
};

export default App;