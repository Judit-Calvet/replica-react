import React from 'react'
import { Link } from 'react-router-dom'
import twitter from '../assets/twitter.svg'
import facebook from '../assets/facebook.svg'

const Footer = () => {
  return (
    <div>

      <div className='contact'>
        <ul>
            <Link to = '/aboutus'><li>About Us</li></Link>
            <Link to = '/contact'><li>Contact</li></Link>
        </ul>
      </div>

      <ul className='media'>
        <li><a href='https://twitter.com'><img src={twitter} alt='Twitter logo'/>Twitter</a></li>
        <li><a href='https://facebook.com'><img src={facebook} alt='Facebook logo'/>Facebook</a></li>
      </ul> 
    </div>
  )
}

export default Footer
