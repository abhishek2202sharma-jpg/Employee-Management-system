import React from 'react'
import Header from '../other/Header'
import AllTask from '../other/AllTask'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10 '>
        <Header/>
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded]'>
            <form className='flex flex-wrap w-full items-start justify-between'>
               <div className='w-1/2 '>
               <div>
                 <h3 className='mb-1 text-sm text-gray-300 '>
                    Task Title
                </h3>
                <input className='outline-none rounded w-4/5 border-[1px] border-gray-400 text-sm py-1 px-2 bg-transparent mb-4 ' type='text' placeholder='Make a Ui design'/>
                </div>
                   <div>
                    <h3 className='mb-1 text-sm text-gray-300 '>
                    Date
                </h3>
                <input className='outline-none rounded w-4/5 border-[1px] border-gray-400 text-sm py-1 px-2 bg-transparent mb-4' type='date'/>
                </div>
                <div>
                    <h3 className='mb-1 text-sm text-gray-300'>
                    Asign to
                </h3>
                <input className='outline-none rounded w-4/5 border-[1px] border-gray-400 text-sm py-1 px-2 bg-transparent mb-4' type='text' placeholder='Employee name'/>
                </div>
                <div>
                    <h3 className='mb-1 text-sm text-gray-300'>Category</h3>
                <input className='outline-none rounded w-4/5 border-[1px] border-gray-400 text-sm py-1 px-2 bg-transparent mb-4' type='text' placeholder='design,dev,etc.'/></div>
                </div>
                <div className='w-2/5 flex flex-col items-start'>
                <h3 className='mb-1 text-sm text-gray-300'>
                    Description
                </h3>
                <textarea className='outline-none w-full h-44 rounded border-[1px]  border-gray-400 text-sm py-2 px-4 bg-transparent' name="" id="" cols="30" row="10"> </textarea>
                     <button className='bg-green-500 w-full mt-4 text-sm  text-black py-2 px-4 rounded-md hover:bg-green-600'>Create Task</button>
                    
             </div>

            </form>
        </div>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard