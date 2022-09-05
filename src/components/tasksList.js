import React from 'react'
import Task from "./task"

const TasksList = ({id, name, tasks, deleteTask, updateTask, changeDone}) => {
    // console.log(id, name, tasks)
    return (
        <div className="tasks_list" id={id}>
            <h2>
                {name}
                <img className="trash" align="right" title="Видалити список" src={require("../icons/trash24.png")}/>
                <img className="edit" align="right" title="Редагувати" src={require("../icons/edit24.png")}></img>
            </h2>
            {tasks
                .filter(item => item !== undefined)
                .filter(task => id === task.list_id)
                .map(t => <Task key={t.id} task={t} deleteTask={deleteTask} updateTask={updateTask} changeDone={changeDone}/>)
            }
        </div>
    )
}

export default TasksList