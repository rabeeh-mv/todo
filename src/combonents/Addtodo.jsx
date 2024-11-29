import React, { useState } from 'react'

const Addtodo = ({addtask}) => {
  const [value , steValue] = useState("")
  const additem = ()=>{
    addtask(value)
    steValue("")
  }
  return (
    <>
       <input type="text" className='border-solid border m-2 w-80 border-gray-700 p-3 rounded-md' placeholder='add your todo' 
       value={value}
        onChange={(e)=>{steValue(e.target.value)}}/>
       <button className='border-solid border m-2 border-gray-700 hover:text-white hover:bg-gray-600 bg-gray-300 p-3 rounded-md text-inherit'
       onClick={additem}
       > ADD </button>
    </>
  )
}

export default Addtodo
