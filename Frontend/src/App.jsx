import Admin from "./Admin/Admin";
import Layout from "./Components/Layout"
import Home from "./Components/One/Content/Home";
import One from "./Components/One/One";
import Serivce from "./Components/Serivce"
import Footer from "./Components/Three/Footer/Footer"
import { Router,RouterProvider,createBrowserRouter } from "react-router-dom"

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path : "/",
  //     element : <Layout/>,
  //     children : [
  //       {
  //         path : "/",
  //         element : <Home/>
  //       },
  //       {
  //         path : "/service",
  //         element : <Serivce/>
  //       }
  //     ]
  //   }
  // ])
 
  return (
    <>
    {/* <One/> */}
    {/* <Footer/> */}
    {/* <RouterProvider router={router} ></RouterProvider> */}
    <Admin/>
    </>
  )
}

export default App
