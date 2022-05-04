import React from 'react';
import styles from '../syles.module.css'
import {Connect} from "react-redux";
import InputSection from "../components/InputSection/InputSection";
import TaskItem from "../components/taskListSection/taskItem/taskItem";
import TaskListSection from "../components/taskListSection/TaskListSection";
import {Redirect, Route, Routes} from "react-router-dom";
import SingleTaskItem from "../components/taskListSection/SingleTaskItem/SingleTaskItem";

const App = (props) => {
    return (
        <div className={styles.globalWrapper}>
            <div className={styles.appWrapper}>
                <InputSection/>
                <Routes>
                    <Route path="/" element={<TaskListSection/>}/>
                    <Route path="/tasks/:taskId" element={<SingleTaskItem/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;