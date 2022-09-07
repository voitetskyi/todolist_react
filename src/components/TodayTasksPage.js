import React, { useState, useEffect } from "react";

import Task from "./task";

const axios = require('axios');


const TodayTasksPage = (props) => {
    let lists = props.lists
    let tasks = props.tasks
    let setTasks = props.setTasks
    let setLists = props.setLists
    let deleteTask = props.deleteTask
    let updateTask = props.updateTask
    let changeDone = props.updateTask


    useEffect(() => {
        fetchTasksToday()
    }, [])
    
    useEffect(() => {
        fetchListsToday()
    }, [])
      
    async function fetchTasksToday() {
        let response = await axios.get('http://localhost:8080/api/collection/today')
        setTasks(response.data)
      }

    async function fetchListsToday() {
        let response = await axios.get('http://localhost:8080/api/lists')
        setLists(response.data)
    }

    return (
        <div id="container">
            <h1>Список завдань на сьогодні</h1>
            {tasks.filter(item => item !== undefined).map(t => <Task key={t.id} task={t} lists={lists} deleteTask={deleteTask} updateTask={updateTask} changeDone={changeDone}/>)}
        </div>
    )
}

export default TodayTasksPage
