import React from "react";

const SideList = (props) => {
    let {id, name} = props.lists
    const selectFilter = props.selectFilter
    
    const selectFilterHandler = () => {
        selectFilter(props.lists.id)
    }
    
    let side_list_id = 'side_list' + id
    let ref = "/todo-list/" + id
    return (
        <div className="side_list" id={side_list_id} onClick={selectFilterHandler}>
            <a href={ref}>{name}</a>
        </div>
    )
}

export default SideList