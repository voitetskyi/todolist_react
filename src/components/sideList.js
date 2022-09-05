import React from "react";

const SideList = (props) => {
    let {id, name} = props.lists
    const selectFilter = props.selectFilter
    
    const selectFilterHandler = () => {
        selectFilter(props.lists.id)
    }
    
    id = 'side_list' + id
    return (
        <div className="side_list" id={id} onClick={selectFilterHandler}>{name}</div>
    )
}

export default SideList