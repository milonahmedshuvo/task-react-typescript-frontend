import React from 'react'
import logo from "../../image/logo (2).png"
import { Link } from 'react-router-dom'


const SignIn:React.FC = () => {


  const handleForLogin = (event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault()
        console.log("data")
        const target = event.target as typeof event.target & {
             email: {value: string},
             password: {value: string}
        };

        const email = target.email.value;
        const password = target.password.value;

        fetch("https://reqres.in/api/login", {
          method: "POST",
          headers: {
            'content-type':'application/json'
          },
          body: JSON.stringify({email, password})
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          localStorage.setItem('authToken', data.token )
          console.log("token", data.token)
        })
        .catch((err) => console.log(err))
  }






  return (
     <div className="flex justify-center items-center mt-20 mx-1 ">
      <div className="border border-gray-200 rounded-2xl w-full md:w-2/4 lg:w-2/4 xl:w-1/3 py-6 px-6 md:p-9 lg:py-12 lg:px-16 xl:p-16">
        <div>
          <img src={logo} alt="" />
        </div>
        <p className="font-semibold text-[23px] md:text-[23px] lg:text-[26px] text-[#404040] my-6 ">
           Sign In to continue with Stack
        </p>




      {/* creatting sign in form  */}

       <form onSubmit={handleForLogin}>

       <div className="mt-14">
          <span className="font-medium text-[#404040]">Email</span>
          <input
            type="email"
            name="email"
            required
            className="border py-2 rounded block border-gray-300 w-full"
            id=""
          />
        </div>

        <div className="mt-6">
          <span className="font-medium text-[#404040]">Password</span>
          <input
            type="password"
            name="password"
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
       </form>


        <p className="text-[#B0B7C3] text-lg md:text-xl mt-6 ">Don’t have an account? <span> <Link to="/signup"  className="text-[#377DFF]">Sign Up</Link> </span> </p>
      </div>
    </div>
  )
}

export default SignIn
