import './footer.css'
import { BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi'
 
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
        <a href="https://twitter.com/Hatam7H"><BiLogoTwitter/></a>
        <a href=""><BiLogoLinkedin/></a>
      </div>
    </div>
  )
}

export default Footer