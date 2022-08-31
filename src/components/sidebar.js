import React from "react";

const Sidebar = () => {
    return (
        <div id='sidebar'>
        <h2>Мої списки завдань</h2>
        <div id="lists">
            <div className="side_list" id="side_list0">Завдання без списку</div>
        </div>
        <button>Додати завдання</button>
        <button>Додати список</button>
        <div>
            <input type="checkbox"/>
            <label>Приховувати виконані завдання</label>
        </div>
    </div>
    )
}

export default Sidebar