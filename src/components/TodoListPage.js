import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Task from "./task";
import axios from '../Axios';


const TodoListPage = (props) => {
    let lists = props.lists
    let tasks = props.tasks
    let setTasks = props.setTasks
    let setLists = props.setLists
    let deleteTask = props.deleteTask
    let updateTask = props.updateTask
    let changeDone = props.changeDone

    let {id} = useParams()

    useEffect(() => {
        fetchTasksTodo()
    }, [])
    
    useEffect(() => {
        fetchListsTodo()
    }, [])

    async function fetchTasksTodo() {
        let response = await axios.fetchTasksTodo(id)
        setTasks(response)
    }

    async function fetchListsTodo() {
        let response = await axios.fetchListsTodo()
        setLists(response)
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
