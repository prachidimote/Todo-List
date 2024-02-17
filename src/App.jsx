import './App.css';
import { useState } from 'react';
import { FaCircleCheck } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
const App = () => {
  const [todos, setTodos] = useState([ 
    {id: 2, title: "Task 2", status: false},
    {id: 1, title: "Task 1", status: false},
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
  const handleMarkDone = (id) => {
    let newTask = todos.map((task) => {
      if(task.id === id){
        return({...task, status: !task.status})
      }
      return task;
    })
    setTodos(newTask);
  }

  //Change task for update
  const handleCancelUpdate = () => {
    setUpdateData('');
  }

  //Change task for update
  const handleChangeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  }

  //update task
  const handleUpdateTask = () => {
    let filteredRecords = [...todos].filter(task => task.id !== updateData.id);
    let updatedObject = [...filteredRecords, updateData];
    setTodos(updatedObject);
    setUpdateData('');
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
    <input
    value={updateData && updateData.title}
    onChange={(e) => handleChangeTask(e)} 
    type="text" 
    id="small-input" 
    className="block w-full p-2  border-none rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    <button 
    onClick={handleUpdateTask}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
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
              <span 
              onClick={() => handleMarkDone(task.id)}
              title='Completed/Not Completed'
              ><FaCircleCheck/></span>
            {task.status ? null : (
                <span 
                onClick={() => setUpdateData({
                  id: task.id, 
                  title: task.title,
                  status: task.status ? true : false
                })}
                title='Edit'><MdEdit /></span>
            )}
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