import React, {Component} from "react";

const AddTaskForm = ({lists, tasks, addTask}) => {

    const closeAddTaskForm = () => {
        const addTaskFormElement = document.getElementById('addTaskForm')
        const taskForm = document.forms['task']
        addTaskFormElement.classList.toggle("hide_form")
        taskForm.reset()
    }
    const onSubmitHandler = (event) => {
        event.preventDefault()
        const taskForm = document.forms['task']
        const formData = new FormData(taskForm);
        const obj = Object.fromEntries(formData.entries())
        // console.log(obj)
        let list_id = undefined
        for (const [key, value] of Object.entries(lists)) {
            if (value.name === obj.select) list_id = value.id
        }
        let id = ++tasks.length
        // console.log(list_id)
        const task = {
            done: false,
            name: obj.taskname,
            description: obj.textarea,
            duedate: (obj.duedate !== '' ? obj.duedate : undefined),
            list_id: list_id,
            id: id
        }
        // console.log(lists, tasks, onChange)
        addTask(task)
        // console.log(tasks)
        closeAddTaskForm()
        return task
    }
    return (
        <div className="hide_form" id="addTaskForm" name="addTaskForm">
            <h5>Додати нову задачу</h5>
            <hr className="hr_form"/>
            <img className="closeAddTaskForm" style={{padding: 12}} align="right" title="Закрити" src={require("../icons/cross.png")} onClick={closeAddTaskForm}/>
            <form id="add_task_form" name="task" onSubmit={onSubmitHandler}>
                <h6>Введіть заголовок завдання *</h6>
                <input type="text" id="task_name" name="taskname" placeholder="Заголовок завдання" required/>
                <h6>Додайте опис завдання</h6>
                <textarea rows="10" cols="52" name="textarea" placeholder="Опис завдання"></textarea>
                <h6>Встановіть дедлайн<input type="date" id="start" name="duedate" style={{marginLeft: 50}}/></h6>
                <h6>Оберіть список завдань<select id="select" name="select" form="add_task_form" style={{marginLeft: 30}}>
                        <option>Завдання без списку</option>
                        {lists.map(l => <option key={l.id}>{l.name}</option>)}
                    </select>
                </h6>
                <button type="submit">Додати завдання</button>
            </form>
        </div>
    )
}

export default AddTaskForm
