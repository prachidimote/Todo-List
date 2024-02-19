/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
const AddTaskForm = ({newTask, setNewTask, handleAddTask, changeInput}) => {
  return (
    <>
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
    </>
  )
}

export default AddTaskForm