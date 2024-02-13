import './App.css';
import { useState } from 'react';
import { FaCircleCheck } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
const App = () => {
  const [todos, setTodos] = useState([ 
    {id: 1, title: "Task 1", status: true},
    {id: 2, title: "Task 2", status: false},
  ]);
  //state to add new tasks
  const [newTask, setNewTask] = useState('');
  
  //state for editing the data
  const [updateData, setUpdateData] = useState('');

  //Add task
  const handleAddTask = () => {
    //
  }

  //Edit task
  const handleEdit = () => {
    //
  }

  //Delete task
  const handleDelete = (id) => {
    //
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

  return (
  <div className='App'>
      <h2>TODO LIST APP</h2>
      {todos && todos.length ? '' : 'No Tasks'}
      {
        todos.map((task, index) => {
          return(
            <div key={task.id}>
            <div className='col taskbg'>
            <div className={task.status ? 'done' : ''}>
            <span className='taskNumber'>{index + 1}</span>
            <span className='taskText'>{task.title}</span>
            </div>
            <div className='iconsWrap'>
              <span><FaCircleCheck/></span>
              <span><MdEdit /></span>
              <span><MdDeleteForever /></span>
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