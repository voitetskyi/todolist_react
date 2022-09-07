import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import AddListForm from './components/addListForm';
import AddTaskForm from './components/addTaskForm';
import UpdateTaskForm from './components/updateTaskForm';
import Sidebar from './components/sidebar';
import TodayTasksPage from './components/TodayTasksPage';
import TodoListPage from './components/TodoListPage';
import axios from './Axios'


function App() {

  const [lists, setLists] = useState([])
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState()
    
  async function addTask(task) {
    let response = await axios.addTask(task)
    setTasks([...tasks, response])
  }

  async function deleteTask(id) {
    await axios.deleteTask(id)
    setTasks([...tasks.map(task => task.id === id ? undefined : task)])
  }

  async function updateTask(taskUpdate) {
    setTask(taskUpdate)
  }

  async function changeTask(changed_task) {
    await axios.changeTask(changed_task)
    setTasks([...tasks.map(task => task.id === changed_task.id ? changed_task : task)])
  }

  async function changeDone(task) {
    await axios.changeDone(task)
    setTasks([...tasks.map(t => t.id === task.id ? task : t)])
  }

  async function addList(list) {
    let response = await axios.addList(list)
    setLists([...lists, response])

  }

  async function deleteList(id) {
    await axios.deleteList(id)
    setLists([...lists.map(list => list.id === id ? undefined : list)])
  }

  useEffect(() => {
    fetchLists()
  }, [])

  async function fetchLists() {
    let response = await axios.fetchLists()
    setLists(response)
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
