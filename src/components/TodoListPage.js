import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Task from "./task";

const axios = require('axios');

const TodoListPage = (props) => {
    let lists = props.lists
    let tasks = props.tasks
    let setTasks = props.setTasks
    let setLists = props.setLists
    let deleteTask = props.deleteTask
    let updateTask = props.updateTask
    let changeDone = props.updateTask

    let {id} = useParams()

    useEffect(() => {
        fetchTasksTodo()
    }, [])
    
    useEffect(() => {
        fetchListsTodo()
    }, [])

    let endpoint = 'http://localhost:8080/api/list/' + id + '/tasks'
    async function fetchTasksTodo() {
        let response = await axios.get(endpoint)
        setTasks(response.data)
    }

    async function fetchListsTodo() {
        let response = await axios.get('http://localhost:8080/api/lists')
        setLists(response.data)
    }

    let list_name = ''
    for (let item of lists) {
        if (item.id === Number(id)) list_name = item.name
    }

    return (
        <div id="container">
            <h1>{list_name}</h1>
            {tasks.filter(item => item !== undefined).map(t => <Task key={t.id} task={t} lists={lists} deleteTask={deleteTask} updateTask={updateTask} changeDone={changeDone}/>)}
        </div>
    )
}

export default TodoListPage
