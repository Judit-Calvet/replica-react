import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import covers from '../assets/covers.jpg'
import albums from '../assets/albums.svg'
import micro from '../assets/microphone.svg'
import more from '../assets/more.svg'

const Discover = () => {
  return (
      <>
      <div>
        <Header />
      </div>
      
      <div className='phaDisc'>
        <h1> Discover New Music</h1>
      </div>

      <div>
        <ul className='buttonsDisc'>
          <li><img src={micro} alt='Button Charts' />Charts</li>
          <li><img src={albums} alt='Button Albums' />Albums</li>
          <li><img src={more} alt='Button More' />More</li>
        </ul>
      </div>

      <div>
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
