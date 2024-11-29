import React from 'react'

const List = ({task , index, removeTask}) => {
  return (
    <>
      <div className=' flex flex-row place-items-center justify-between pl-4 border-solid border m-1 w-80 border-sky-500 p-1 rounded-md text-center text-current'>
            <h5>{task.title}</h5> 
            <button className='border-solid border m-1 w-20 border-sky-500 p-1 rounded-md text-center text-current' 
            onClick={()=>{removeTask(index)}}>Delet</button>
        </div>
    </>
  )
}

export default List
