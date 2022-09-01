import React from "react";
import AddTaskForm from "./addTaskForm";
import AddListForm from "./addListForm";

import Side_list from "./side_list";

function closeAddTaskForm () {
    const addTaskFormElement = document.getElementById('addTaskForm')
    const taskForm = document.forms['task']
    addTaskFormElement.classList.toggle("hide_form")
    taskForm.reset()
}
function closeAddListForm () {
    console.log("listForm")
    const addListFormElement = document.getElementById('addListForm')
    const listForm = document.forms['list']
    addListFormElement.classList.toggle("hide_list_form")
    listForm.reset()
}

const Sidebar = (props) => {
    let lists = props.lists

    return (
        <div id='sidebar'>
        <h2 style={{margin: 20}}>Мої списки завдань</h2>
        <div id="lists">
            <div className="side_list" id="side_list0">Завдання без списку</div>
            {lists.map(l => <Side_list key={l.id} lists={l}/>)}
        </div>
        <AddTaskForm/>
        <AddListForm/>
        <button style={{margin: 20}} onClick={closeAddTaskForm}>Додати завдання</button>
        <button style={{margin: 20}} onClick={closeAddListForm}>Додати список</button>
        <div style={{margin: 20}}>
            <input type="checkbox" defaultChecked/>
            <label>Приховувати виконані завдання</label>
        </div>
    </div>
    )
}

export default Sidebar