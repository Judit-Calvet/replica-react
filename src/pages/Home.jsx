import React from 'react'
import Header from '../components/Header'
//import { Link } from 'react-router-dom'
import ButtonJoin from '../components/ButtonJoin'
import Woman from '../assets/landing-page-girl.png'

const Home = () => {
  return (
    <div>
      < Header />
      <img src={Woman} alt="Afro woman chilling"></img>
      <h1>Fell The Music</h1>
      <p> Steam over 20 thousands songs with one click</p>
      <ButtonJoin />
    </div>
  )
}

export default Home



    /*<div>
      <header>
        <h1> Header </h1>
        <Link to ='/discover'>Discover</Link>
      </header>
      < Home />
      <footer>
        <h1> Footer </h1>
        <a href='http://facebook.com'>Facebook</a>
      </footer>
    </div>*/