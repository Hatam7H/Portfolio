import './footer.css'
import { BiLogoUpwork, BiLogoTwitter } from 'react-icons/bi'
 
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_container'>
        <div className='footer_container-info'>
          <h2>HATAM</h2>
          <p>Frontend developer</p>
        </div>
        <div className='footer_container-link'>
          <a href='#Skills'>Skills</a>
          <a href='#Projects'>Projects</a>
          <a href='#Contact'>Contact</a>
        </div>
        <div className='footer_container-plat'>
          <a href="https://twitter.com/_HatamHashemi"><BiLogoTwitter/></a>
          <a href="https://www.upwork.com/freelancers/~017f12ed6dcabefd88"><BiLogoUpwork/></a>
        </div>
      </div>
      <div className='footer-copyright'>
        <p>@ Hatam. All right reserved</p>
      </div>
    </div>
  )
}

export default Footer