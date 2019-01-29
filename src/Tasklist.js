 import React from 'react';
 import Task from './Task';

 const TaskList = ({list}) => {
    return list.map((task,index)=>{
      return <Task task={task} key={index} />
    })
  }

  export default TaskList