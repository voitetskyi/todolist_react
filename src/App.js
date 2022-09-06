import { useEffect, useState } from 'react';
import './App.css';
import AddListForm from './components/addListForm';
import AddTaskForm from './components/addTaskForm';
import UpdateTaskForm from './components/updateTaskForm';
import Sidebar from './components/sidebar';
import Tasks_lists from './components/tasksLists';

const axios = require('axios');

function App() {

  const [lists_for_tasks_lists, setTaskLists] = useState([])
  const [lists, setLists] = useState([])
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState()
    
  const addTask = (task) => {
    axios.post('http://localhost:8080/api/task', task)
    .then(function (response) {
      setTasks([...tasks, response.data[0]])
    })
  }

  const deleteTask = (id) => {
    const endpointTask = 'http://localhost:8080/api/task/' + id
    axios.delete(endpointTask)
    .then(function (response) {
      console.log(response)
      setTasks([...tasks.map(task => task.id === id ? undefined : task)])
    })
  }

  const updateTask = (taskUpdate) => {
    setTask(taskUpdate)
  }

  const changeTask = (changed_task) => {
    const endpointTask = 'http://localhost:8080/api/task/' + changed_task.id
    axios.put(endpointTask, changed_task)
    .then(function (response) {
      setTasks([...tasks.map(task => task.id === changed_task.id ? changed_task : task)])
    })
  }

  const changeDone = (task) => {
    const endpointTask = 'http://localhost:8080/api/task/' + task.id
    axios.patch(endpointTask, task)
    .then(function (response) {
      setTasks([...tasks.map(t => t.id === task.id ? task : t)])
    })
  }

  const selectFilter = (id) => {
    const endpointTask = 'http://localhost:8080/api//list/' + id + '/tasks'
    axios.get(endpointTask)
    .then(function (response) {
      setTasks(response.data[1])
      setTaskLists(response.data[0])
    })
  }

  const selectAllTasks = () => {
    axios.get('http://localhost:8080/api/tasks')
    .then(function (response) {
      setTasks(response.data)
    })
    axios.get('http://localhost:8080/api/lists')
      .then(function (response) {
        setTaskLists(response.data)
    })
  }

  const tasksWithoutList = () => {
    //setTasks()
    setTaskLists([{id: 0, name: 'Завдання без списку'}])
  }

  const addList = (list) => {
    axios.post('http://localhost:8080/api/list', list)
    .then(function (response) {
      setLists([...lists, response.data[0]])
      console.log(list)
      console.log(response.data[0])
    })
  }

  const deleteList = (id) => {
    console.log(id)
    const endpointTask = 'http://localhost:8080/api/list/' + id
    axios.delete(endpointTask)
    .then(function (response) {
      setLists([...lists.map(list => list.id === id ? undefined : list)])
    })
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  useEffect(() => {
    fetchLists()
  }, [])
  
  async function fetchTasks () {
    const response = await axios.get('http://localhost:8080/api/tasks')
    setTasks(response.data)
  }
  async function fetchLists () {
    const response = await axios.get('http://localhost:8080/api/lists')
    setLists(response.data)
    setTaskLists(response.data)
  }

  return (
    <div id='todolist_app'>
      <Sidebar lists={lists} selectFilter={selectFilter} allTasks={selectAllTasks} tasksWithoutList={tasksWithoutList}/>
      <AddTaskForm lists={lists} addTask={addTask}/>
      <UpdateTaskForm lists={lists} task={task} changeTask={changeTask}/>
      <AddListForm addList={addList}/>
      <div id="container">
        <h1>Поточні завдання</h1>
        <Tasks_lists lists={lists} tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} changeDone={changeDone} deleteList={deleteList}/>
      </div>
    </div>
  )
}

export default App
