import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../image/image (2).png"
import { IoSearchOutline } from "react-icons/io5"
import { CiSettings } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io"




// interface NavbarProps {
//     // Define your props here
//   }



const Navber:React.FC = () => {

  
  return (
    <div className='bg-[#6941C6] py-6 px-2 md:px-6 flex flex-col md:flex-row lg:flex-row xl:flex-row gap-10 justify-between items-center'>


        <div className='flex items-center'>

         <div className='flex items-center'>
             <img className='text-white' src={logo} alt="" />
                <h3 className='text-white text-xl font-medium ml-4'>Stack</h3>
         </div>

         <div className='flex items-center ml-10' >
         <Link to="/" className='mx-2 text-lg  text-white '> Home </Link>
         <Link to="/users" className='mx-2 text-lg  text-white'> Users </Link>
         <Link to="/dashboard" className='mx-2 text-lg  text-white'>Dashboard</Link>
         <Link to="/signup" className='mx-2 text-lg  text-white ' > Signup </Link>
         <Link to="/signin" className='mx-2 text-lg  text-white ' > Signin </Link>
         </div>

         

        </div>



        {/* secound  */}

        <div className='flex items-center'>
          <span className='text-white text-xl mx-3'> <IoSearchOutline></IoSearchOutline> </span>
          <span className='text-white text-xl mx-3'> <CiSettings></CiSettings> </span>
          <span className='text-white text-xl mx-3'> <IoMdNotificationsOutline></IoMdNotificationsOutline> </span>


          <div >
          <img className='w-10 h-10 rounded-full mx-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMhknfqxthofourldG2nWcFgmgG6k9Rem-vA&usqp=CAU" alt="" />
         </div>
        </div>


    </div>
  )
}

export default Navber;