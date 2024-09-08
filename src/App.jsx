import './index.css'
import Home from './pages/home'
import { useRoutes } from 'react-router-dom'
import About from './pages/about'
function App() {

  
  
  const routes = useRoutes([
    {
      path: '/',
      element: <Home dev="Nweke Favour" title="Hello  I'm Favour" contd="a Frontend Developer"/>
    },
    {
      path: '/about',
      element: <About/>
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
