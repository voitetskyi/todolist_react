import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import AddListForm from './components/addListForm';
import AddTaskForm from './components/addTaskForm';
import UpdateTaskForm from './components/updateTaskForm';
import Sidebar from './components/sidebar';
import TodayTasksPage from './components/TodayTasksPage';
import TodoListPage from './components/TodoListPage';

const axios = require('axios');
const axi = require('./Axios.js')

function App() {

  const [lists, setLists] = useState([])
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState()
    
  async function addTask(task) {
    let response = await axi.addTask(task)
    setTasks([...tasks, response])
  }

  async function deleteTask(id) {
    await axi.deleteTask(id)
    setTasks([...tasks.map(task => task.id === id ? undefined : task)])
  }

  async function updateTask(taskUpdate) {
    setTask(taskUpdate)
  }

  async function changeTask(changed_task) {
    await axi.changeTask(changed_task)
    setTasks([...tasks.map(task => task.id === changed_task.id ? changed_task : task)])
  }

  async function changeDone(task) {
    await axi.changeDone(task)
    setTasks([...tasks.map(t => t.id === task.id ? task : t)])
  }

  async function addList(list) {
    let response = await axi.addList(list)
    setLists([...lists, response])

  }

  async function deleteList(id) {
    await axi.deleteList(id)
    setLists([...lists.map(list => list.id === id ? undefined : list)])
  }

  useEffect(() => {
    fetchLists()
  }, [])
  
  async function fetchLists() {
    let response = await axios.get('http://localhost:8080/api/lists')
    setLists(response.data)
  }


  return (
    <div id='todolist_app'>
      <Sidebar lists={lists}/>
      <AddTaskForm lists={lists} addTask={addTask}/>
      <UpdateTaskForm lists={lists} task={task} changeTask={changeTask}/>
      <AddListForm addList={addList}/>
      <Routes>
          <Route path='/' element={<Navigate to={'/today'}/>}/>
          <Route path='/today' element={<TodayTasksPage lists={lists} tasks={tasks} setTasks={setTasks} setLists={setLists} deleteTask={deleteTask} updateTask={updateTask} changeDone={changeDone}/>}/>
          <Route path='/todo-list/:id' element={<TodoListPage lists={lists} tasks={tasks} setTasks={setTasks} setLists={setLists} deleteTask={deleteTask} updateTask={updateTask} changeDone={changeDone}/>}/>
      </Routes>
    </div>
  )
}

export default App
