import React from "react";
import Tasks_list from "./tasks_list";

const Tasks_lists = ({lists, tasks}) => {
    return (
        <div id="tasks_lists">
            {lists.map(l => <Tasks_list id={l.id} key={l.id} name={l.name} tasks={tasks}/>)}
        </div>
        
    )
}

export default Tasks_lists