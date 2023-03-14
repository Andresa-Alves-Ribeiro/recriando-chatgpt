import React from 'react'
import './Sidemenu.css'
import { Plus, Trash, User, Moon, Sun, ArrowSquareOut, SignOut } from '@phosphor-icons/react'

const SideMenu = () => {
  return (
    <aside className='sidemenu'>
      <div className='sidemenu-button'>
        <div className="sidemenu-item menu-top">
          <Plus size={14} color="#ffffff" weight="bold" />
          <span>New chat</span>
        </div>

        <div className="sidemenu-item">
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

      </div>
    </aside>
  )
}

export default SideMenu