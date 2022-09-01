import React from "react";

const AddListForm = () => {

    function closeAddListForm () {
        console.log("listForm")
        const addListFormElement = document.getElementById('addListForm')
        const listForm = document.forms['list']
        addListFormElement.classList.toggle("hide_list_form")
        listForm.reset()
    }

    return (
        <div className="hide_list_form" id="addListForm" name="addListForm">
            <h5>Додати новий список</h5>
            <hr className="hr_form"/>
            <img className="closeAddListForm" style={{padding: 12}} align="right" title="Закрити" src={require("../icons/cross.png")} onClick={closeAddListForm}/>
            <form id="add_list_form" name="list">
                <h6>Введіть назву списку *</h6>
                <input type="text" id="list_name" name="name" placeholder="Назва списку завдань" required/>
                <button type="submit">Додати список</button>
            </form>
        </div>
    )
}

export default AddListForm