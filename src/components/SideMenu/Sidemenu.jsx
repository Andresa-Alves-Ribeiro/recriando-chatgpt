import React, { useState } from 'react'
import './Sidemenu.css'
import { Plus, Trash, User, Moon, Sun, ArrowSquareOut, SignOut, X } from '@phosphor-icons/react'

const SideMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  const closeMenu = () => {
    setShowMenu(false);
  }

  return (
    <div className='sidemenu-wrapper'>
      <div className='sidemenu-button' onClick={toggleMenu}>
        <span>Menu</span>
      </div>

      <aside className={`sidemenu ${showMenu ? 'show' : ''}`}>
        <div className="sidemenu-item menu-top" >
          <div className="menu-top-inner">
            <Plus size={14} color="#ffffff" weight="bold" />
            <span>New chat</span>
          </div>
          <button className="menu-close-button" onClick={closeMenu}>
            <X size={18} color="#ffffff" />
          </button>
        </div>

        <div className="sidemenu-item menu-side-bottom">
          <div className='menu-bottom'>
            <Trash size={18} color="#ffffff" />
            <span>Clear conversations</span>
          </div>

          <div className='menu-bottom'>
            <User size={18} color="#ffffff" />
            <span>Upgrade to Plus</span>
          </div>

          <div className='menu-bottom'>
            <Moon size={18} color="#ffffff" />
            <span>Dark mode</span>
          </div>

          <div className='menu-bottom'>
            <ArrowSquareOut size={18} color="#ffffff" />
            <span>Updates & FAQ</span>
          </div>

          <div className='menu-bottom'>
            <SignOut size={18} color="#ffffff" />
            <span>Log out</span>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default SideMenu