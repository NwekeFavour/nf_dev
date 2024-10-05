import './index.css'
import Home from './pages/home'
import { useRoutes } from 'react-router-dom'
import About from './pages/about'
import Shelf from './pages/shelf'
import Contact from './pages/contactPage'
import { useEffect, useState } from 'react'
import { RiseLoader } from 'react-spinners'
function App() {
  const [loading,setLoading] = useState(false)
  const routes = useRoutes([
    {
      path: '/',
      element: <Home dev="Nweke Favour" title="Hello  I'm Favour" contd="a Frontend Developer"/>
    },
    {
      path: '/home',
      element: <Home dev="Nweke Favour" title="Hello  I'm Favour" contd="a Frontend Developer"/>
    },
    {
      path: '/about',
      element: <About/>
    },
    {
      path: '/lib/shelf',
      element: <Shelf/>
    },
    {
      path: '/contact',
      element:<Contact/>
    }
  ])

  useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 5000)
  },[])
  return (
    <>
      <div> 
        {
          loading ? 
            <div className='bg-[#D2B48C] loader'>
              <div className='flex items-center  justify-center relative top-[270px] '>
                <RiseLoader
                  size={10}
                  loading={loading}
                  aria-label='loading spinner'
                  color='#008080'
                  data-testid='loader'
                />
              </div>
            </div>

          :
            <div>
              {routes}
            </div>
        }
      </div>
    </>
  )
}

export default App
