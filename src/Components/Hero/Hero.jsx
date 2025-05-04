import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6947421541247025"
     crossorigin="anonymous"></script>
      <div className="hero-text">
        <h1>Leading the Way in Digital Excellence





</h1>
        <p>Innovative strategies that equip businesses with the right tools, insights, and solutions to navigate and thrive in today’s fast-paced digital world.











</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6947421541247025"
     crossorigin="anonymous"></script>
    </div>
  )
}

export default Hero
