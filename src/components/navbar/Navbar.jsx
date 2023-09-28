import './navbar.css'
import { useState } from 'react'
import {RiMenuAddLine} from 'react-icons/ri'
import { MdCloseFullscreen } from 'react-icons/md'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='navbar'>
      <h1 className='navbar_logo'>HATAM</h1>
      <div className='navbar_section-links'>
        <a href='#Home'>Home</a>
        <a href='#About'>About</a>
        <a href='#Skills'>Skills</a>
        <a href='#Projects'>Projects</a>
        <a href='#Contact'>Contact</a>
      </div>

      {/* -----small devices code----- */}
      <div className='navbar-sm'>
        {toggleMenu
          ? <MdCloseFullscreen size={25} onClick={() => setToggleMenu(false)}/>
          : <RiMenuAddLine size={25} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className='navbar-sm-hover scale-up-center'>
            <div className='navbar-section-links-sm'>
              <a href='#Home' onClick={() => setToggleMenu(false)}>Home</a>
              <a href='#About' onClick={() => setToggleMenu(false)}>About</a>
              <a href='#Skills' onClick={() => setToggleMenu(false)}>Skills</a>
              <a href='#Projects' onClick={() => setToggleMenu(false)}>Projects</a>
              <button><a href='#Contact' onClick={() => setToggleMenu(false)}>Contact</a></button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar