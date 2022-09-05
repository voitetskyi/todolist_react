import { useState } from 'react';
import './App.css';
import AddListForm from './components/addListForm';
import AddTaskForm from './components/addTaskForm';
import UpdateTaskForm from './components/updateTaskForm';
import Sidebar from './components/sidebar';
import Tasks_lists from './components/tasksLists';

function App() {
  const allTasks = [
    {id: 1, done: false, name: 'Task 1', description: 'Task description', duedate: '2022-09-22', list_id: 1},
    {id: 2, done: false, name: 'Task 2', description: 'Task description', duedate: '2022-09-22', list_id: 2},
    {id: 3, done: false, name: 'Task 3', description: 'Task description', duedate: '2022-09-22', list_id: 3},
    {id: 4, done: false, name: 'Task 4', description: 'Task description undone', duedate: '2022-08-22', list_id: 1},
    {id: 5, done: true, name: 'Task 5', description: 'Task description done', duedate: '2022-09-22', list_id: 1}
  ]
  const allLists = [
    {id: 1, name: 'List 1'},
    {id: 2, name: 'List 2'},
    {id: 3, name: 'List 3'}
  ]
  const [lists_for_tasks_lists, setTaskLists] = useState([
    {id: 1, name: 'List 1'},
    {id: 2, name: 'List 2'},
    {id: 3, name: 'List 3'}
  ])
  const [lists, setLists] = useState([
    {id: 1, name: 'List 1'},
    {id: 2, name: 'List 2'},
    {id: 3, name: 'List 3'}
  ])
  const [tasks, setTasks] = useState([
    {id: 1, done: false, name: 'Task 1', description: 'Task description', duedate: '2022-09-22', list_id: 1},
    {id: 2, done: false, name: 'Task 2', description: 'Task description', duedate: '2022-09-22', list_id: 2},
    {id: 3, done: false, name: 'Task 3', description: 'Task description', duedate: '2022-09-22', list_id: 3},
    {id: 4, done: false, name: 'Task 4', description: 'Task description undone', duedate: '2022-08-22', list_id: 1},
    {id: 5, done: true, name: 'Task 5', description: 'Task description done', duedate: '2022-09-22', list_id: 1},
    {id: 6, done: false, name: 'Task 6', description: 'Task without list', duedate: '2022-09-22', list_id: 11}
  ])
  const [task, setTask] = useState()
  const [list_filter, setListFilter] = useState()
    
  const addTask = (task) => {
    setTasks([...tasks, task])
  }
  const deleteTask = (id) => {
    setTasks([...tasks.map(task => task.id === id ? undefined : task)])
  }
  const updateTask = (taskUpdate) => {
    setTask(taskUpdate)
  }
  const changeTask = (changed_task) => {
    setTasks([...tasks.map(task => task.id === changed_task.id ? changed_task : task)])
  }
  const changeDone = (task) => {
    setTasks([...tasks.map(t => t.id === task.id ? task : t)])
  }
  const selectFilter = (id) => {
    setTasks(allTasks.filter(t => t.list_id === id))
    setTaskLists(allLists.filter(l => l.id === id))
  }
  const selectAllTasks = () => {
    setTasks(allTasks)
    setTaskLists(allLists)
  }
  const tasksWithoutList = () => {
    // // let withoutList = allTasks
    // for (let task of allTasks) {
    //   for (let list of lists) {
    //       task.list_id === list.id
    //   }
    // }
    //   // let arr = tasks.filter(t => t.list_id)
    // // setTasks(allTasks.filter(t => ))
    setTaskLists([{id: 0, name: 'Завдання без списку'}])
  }
  return (
    <div id='todolist_app'>
      <Sidebar lists={lists} selectFilter={selectFilter} allTasks={selectAllTasks} tasksWithoutList={tasksWithoutList}/>
      <AddTaskForm lists={lists} tasks={tasks} addTask={addTask}/>
      <UpdateTaskForm lists={lists} task={task} changeTask={changeTask}/>
      <AddListForm/>
      <div id="container">
        <h1>Поточні завдання</h1>
        <Tasks_lists lists={lists_for_tasks_lists} tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} changeDone={changeDone}/>
      </div>
    </div>
  );
}

export default App;
