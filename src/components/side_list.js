import React from "react";

const Side_list = (props) => {
    let {id, name} = props.lists
    id = 'side_list' + id
    return (
        <div className="side_list" id={id}>{name}</div>
    )
}

export default Side_list