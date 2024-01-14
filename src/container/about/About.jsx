import './about.css' 
import { useEffect } from 'react'
import { FiDownload } from 'react-icons/fi'
import aboutimg from '../../assets/aboutimg.png'
import resume from '../../assets/Resume.pdf'

import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {
    
  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  return (
    <div id='About' className='about' data-aos="fade" data-aos-duration="1000">
      <div></div>
      <div>
        <h2 className='section-title header-about'>About Me</h2>
        <p className='section-subtitle under-header-about'>My introduction</p>
      </div>
      <div className='about_content-info'>      

        <p className='about_content-info-paragraph'>I am an experienced Front-End Developer with 2+ years <br/> of experience in building websites for my clients. creating websites <br/>such as Portfolio, Business, Informational, Blog, E-Commerce.</p>
        <div className='about-content-info-cv'>
          <div>
            <h3>02+</h3>
            <p>years of experience</p>
          </div>
          <div>
            <h3>5+</h3>
            <p>Completed Projects</p>
          </div>
        </div>
        <button className='section-button'>
          <a download="" href={resume}>Download CV <FiDownload size={17}/></a>
        </button>
        <div className='overlay'></div>
      </div>
    </div>
  )
}

export default About