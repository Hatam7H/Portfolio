import { useState, useEffect } from 'react'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs'
import { TbWorldWww } from 'react-icons/tb'
import lotterybtc from '../../assets/lotterybtc.png'
import instrument from '../../assets/instrument.png'
import './projects.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  return (
    <div id='Projects' className='projects'>
      <div>
        <h2 className='section-title'>Projects</h2>
        <p className='section-subtitle'>Most recent work</p>
      </div>
      <div className='projects-container' data-aos="fade-down">
        <img src={lotterybtc} className='projects-img'/>

        <div className='projects-container-data'>
          <h3 className='projects-container-data-title'>Lottery bitcoin</h3>
          <p className='projects-container-data-description'>Website adaptable to all devices,<br/> with animation and timer functionality</p>
          <div className='svg-container'>
            <a className='svg' href="https://1lotterybitcoin.com/"><TbWorldWww/></a>
            <a className='svg' href="https://github.com/Hatam7H/Instrument"><BsGithub/></a>
          </div>
        </div>
      </div>

      {/* -----Other projects section */}
      {toggleMenu
        ? <></>
        : <a className='skills_container-link' onClick={() => setToggleMenu(true)}><MdOutlineKeyboardArrowDown size={40}/></a>
      }
      {toggleMenu &&
        <div>
          <div className='projects-container'  data-aos="fade-down">
            <img src={instrument} className='projects-img'/>
    
            <div className='projects-container-data'>
              <h3 className='projects-container-data-title'>Instrument</h3>
              <p className='projects-container-data-description'>Website adaptable to all devices,<br/> with animation and timer functionality</p>
              <div className='svg-container'>
                <a className='svg' href="https://1lotterybitcoin.com/"><TbWorldWww/></a>
                <a className='svg' href="https://github.com/Hatam7H/Instrument"><BsGithub/></a>
              </div>
            </div>
          </div>
          <a className='skills_container-link' onClick={() => setToggleMenu(false)}><MdOutlineKeyboardArrowUp size={40}/></a>
        </div>
      }
    </div>
  )
}

export default Projects