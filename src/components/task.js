import React from "react";

const Task = (props) => {
    console.log(props)
    let {done, name, description, duedate, list_id, id} = props.task
    console.log(props.task.id)
    return (
        <div className="task" id={id}>
            <hr/>
            <h4>{duedate}</h4>
            <h4>{name}</h4>
            <p>{description}</p>
        </div>
    )
}

export default Task
