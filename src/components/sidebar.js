import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import SideList from "./sideList";

const Sidebar = () => {
    // let lists = props.lists

    const dispatch = useDispatch()
    const lists = useSelector(state => state.lists)
    // const tasks = useSelector(state => state.tasks)

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
            <h2 style={{margin: 20}}>TODO Lists</h2>
            <div id="lists">
                <div className="side_list" id="side_list"><a href="/today">Список завдань на сьогодні</a></div>
                {lists.filter(list => list !== undefined).map(l => <SideList key={l.id} lists={l}/>)}
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