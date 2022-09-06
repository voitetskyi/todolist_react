import React from "react";

import SideList from "./sideList";

const Sidebar = (props) => {
    let lists = props.lists
    const selectFilter = props.selectFilter
    const allTasks = props.allTasks
    const tasksWithoutList = props.tasksWithoutList

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

    function show_done_tasks () {
        const cont = document.querySelector("#container")
        cont.classList.toggle("show-done")
    }

    return (
        <div id='sidebar'>
        <h2 style={{margin: 20}}>Мої списки завдань</h2>
        <div id="lists">
            <div className="side_list" id="side_list0" onClick={tasksWithoutList}>Завдання без списку</div>
            <div className="side_list" id="side_list" onClick={allTasks}>Всі завдання</div>
            {lists.filter(list => list !== undefined).map(l => <SideList key={l.id} lists={l} selectFilter={selectFilter}/>)}
        </div>
        <button style={{margin: 20}} onClick={closeAddTaskForm}>Додати завдання</button>
        <button style={{margin: 20}} onClick={closeAddListForm}>Додати список</button>
        <div style={{margin: 20}}>
            <input type="checkbox" defaultChecked onChange={show_done_tasks}/>
            <label>Приховувати виконані завдання</label>
        </div>
    </div>
    )
}

export default Sidebar