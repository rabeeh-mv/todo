import React, { useEffect, useState } from 'react'
import '../App.css'
import List from './List'
import Addtodo from './Addtodo'
const Todo = () => {
 const [tasks, setTask] = useState([ ])
 const addtask = (title)=>{
  const newTask = [...tasks, {title}]
  setTask(newTask)
 }
 const removeTask=(index)=>{
  const newTask = [...tasks]
  newTask.splice(index,1)
  setTask(newTask)
 }

  return (
    <div className='bg-center m-10 text-center'>
      <div className=''>
        <h2 className='font-inter text-3xl text-center font-bold m-5'>TODO APP</h2>
        <p className='task-count'>You have <span>{tasks.length}</span> Pending Tasks</p>
      </div>
      <div>
       <Addtodo addtask={addtask}/>
      </div>
      <div className='flex flex-col place-items-center justify-between m-6'>
        {tasks.map((task, index)=>(

        <List task={task} removeTask={removeTask} index={index} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Todo
