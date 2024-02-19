/* eslint-disable react/prop-types */
const UpdateForm = ({updateData, handleChangeTask, handleUpdateTask, handleCancelUpdate}) => {
  return (
    <>
    <div className='row'>
        <div>
      <input
      // eslint-disable-next-line react/prop-types
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
  <button 
  onClick={handleCancelUpdate}
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
    Cancel
  </button>
  </div>
 
        </div>
    </>
  )
}

export default UpdateForm