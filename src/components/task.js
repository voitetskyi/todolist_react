import React from "react";

const Task = (props) => {
    let {done, name, description, duedate, list_id, id} = props.task
    const deleteTask = props.deleteTask
    const updateTask = props.updateTask
    const changeDone = props.changeDone

    const deleteTaskHandler = () => deleteTask(id)

    const updateTaskHandler = () => {
        updateTask(props.task)
        const updateTaskFormElement = document.getElementById('updateTaskForm')
        updateTaskFormElement.classList.toggle("hide_form")

    }

    const changeDoneHandler = ()=> {
        let task = props.task
        task.done ? task.done = false : task.done = true
        changeDone(task)
    }

    let today = new Date()
    duedate = new Date(duedate)
    let hr_color = '#D9D9D9'
    let h4_color ='#878787'
    let checked = false
    let status = 'undone'
    if (done) {
        hr_color = '#58AC83'
        checked = true
        status = 'done'
    } else if (today > duedate && done === false && (duedate - new Date(null)) !== 0) {
        hr_color = '#E63241'
        h4_color = '#E63241' 
    }
    (duedate - new Date(null)) === 0 ? duedate = '' : duedate = duedate.toLocaleDateString()
    // (duedate - new Date(null)) === 0 ? duedate = '' : duedate = duedate.toLocaleDateString('en-GB')
    return (
        <div className={'task ' + status} id={id}>
            <hr color={hr_color}/>
            <img className="trash" align="right" title="Видалити завдання" src={require("../icons/trash24.png")} onClick={deleteTaskHandler}></img>
            <img className="edit" align="right" title="Редагувати" src={require("../icons/edit24.png")} onClick={updateTaskHandler}></img>
            <h4 style={{color: h4_color}} ><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="currentColor" d="M10.4998 2.33325H3.49984C2.21117 2.33325 1.1665 3.37792 1.1665 4.66659V10.4999C1.1665 11.7886 2.21117 12.8333 3.49984 12.8333H10.4998C11.7885 12.8333 12.8332 11.7886 12.8332 10.4999V4.66659C12.8332 3.37792 11.7885 2.33325 10.4998 2.33325Z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path stroke="currentColor" d="M4.6665 1.16663V3.49996M9.33317 1.16663V3.49996M1.1665 5.83329H12.8332" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {duedate}</h4>
            <h3><input type="checkbox" defaultChecked={checked} onClick={changeDoneHandler}/>{name}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Task
