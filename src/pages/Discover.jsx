import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import covers from '../assets/covers.jpg'

const Discover = () => {
  return (
    <>
      <div>
        <Header />
      </div>

      <div className='phaDisc'>
        <h1> Discover New Music</h1>
          <ul>
            <button><li>Charts</li></button>
            <button><li>Albums</li></button>
            <button><li>More</li></button>
          </ul>
          <p>By joining you can benefit by listening to de latest albums releaset</p>
      </div>

      <div className='imgDisc'>
        <img src={covers} alt="Grid with the covers of some albums"></img>
      </div>

      <div>
        <Footer />
      </div>
    </>
  )
}

export default Discover
