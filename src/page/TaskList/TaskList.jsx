import React from 'react'
import TaskCard from '../Task/TaskCard/TaskCard'

const TaskList = () => {
  return (
    <div className='w-[67vw]'>
        <div className='space-y-3'>
      {
        [1,1,1,1].map((item,index)=>(<TaskCard key={index}/>))   //here i have made some changes by adding props to the task card as index 
      }
      </div>

    </div>
  )
}

export default TaskList