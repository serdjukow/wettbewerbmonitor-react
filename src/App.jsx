import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { useRoutes } from './routes'

function App() {
  const routes = useRoutes()

  return (
    <BrowserRouter>
      <Suspense fallback={'Loading...'}>{routes}</Suspense>
    </BrowserRouter>     
  )
}

export default App