import React from 'react'
import logo from "../../image/logo (2).png"


const SignIn:React.FC = () => {

  return (
     <div className="flex justify-center items-center mt-20 mx-1 ">
      <div className="border border-gray-200 rounded-2xl w-full md:w-2/4 lg:w-2/4 xl:w-1/3 py-6 px-6 md:p-9 lg:py-12 lg:px-16 xl:p-16">
        <div>
          <img src={logo} alt="" />
        </div>
        <p className="font-semibold text-[23px] md:text-[23px] lg:text-[26px] text-[#404040] my-6 ">
           Sign In to continue with Stack
        </p>

        <div className="mt-14">
          <span className="font-medium text-[#404040]">Email</span>
          <input
            type="email"
            name=""
            required
            className="border py-2 rounded block border-gray-300 w-full"
            id=""
          />
        </div>

        <div className="mt-6">
          <span className="font-medium text-[#404040]">Password</span>
          <input
            type="password"
            name=""
            required
            className="border py-2 rounded block border-gray-300 w-full"
            id=""
          />
        </div>

        <button
          className="bg-[#6941C6] py-3 mt-8 rounded text-white font-semibold text-lg w-full "
          type="submit"
        >
          Sign In
        </button>
      </div>
    </div>
  )
}

export default SignIn
