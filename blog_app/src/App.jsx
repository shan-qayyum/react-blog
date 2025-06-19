import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Topbar from './topbar/Topbar'
import Home from './pages/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Topbar/>
        <Home/>
      </div>
    </>
  )
}

export default App
