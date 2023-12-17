import React from 'react'
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";



const Users:React.FC = () => {
  return (
    <div>
      <h2 className='text-3xl'>Users</h2>

     <div className='grid grid-cols-3'>
        <p className='text-[#667085] text-md'>User Info</p>
        <p className='text-[#667085] text-md'>About</p>
        <p className='text-[#667085] text-md'>Status</p>
     </div>


      <div className='grid grid-cols-3'>


           {/* user info  */}
           <div className='border border-red-200 py-2 pl-3'>
            <div>
                <img src="" alt="" />
            </div>

            <p className='text-lg'>user name</p>
            <p className='text-[#667085] text-lg'>milonahmedshuvo@gmail</p>
           </div>




           {/* about */}
           <div className='border border-violet-400 py-2 pl-3 '>
            <p className='text-lg'>Lorem ipsum dolor sit amet.</p>
            <p className='text-[#667085] text-lg' >Lorem ipsum dolor sit amet.</p>
           </div>




           {/* status  */}
           <div className='border border-indigo-400 py-2 px-3 flex justify-between items-center'>
              <p className='text-lg'>Lorem, ipsum dolor.</p>
              
              <div className='flex justify-between gap-10 items-center'>
              <p className='text-xl text-[#667085]'> <FaTrashAlt></FaTrashAlt> </p>
              <p className='text-xl text-[#667085]'> <FaPencilAlt></FaPencilAlt> </p>
              </div>
           </div>



      </div>
    </div>
  )
}

export default Users
