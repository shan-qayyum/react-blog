import React, { useState } from 'react'
import './Register.css'

export default function Register() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    // Simulate async registration
    setTimeout(() => {
      setLoading(false)
      // setError('Registration failed') // Uncomment for error demo
    }, 1200)
  }

  return (
    <div className='register'>
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder='Enter Your Username...' required autoFocus />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder='Enter Your Email...' required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder='Enter Your Password...' required />
        {error && <span className="registerError">{error}</span>}
        <button className="registerButton" type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
        <a href="#" className="registerLogin">Already have an account? Login</a>
      </form>
    </div>
  )
}
