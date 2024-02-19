/* eslint-disable react/prop-types */
import { FaCircleCheck } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
const Todo = ({todos, handleMarkDone, setUpdateData, handleDelete}) => {
  return (
    <div>
          {
        todos
        // eslint-disable-next-line react/prop-types
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

export default Todo