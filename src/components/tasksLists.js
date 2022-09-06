import React from "react";
import TasksList from "./tasksList";

const TasksLists = ({lists, tasks, deleteTask, updateTask, changeDone, deleteList}) => {
    return (
        <div id="tasks_lists">
            {lists.filter(list => list !== undefined).map(l => <TasksList id={l.id} key={l.id} name={l.name} tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} changeDone={changeDone} deleteList={deleteList}/>)}
        </div>
        
    )
}

export default TasksLists