import { createBrowserRouter, RouterProvider, NavLink, useParams, Outlet } from "react-router-dom"

const NavigationLink = () => {
  return (
    <ul>
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>

      <li>
        <NavLink to="/blog">Blogs:id</NavLink>
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

const PageError = () => {
  return (
    <>
      <h1>Page Error</h1>  

      <p>
        {/* {error?.error?.toString() ?? error?.toString()} */}
      </p>
    </>
  )
}

const SingleBlog = () => {
  const { id } = useParams();
  
  return (
    <h2>Blog N: {id} </h2>
  )
}

const Router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <WatchRoutes/>
    </>,
    errorElement: <PageError/>,
    children: [
      {
        path: 'Home',
        element: <>
          <h2>Home Page</h2>
        </>,
      },
      {
        path: 'Status',
        element: <>
          <h2>Status Page</h2>
        </>,
      },
      {
        path: 'blog/',
        element: <>
            <Outlet/>
        </>,
        children: [
          {
            path: '',
            element: <h2>Blog Page</h2>
          },
          {
            path: ':id',
            element: <>
              <SingleBlog />
            </> 
          }
        ]
      },

      {
        path: 'contact',
        element: <>
          <h2>Contact Page</h2>
        </>,
      },
    ]
  },

    // {
    //   path: '*',
    //   element: <>
    //     <h1>404 not found</h1>
    //     <NavigationLink/>
    //   </>
    // },
    
    // {
    //   path: '/home',
    //   element: <>
    //     <h1>Home</h1>
    //     <NavigationLink/>
    //   </>
    // },

    // {
    //   path: '/blog',
    //   element: <>
    //     <h1>blog page</h1>
    //     <NavigationLink/>
    //   </> 
    // },

    // {
    //   path: '/blog/:id',
    //   element: <>
    //     <SingleBlog />
    //     <NavigationLink/>
    //   </> 
    // },


    // {
    //   path: '/status',
    //   element: <>
    //     <h1>status page</h1>
    //     <NavigationLink/>
    //   </> 
    // },

    // {
    //   path: '/contact',
    //   element: <>
    //     <h1>Contact page</h1>
    //     <NavigationLink/>
    //   </> 
    // },
])
  
function WatchRoutes() {
  return (
    <>
      <header>
        <NavigationLink/>
      </header>

      <main>
        {/* rendu */}
        <h2></h2>
        <Outlet/>
      </main>
    </>
  )
}

function App() {
  return (
    <>
      <RouterProvider router={Router}/>
    </>
  )
}

export default App
