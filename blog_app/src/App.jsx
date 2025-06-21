import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Topbar from './components/topbar/Topbar'
import Homepage from './pages/homepage/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Topbar/>
        <Homepage/>
      </div>
    </>
  )
}

export default App
