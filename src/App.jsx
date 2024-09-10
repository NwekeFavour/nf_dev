import './index.css'
import Home from './pages/home'
import { useRoutes } from 'react-router-dom'
import About from './pages/about'
import Shelf from './pages/shelf'
import Contact from './pages/contactPage'
function App() {
  
  const routes = useRoutes([
    {
      path: '/',
      element: <Home dev="Nweke Favour" title="Hello  I'm Favour" contd="a Frontend Developer"/>
    },
    {
      path: '/about',
      element: <About/>
    },
    {
      path: 'lib/shelf',
      element: <Shelf/>
    },
    {
      path: '/contact',
      element:<Contact/>
    }
  ])
  return (
    <>
      <div>
          {routes}
      </div>
    </>
  )
}

export default App
