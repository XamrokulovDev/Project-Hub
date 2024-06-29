import { RouterProvider, createBrowserRouter } from "react-router-dom"
// import context 
import { UserContext } from "./context"
// import Routerlayout page 
import Routerlayout from "./layout"
// import pages 
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Services from "./pages/Services"
import Team from "./pages/Team"

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
        },
        {
          path: "/Services",
          element: <Services />
        },
        {
          path: "/Team",
          element: <Team />
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