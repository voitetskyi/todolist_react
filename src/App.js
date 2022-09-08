import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { Provider, useDispatch, useSelector } from 'react-redux';
import './App.css';
import AddListForm from './components/addListForm';
import AddTaskForm from './components/addTaskForm';
import UpdateTaskForm from './components/updateTaskForm';
import Sidebar from './components/sidebar';
import TodayTasksPage from './components/TodayTasksPage';
import TodoListPage from './components/TodoListPage';
import axios from './Axios';
import store from './store';


function App() {

  // const dispatch = useDispatch()
  // const lists = useSelector(state => state.lists)
  // const tasks = useSelector(state => state.tasks)

  // console.log(lists)
  // console.log(tasks)

  // const setLists = ''
  // const setTasks = ''

  // const [lists, setLists] = useState([])
  // const [tasks, setTasks] = useState([])
  // const [task, setTask] = useState()
    
  // async function addTask(task) {
  //   let response = await axios.addTask(task)
  //   setTasks([...tasks, response])
  // }

  // async function deleteTask(id) {
  //   await axios.deleteTask(id)
  //   setTasks([...tasks.map(task => task.id === id ? undefined : task)])
  // }

  // async function updateTask(taskUpdate) {
  //   setTask(taskUpdate)
  // }

  // async function changeTask(changed_task) {
  //   await axios.changeTask(changed_task)
  //   setTasks([...tasks.map(task => task.id === changed_task.id ? changed_task : task)])
  // }

  // async function changeDone(task) {
  //   let a = await axios.changeDone(task);
  //   setTasks([...tasks.map(t => t.id === task.id ? task : t)]);
  // }

  // async function addList(list) {
  //   let response = await axios.addList(list)
  //   setLists([...lists, response])
  // }

  // async function deleteList(id) {
  //   await axios.deleteList(id)
  //   setLists([...lists.map(list => list.id === id ? undefined : list)])
  // }

  // useEffect(() => {
  //   fetchLists()
  // }, [])

  // async function fetchLists() {
  //   let response = await axios.fetchLists()
  //   setLists(response)
  // }

  return (
    <Provider store={store}>
      <div id='todolist_app'>
        <Sidebar />
        <AddTaskForm />
        <UpdateTaskForm />
        <AddListForm />
        <Routes>
            <Route path='/' element={<Navigate to={'/today'}/>}/>
            <Route path='/today' element={<TodayTasksPage />}/>
            <Route path='/todo-list/:id' element={<TodoListPage/>}/>
        </Routes>  
      </div>
    </Provider>
  )
}

export default App
