import React from 'react'
import Task from "./task"

const Tasks_list = ({id, name, tasks}) => {
    console.log(id, name, tasks)
    return (
        <div className="tasks_list" id={id}>
            <h2>{name}<img className="trash" align="right" title="Видалити список" src="../../icons/trash21.png"/></h2>
            {/* {tasks.forEach(element => {
                if (element.list_id === id) {
                    <Task task={element}/>
                }
            })} */}
            {tasks.map(t => <Task key={t.id} task={t}/>)}
        </div>
    )
}

export default Tasks_list