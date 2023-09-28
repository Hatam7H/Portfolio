import './home.css'
import { useEffect } from 'react'
import Portfolio from '../../assets/portfolio.jpg'
import { BsGithub } from 'react-icons/bs'
import { BiLogoLinkedin } from 'react-icons/bi'
import { FaRegHandPointer } from 'react-icons/fa'


import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(() => {
    Aos.init({ duration: 600 })
  }, [])

  return (
    <div id="Home" className='home'>
      <div className='home_picture'  data-aos="flip-up" data-aos-duration="2000">
        <div className='home_bg-picture'>
          <img src={Portfolio}/>
        </div>
        <div className='home_icons'>
          <a href="https://github.com/Hatam7H"><BsGithub size={30}/></a>
          <a href=""><BiLogoLinkedin size={30}/></a>
        </div>
      </div>
      <div className='home_info'>
        <h1>Hi I'm Hatam &#x1f44b;</h1>
        <h2>Front-End Developer</h2>
        <p>High level experience in web development <br /> knowledge, creating high quality work.</p>
        <button className='section-button'><a href='mailto:hatam.007.h@gmail.com'>Contact Me <FaRegHandPointer size={17}/></a></button>
      </div>
    </div>
  )
}

export default Home