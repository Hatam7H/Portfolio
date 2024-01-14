import './footer.css'
import { BiLogoLinkedin } from 'react-icons/bi'
import { BsFillArrowUpCircleFill, BsGithub } from 'react-icons/bs'
 
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_container-info'>
        <h2>HATAM</h2>
        <p>Frontend developer</p>
      </div>
      <div className='footer_container-link'>
        <a href='#Skills'>Skills</a>
        <a href='#Projects'>Projects</a>
        <a href='#Home'>Home</a>
      </div>
      <div className='footer_container-plat'>
        <a href="https://github.com/Hatam7H"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/h7h/"><BiLogoLinkedin/></a>
        <a href='#Nav'><BsFillArrowUpCircleFill/></a>
      </div>
    </div>
  )
}

export default Footer