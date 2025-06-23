import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Topbar from './components/topbar/Topbar'
import Homepage from './pages/homepage/Homepage'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Topbar/>
        <Settings />
      </div>
    </>
  )
}

export default App
