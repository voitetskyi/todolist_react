import './App.css';

import Sidebar from './components/sidebar';
import Tasks_lists from './components/tasks_lists';

function App() {
  let lists = [
    {id: 1, name: 'List 1'},
    {id: 2, name: 'List 2'},
    {id: 3, name: 'List 3'}
  ]
  let tasks = [
    {id: 1, done: false, name: 'Task 1', description: 'Task description', duedate: '2022-09-22', list_id: 1},
    {id: 2, done: false, name: 'Task 2', description: 'Task description', duedate: '2022-09-22', list_id: 2},
    {id: 3, done: false, name: 'Task 3', description: 'Task description', duedate: '2022-09-22', list_id: 3}
  ]
  return (
    <div id='todolist_app'>
      <Sidebar/>
      <div id="container">
        <h1>Поточні завдання</h1>
        <Tasks_lists lists={lists} tasks={tasks}/>
      </div>
    </div>
  );
}

export default App;
