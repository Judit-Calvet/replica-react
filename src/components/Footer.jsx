import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import twitter from '../assets/twitter.svg'
import facebook from '../assets/facebook.svg'

export const Footer = () => {
  return (
   <footer>
    <Navbar bg="dark" variant="dark">
        <Container>
        <Nav className="me-auto">
            <Nav.Link as={Link} to="/AboutUs">About Us</Nav.Link>
            <Nav.Link  as={Link} to="/Contact">Contact</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/twitter"> <img
              src={twitter}
              width="20"
              height="20"
              className="d-inline-block align-top me-2"
              alt="twitter"
            /> Twitter</Nav.Link>
            <Nav.Link as={Link} to="/facebook"><img
              src={facebook}
              width="20"
              height="20"
              className="d-inline-block align-top me-2"
              alt="facebook"
            />Facebook</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </footer>

  )
}



/*const Footer = () => {
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
}*/

export default Footer
