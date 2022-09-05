import React from "react";
import TasksList from "./tasksList";

const TasksLists = ({lists, tasks, deleteTask, updateTask, changeDone}) => {
    return (
        <div id="tasks_lists">
            {lists.map(l => <TasksList id={l.id} key={l.id} name={l.name} tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} changeDone={changeDone}/>)}
        </div>
        
    )
}

export default TasksLists