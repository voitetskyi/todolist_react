import React from "react";
import { useDispatch, useSelector } from 'react-redux';


const AddListForm = () => {

    function closeAddListForm () {
        const addListFormElement = document.getElementById('addListForm')
        const listForm = document.forms['list']
        addListFormElement.classList.toggle("hide_list_form")
        listForm.reset()
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        const listForm = document.forms['list']
        const formData = new FormData(listForm)
        const obj = Object.fromEntries(formData.entries())
        const list = {
            name: obj.name
        }
        // addList(list)
        closeAddListForm()
    }

    return (
        <div className="hide_list_form" id="addListForm" name="addListForm">
            <h5>Додати новий список</h5>
            <hr className="hr_form"/>
            <img className="closeAddListForm" style={{padding: 12}} align="right" title="Закрити" src={require("../icons/cross.png")} onClick={closeAddListForm}/>
            <form id="add_list_form" name="list" onSubmit={onSubmitHandler}>
                <h6>Введіть назву списку *</h6>
                <input type="text" id="list_name" name="name" placeholder="Назва списку завдань" required/>
                <button type="submit">Додати список</button>
            </form>
        </div>
    )
}

export default AddListForm