import React from 'react'
import './About.css'
import about_img from '../../assets/aboutBacground.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
     <div className="about-right">
  <h3>WHAT WE LOVE DOING?</h3>
  <h2>Empowering Digital Success Today</h2>
  <p>
    We provide <strong>comprehensive digital marketing solutions</strong> to elevate your business. 
    Our <strong>Social Media Management</strong> increases brand visibility and engagement across 
    <strong>Facebook, Instagram, LinkedIn, and Twitter</strong>, ensuring a strong online presence.
  </p>
  <p>
    Our <strong>Performance Marketing strategies</strong> leverage <strong>Google Ads, Meta Ads, and 
    YouTube Ads</strong> to drive data-backed campaigns for maximum <strong>ROI and conversions</strong>.
  </p>
  <p>
    We specialize in <strong>Web and Mobile Application Development</strong>, creating seamless  
    <strong> user-centric digital experiences</strong>. Through <strong>Digital Consulting</strong>, 
    we provide strategic insights that help businesses thrive in the digital era.
  </p>
  <p>
    Our <strong>Lead Generation Systems</strong> capture high-quality leads, while our 
    <strong>Sales Systems</strong> optimize conversions for <strong>consistent revenue growth</strong>. 
    At <strong>Gling Media</strong>, we transform your digital potential into measurable success.
  </p>
</div>

    </div>
  )
}

export default About
