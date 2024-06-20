import { RouterProvider, createBrowserRouter } from "react-router-dom"
// import context 
import { UserContext } from "./context"
// import Routerlayout page 
import Routerlayout from "./layout"
// import pages 
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Routerlayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/Portfolio",
          element: <Portfolio />
        }
      ]
    }
  ])
  return (
    <UserContext.Provider value={null}>
      <RouterProvider router={router}/>
    </UserContext.Provider>
  )
}

export default App