import './App.css'
// import SignIn from './Components/SignIn/SignIn';
// import Singup from './Components/Singup/Singup';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Users from './Components/Users/Users';
import Signup from './Components/Singup/Singup';
import SignIn from './Components/SignIn/SignIn';




function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path:"/users",
          element: <Users/>
        },
        {
          path: "/signup",
          element: <Signup/>
        },
        {
          path: "/Signin",
          element: <SignIn/>
        }
      ]
    },
  ]);



  return (
    <div className='max-w-screen-2xl mx-auto'>
      {/* <h1>React Projects </h1> */}
      {/* <Singup></Singup> */}
      {/* <SignIn></SignIn> */}
      <RouterProvider router={router} />
    </div>
  )
}

export default App;