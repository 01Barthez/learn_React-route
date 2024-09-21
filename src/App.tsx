import { createBrowserRouter, RouterProvider, NavLink } from "react-router-dom"

const NavigationLink = () => {
  return (
    <ul>
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>

      <li>
        <NavLink to="/blog">Blogs</NavLink>
      </li>

      <li>
        <NavLink to="/status">Status</NavLink>
      </li>

      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
  </ul>
  )
}

function App() {
  const Router = createBrowserRouter([
    {
      path: '*',
      element: <>
        <h1>404 not found</h1>
        <NavigationLink/>
      </>
    },
    
    {
      path: '/home',
      element: <>
        <h1>Home</h1>
        <NavigationLink/>
      </>
    },

    {
      path: '/blog',
      element: <>
        <h1>blog page</h1>
        <NavigationLink/>
      </> 
    },

    {
      path: '/status',
      element: <>
        <h1>status page</h1>
        <NavigationLink/>
      </> 
    },

    {
      path: '/contact',
      element: <>
        <h1>Contact page</h1>
        <NavigationLink/>
      </> 
    },
  ])

  return (
    <RouterProvider router={Router}/>
  )
}

export default App
