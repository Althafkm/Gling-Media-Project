import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import Blog from './Components/Blog/Blog'
import BlogPost from './Components/Blog/BlogPost'
import TestFirestore from './TestFirestore';


const Home = ({ playState, setPlayState }) => {
  return (
    <>
      <Hero />
      <div className="container">
        {/* <Title subTitle='Our PROGRAM' title='What We Offer'/> */}
        <Programs />
        <About setPlayState={setPlayState} />
        {/* <Title subTitle='Gallery' title='Campus Photos'/> */}
        {/* <Campus /> */}
        <Title subTitle='REAL STORIES, REAL IMPACT' title='Voices That Inspire' />
        <Testimonials />
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact />
        <Footer />
        <TestFirestore />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </>
  );
};

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
  <Route path="/" element={<Home playState={playState} setPlayState={setPlayState} />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/blog/:slug" element={<BlogPost />} />
</Routes>

    </Router>
  )
}

export default App
