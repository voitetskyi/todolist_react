import React from 'react'
import Task from "./task"

const Tasks_list = ({id, name, tasks}) => {
    let tasks_for_list = []
    for (let item of tasks) {
        if (id === item.list_id) {
            tasks_for_list.push(item)
        }
    }
    return (
        <div className="tasks_list" id={id}>
            <h2>{name}<img className="trash" align="right" title="Видалити список" src={require("../icons/trash21.png")}/></h2>
            {tasks_for_list.map(t => <Task key={t.id} task={t}/>)}
        </div>
    )
}

export default Tasks_list