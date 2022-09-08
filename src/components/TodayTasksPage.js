import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Task from "./task";
import axios from '../Axios';


const TodayTasksPage = () => { //props
    // let lists = props.lists
    // let tasks = props.tasks
    // let setTasks = props.setTasks
    // let setLists = props.setLists
    // let deleteTask = props.deleteTask
    // let updateTask = props.updateTask
    // let changeDone = props.changeDone

    const dispatch = useDispatch()
    const lists = useSelector(state => state.lists)
    const tasks = useSelector(state => state.tasks)

    console.log(lists)
    console.log(tasks)

    // useEffect(() => {
    //     fetchTasksToday()
    // }, [])
    
    // useEffect(() => {
    //     fetchListsToday()
    // }, [])
      
    // async function fetchTasksToday() {
    //     let response = await axios.fetchTasksToday()
    //     setTasks(response)
    //   }

    // async function fetchListsToday() {
    //     let response = await axios.fetchListsToday()
    //     setLists(response)
    // }
//deleteTask={deleteTask} updateTask={updateTask} changeDone={changeDone}
    return (
        <div id="container">
            <h1>Список завдань на сьогодні</h1>
            {tasks.filter(item => item !== undefined).map(t => <Task key={t.id} task={t} lists={lists} />)}
        </div>
    )
}

export default TodayTasksPage
