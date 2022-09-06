import React from "react";

import Task from "./task";

const TodayTasksPage = ({tasks, lists, deleteTask, updateTask, changeDone}) => {

    return (
        <div id="container">
            <h1>Список завдань на сьогодні</h1>
            {tasks.filter(item => item !== undefined).map(t => <Task key={t.id} task={t} lists={lists} deleteTask={deleteTask} updateTask={updateTask} changeDone={changeDone}/>)}
        </div>
    )
}

export default TodayTasksPage
