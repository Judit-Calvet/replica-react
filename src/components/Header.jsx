import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg' 

const Header = () => {
  return (
    <header>
      <img src={logo} alt='Sound Wave Logo'></img> 
      <h1>Soundwave</h1>
      <nav>
        <ul>
            <Link to = '/discover'><li>Discover</li></Link>
            <Link to = '/join'><li>Join</li></Link>
        </ul>
      </nav>
    </header>
  )
}
export default Header
