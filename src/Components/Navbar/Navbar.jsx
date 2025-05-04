import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo4 from '../../assets/logo4.png'
import menu_icon from '../../assets/menu-icon.png'

import { Link as ScrollLink, scroller } from 'react-scroll'
import { Link as RouterLink, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const location = useLocation()

  const isHomePage = location.pathname === "/"
  const isBlogPage = location.pathname === "/blog"

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setMobileMenu(prev => !prev)
  }

  const handleScrollLink = (target) => {
    if (!isHomePage) {
      sessionStorage.setItem("scrollTo", target)
      window.location.href = "/"
    }
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''} ${!isHomePage ? 'blog-nav' : ''}`}>
      <RouterLink to="/"><img src={logo4} alt="Logo" className='logo' /></RouterLink>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          <ScrollLink to='hero' smooth={true} offset={0} duration={500} onClick={() => handleScrollLink('hero')}>
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to='program' smooth={true} offset={-260} duration={500} onClick={() => handleScrollLink('program')}>
            Program
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to='about' smooth={true} offset={-150} duration={500} onClick={() => handleScrollLink('about')}>
            About us
          </ScrollLink>
        </li>
        <li>
          <ScrollLink to='testimonials' smooth={true} offset={-260} duration={500} onClick={() => handleScrollLink('testimonials')}>
            Testimonials
          </ScrollLink>
        </li>
        <li onClick={() => setMobileMenu(false)}>
          <RouterLink to="/blog">Blog</RouterLink>
        </li>
        <li>
          <ScrollLink to='contact' smooth={true} offset={-260} duration={500} className='btn' onClick={() => handleScrollLink('contact')}>
            Contact us
          </ScrollLink>
        </li>
      </ul>
      <img src={menu_icon} alt="menu" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
