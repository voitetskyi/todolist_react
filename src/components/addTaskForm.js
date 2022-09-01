import React, {Component} from "react";

class AddTaskForm extends Component {

    closeAddTaskForm = () => {
        const addTaskFormElement = document.getElementById('addTaskForm')
        const taskForm = document.forms['task']
        addTaskFormElement.classList.toggle("hide_form")
        taskForm.reset()
    }
    onSubmitHandler = (event) => {
        event.preventDefault()
        console.log("[addTaskForm] onSubmit log")

    }

    render() {
        return (
            <div className="hide_form" id="addTaskForm" name="addTaskForm">
                <h5>Додати нову задачу</h5>
                <hr className="hr_form"/>
                <img className="closeAddTaskForm" style={{padding: 12}} align="right" title="Закрити" src={require("../icons/cross.png")} onClick={this.closeAddTaskForm}/>
                <form id="add_task_form" name="task" onSubmit={this.onSubmitHandler}>
                    <h6>Введіть заголовок завдання *</h6>
                    <input type="text" id="task_name" name="taskname" placeholder="Заголовок завдання" required/>
                    <h6>Додайте опис завдання</h6>
                    <textarea rows="10" cols="52" name="textarea" placeholder="Опис завдання"></textarea>
                    <h6>Встановіть дедлайн<input type="date" id="start" name="duedate" style={{marginLeft: 50}}/></h6>
                    <h6>Оберіть список завдань<select id="select" name="select" form="add_task_form" style={{marginLeft: 30}}><option>Завдання без списку</option></select></h6>
                    <button type="submit">Додати завдання</button>
                </form>
            </div>
        )
    }
}

export default AddTaskForm
