import './App.css';
import { useState, useEffect } from 'react';
import AddTaskForm from './components/AddTaskForm';
import UpdateForm from './components/UpdateForm';
import Todo from './components/Todo';
const App = () => {
  const initialTodos = JSON.parse(localStorage.getItem('todos')) || [];
  const [todos, setTodos] = useState(initialTodos);
  //state to add new tasks
  const [newTask, setNewTask] = useState('');
  
  //state for editing the data
  const [updateData, setUpdateData] = useState('');
  const saveTodosToLocalStorage = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };
  
  //Add task
  const handleAddTask = () => {
    if(newTask){
      let num  = todos.length + 1;
      let newEntry = {id: num, title: newTask, status: false};
      setTodos([...todos, newEntry]);
      setNewTask('');
      localStorage.setItem('todos', JSON.stringify([...todos, newEntry]));

    }
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

  useEffect(() => {
    saveTodosToLocalStorage(todos);
  }, [todos]);


  return (
  <div className='App'>
      <h2>TODO LIST APP</h2>
      {updateData && updateData ? (
       <UpdateForm 
       updateData={updateData}
       handleChangeTask={handleChangeTask}
       handleUpdateTask={handleUpdateTask}
       handleCancelUpdate={handleCancelUpdate}/>
      ) : 
  <AddTaskForm 
  newTask={newTask} 
  setNewTask={setNewTask}
  handleAddTask={handleAddTask}
  changeInput = {changeInput}
   />
      }
      
      {todos && todos.length ? '' : 'No Tasks'}
    <Todo todos={todos} handleMarkDone={handleMarkDone} handleDelete={handleDelete} setUpdateData={setUpdateData} />
  </div>
  )
      }
      

export default App