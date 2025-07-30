import React, { useState } from 'react'
import './Login.css'

export default function Login() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    // Simulate async login
    setTimeout(() => {
      setLoading(false)
      // setError('Invalid credentials') // Uncomment for error demo
    }, 1200)
  }

  return (
    <div className='login'>
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder='Enter Your Email...' required autoFocus />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder='Enter Your Password...' required />
        {error && <span className="loginError">{error}</span>}
        <button className="loginButton" type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <a href="#" className="loginForgot">Forgot Password?</a>
        <button className="loginRegisterButton" type="button">Register</button>
      </form>
    </div>
  )
}
