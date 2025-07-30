import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Topbar from './components/topbar/Topbar'
import Homepage from './pages/homepage/Homepage'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
import Register from './pages/login/Register'
import Sidebar from './components/sidebar/Sidebar'
import Posts from './components/posts/Posts'
import Header from './components/header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div>
        <Topbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/single" element={<Single />} />
          <Route path="/write" element={<Write />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/header" element={<Header />} />
          {/* Add About and Contact routes for navigation */}
          <Route path="/about" element={<div style={{padding:'64px',textAlign:'center'}}><h2>About</h2><p>This is a modern blog app built with React and Vite.</p></div>} />
          <Route path="/contact" element={<div style={{padding:'64px',textAlign:'center'}}><h2>Contact</h2><p>Contact us at: info@blogapp.com</p></div>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
