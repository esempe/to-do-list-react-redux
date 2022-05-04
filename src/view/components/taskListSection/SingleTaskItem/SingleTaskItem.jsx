import React, {useState} from 'react';
import styles from "./SingleTask.module.css";
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {editTask} from "../../../../data/taskSlice";


const SingleTaskItem = (props) => {
    //hooks
    const {taskId} = useParams();
    const task = useSelector(state =>
        state.tasks.find(task => task.id === taskId));
    let [editedText, setEditText] = useState(task.title);
    let dispatch = useDispatch();
    //fun
    let onEditedTextChange = e => setEditText(e.target.value);
    let onEditedTaskSave =()=>{
        dispatch(
            editTask({
                id: taskId,
                title: editedText,
            })
        )
    }
    return (
        <div className={styles.taskItemWrapper}>
            <input type="checkbox" className={styles.taskCheckBox}/>
            <textarea value={editedText}
                      onChange={onEditedTextChange}
                      className={styles.textArea}
            ></textarea>
            <div className={styles.taskItemControl}>
                <div className={styles.deleteTask}>1</div>
                <NavLink
                    to="/"
                    className={styles.editTask}
                    onClick={onEditedTaskSave}
                >save
                </NavLink>
                <div className={styles.starTask}>3</div>
            </div>
        </div>
    );
};


export default SingleTaskItem;