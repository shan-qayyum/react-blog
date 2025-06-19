import React, { Component } from 'react'
import './Header.css'

export class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className="headerTitles">
          <span className='headerTitleSm'>React & Node</span>
          <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImg' src="https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?_gl=1*pctsv*_ga*MzIwOTg5NzU1LjE3NTAzMjg1Mjc.*_ga_8JE65Q40S6*czE3NTAzMjg1MjYkbzEkZzEkdDE3NTAzMjg1MzckajQ5JGwwJGgw" alt="Profile Picture" />
      </div>
    )
  }
}

export default Header
