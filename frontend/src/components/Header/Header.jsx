import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>From farm to plate, always fresh.A burst of flavor in every dish.Eat well, live well, feel refreshed</p>
            <button href='#explore-menu'>View Menu</button>
        </div>
    </div>
  )
}

export default Header