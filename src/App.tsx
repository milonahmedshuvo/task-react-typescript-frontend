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
// redux 
import { store } from './redux/store';
import { Provider } from 'react-redux'









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
      <Provider store={store}> 
      <RouterProvider router={router} />
      </Provider>
    </div>
  )
}

export default App;