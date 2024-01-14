import Skillbox from '../../components/skillbox/Skillbox'
import { useState, useEffect } from 'react'
import { BsBraces, BsDatabaseAdd } from 'react-icons/bs'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { GiSkills } from 'react-icons/gi'
import './skills.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

// Icons imported from React icon
import { BiLogoWordpress, BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoTypescript, BiLogoJquery, BiLogoPhp, BiLogoGit, BiLaptop } from 'react-icons/bi'
import {AiFillApi} from 'react-icons/ai'
import { SiMysql } from 'react-icons/si'



const Skills = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [toggleMenu2, setToggleMenu2]= useState(false)
  const [toggleMenu3, setToggleMenu3]= useState(false)

  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  return (
    <div id='Skills' className='skills'>
      <div>
        <h2 className='section-title'>Skills</h2>
        <p className='section-subtitle'>My technical level</p>
      </div>
      <div className='skills-container'>

        {/* -----Frontend Skills----- */}
        <div className='skills-content' data-aos="zoom-in" data-aos-duration="400">
          <div className='skills-header'>
            <BsBraces className='skills_icon'/>

            <div className='skills-header-heading'>
              <h1>Frontend developer</h1>
              <p>More than 2 years of experience</p>
            </div>
            {toggleMenu
              ? <MdOutlineKeyboardArrowUp className='skills_icon' onClick={() => setToggleMenu(false)}/>
              : <MdOutlineKeyboardArrowDown className='skills_icon' onClick={() => setToggleMenu(true)}/>
            }
          </div>
          {toggleMenu && (
            <div>
              <Skillbox lan="HTML" svg={(<BiLogoHtml5 color='#FF5733'/>)} per="90%" styl={{"background-color": "red"}} />
              <Skillbox lan="Css" svg={(<BiLogoCss3 color='#264de4'/>)} per="80%"/>
              <Skillbox lan="JavaScript" svg={(<BiLogoJavascript color='#F0DB4F'/>)} per="60%" dataname="css"/>
              <Skillbox lan="React" svg={(<BiLogoReact color='#61DBFB'/>)} per="80%"/>
              <Skillbox lan="TypeScript" svg={(<BiLogoTypescript color='#007acc'/>)} per="InProgress.."/>
              <Skillbox lan="Jquery" svg={(<BiLogoJquery color='#0769ad'/>)} per="InProgress.."/>
            </div>
          )
          }
        </div>

        {/* -----Backend SkillBox----- */}
        <div className='skills-content' data-aos="zoom-in" data-aos-duration="600">
          <div className='skills-header'>
            <BsDatabaseAdd className='skills_icon'/>

            <div className='skills-header-heading'>
              <h1>Backend developer</h1>
              <p>1 Year of experience</p>
            </div>
            {toggleMenu2
              ? <MdOutlineKeyboardArrowUp className='skills_icon' onClick={() => setToggleMenu2(false)}/>
              : <MdOutlineKeyboardArrowDown className='skills_icon' onClick={() => setToggleMenu2(true)}/>
            }
          </div>
          {toggleMenu2 && (
            <div>
              <Skillbox lan="Php" svg={(<BiLogoPhp color='#484C89'/>)} per="40%"/>
              <Skillbox lan="MySQL" svg={(<SiMysql color='#00758f'/>)} per="30%"/>              
            </div>
          )
          }
        </div>

        {/* -----Other SkillBox----- */}
        <div className='skills-content' data-aos="zoom-in" data-aos-duration="800">
          <div className='skills-header'>
            <GiSkills className='skills_icon'/>

            <div className='skills-header-heading'>
              <h1>Other Skills</h1>
              <p>More than 1 years of exprience</p>
            </div>
            {toggleMenu3
              ? <MdOutlineKeyboardArrowUp className='skills_icon' onClick={() => setToggleMenu3(false)}/>
              : <MdOutlineKeyboardArrowDown className='skills_icon' onClick={() => setToggleMenu3(true)}/>
            }
          </div>
          {toggleMenu3 && (
            <div>
              <Skillbox lan="Git" svg={(<BiLogoGit color='#F1502F'/>)} per="70%"/>
              <Skillbox lan="WordPress" svg={(<BiLogoWordpress color='#0173aa'/>)} per="60%"/>
              <Skillbox lan="Responsive Design" svg={(<BiLaptop color='#333'/>)} per="90%"/>
            </div>
          )
          }
        </div>
      </div>

    </div>
  )
}

export default Skills