import React from "react";

const UpdateTaskForm = ({lists, task, changeTask}) => {

    let done
    let name
    let description
    let duedate
    let list_name
    let id
    if (task !== undefined) {
        let list = lists.filter(list => list.id === task.list_id)
        list_name = list.name
        done = task.done
        name = task.name
        description = task.description
        duedate = task.duedate
        // duedate = new Date(task.duedate)
        console.log(duedate, typeof duedate)
        id = task.id
    }

    const closeUpdateTaskForm = () => {
        const updateTaskFormElement = document.getElementById('updateTaskForm')
        updateTaskFormElement.classList.toggle("hide_form")
    }
    const onSubmitHandler = (event) => {
        event.preventDefault()
        const updateTaskForm = document.forms['updateTask']
        const formData = new FormData(updateTaskForm)
        const obj = Object.fromEntries(formData.entries())
        // console.log(obj)
        let list_id = undefined
        for (const [key, value] of Object.entries(lists)) {
            if (value.name === obj.select) list_id = value.id
        }
        // let id = ++tasks.length
        // // console.log(list_id)
        const task = {
            done: done,
            name: obj.taskname,
            description: obj.textarea,
            duedate: (obj.duedate !== '' ? obj.duedate : undefined),
            list_id: list_id,
            id: id
        }
        // // console.log(lists, tasks, onChange)
        changeTask(task)
        // // console.log(tasks)
        closeUpdateTaskForm()
    }
    return (
        <div className="hide_form" id="updateTaskForm" name="updateTaskForm">
            <h5>Редагувати завдання</h5>
            <hr className="hr_form"/>
            <img className="closeUpdateTaskForm" style={{padding: 12}} align="right" title="Закрити" src={require("../icons/cross.png")} onClick={closeUpdateTaskForm}/>
            <form id="update_task_form" name="updateTask" onSubmit={onSubmitHandler}>
                <h6>Введіть заголовок завдання *</h6>
                <input type="text" id="task_name" name="taskname" defaultValue={name} required/>
                <h6>Додайте опис завдання</h6>
                <textarea rows="10" cols="100" name="textarea" defaultValue={description}></textarea>
                <h6>Встановіть дедлайн<input type="date" id="start" name="duedate" defaultValue={duedate} style={{marginLeft: 50}}/></h6>
                <h6>Оберіть список завдань<select id="select" name="select" form="update_task_form" defaultValue={list_name} style={{marginLeft: 30}}>
                        <option>Завдання без списку</option>
                        {lists.filter(list => list !== undefined).map(l => <option key={l.id}>{l.name}</option>)}
                    </select>
                </h6>
                <button type="submit">Редагувати</button>
            </form>
        </div>
    )
}

export default UpdateTaskForm
