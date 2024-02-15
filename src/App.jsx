import './App.css';
import { useState } from 'react';
import { FaCircleCheck } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
const App = () => {
  const [todos, setTodos] = useState([ 
    {id: 2, title: "Task 2", status: false},
    {id: 1, title: "Task 1", status: true},
  ]);
  //state to add new tasks
  const [newTask, setNewTask] = useState('');
  
  //state for editing the data
  const [updateData, setUpdateData] = useState('');

  //Add task
  const handleAddTask = () => {
    if(newTask){
      let num  = todos.length + 1;
      let newEntry = {id: num, title: newTask, status: false};
      setTodos([...todos, newEntry]);
      setNewTask('');

    }
  }

  //Edit task
  const handleEdit = () => {
    //
  }

  //Delete task
  const handleDelete = (id) => {
    let deleteItem = todos.filter((task) => task.id !== id);
    console.log(deleteItem);
    setTodos(deleteItem);
  }

  //Mark task as done or completed
  const handleMark = (id) => {
    //
  }

  //Change task for update
  const handleCancelUpdate = () => {
    //
  }

  //Change task for update
  const handleChangeTask = (e) => {
    //
  }

  //update task
  const handleUpdateTask = () => {
    //
  }

  const changeInput = (event) => {
  const add = event.target.value;
  console.log(add);
  setNewTask(event.target.value);
  }

  return (
  <div className='App'>
      <h2>TODO LIST APP</h2>
      <div className='row'>
      <div>
    <input type="text" id="small-input" className="block w-full p-2  border-none rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />

    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  Update 
</button>
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  Cancel
</button>
</div>
<div>
    <input 
    value={newTask}
    // onChange={(e) => setNewTask(e.target.value)}
    onChange={changeInput}
    type="text" 
    id="small-input" 
    className="block w-full p-2  border-none rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    <button 
    onClick={handleAddTask}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  Add Task
</button>

</div>

      </div>
      {todos && todos.length ? '' : 'No Tasks'}
      {
        todos
        .sort((a,b) => a.id > b.id ? 1 : -1)
        .map((task, index) => {
          return(
            <div key={task.id}>
            <div className='col taskbg'>
            <div className={task.status ? 'done' : ''}>
            <span className='taskNumber'>{index + 1}</span>
            <span className='taskText'>{task.title}</span>
            </div>
            <div className='iconsWrap'>
              <span title='Completed/Not Completed'><FaCircleCheck/></span>
              <span title='Edit'><MdEdit /></span>
              <span title='Delete' onClick={() => handleDelete(task.id)}><MdDeleteForever /></span>
            </div>
            </div>
            </div>
          )
        })
      }
  </div>
  )
}

export default App