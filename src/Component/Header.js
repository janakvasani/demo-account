import React from 'react'
import './Header.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header({clickHeaderClose}) {

  const [isOpen, setIsOpen] = useState(false);
  const [menu, setMenu] = useState('Generat')

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log("menu",menu);

// lembede rame lemobch ma 

  return (
    <>
      <div className="Header">

        <div className="icon"><b><Link to="/">Image Generator</Link></b></div>
        <div className="menu">
        <ul className='nav-manu'>
          <Link to="/generate" onClick={() => setMenu("Generat")} className={menu === 'Generat' ? "active" : ""}>AI Image Generator</Link>
          <Link to="/login" onClick={() => {setMenu("login");clickHeaderClose();}} className={menu === 'login' ? "active" : ""}>Login</Link>
        </ul>


          <div className="hamburger-menu">
            <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </button>
            {isOpen && (
              <div className='main-menu'>
              <div className="menu-links">
                <Link to="/generate">AI Image Generator</Link>
                <Link to="/login" onClick={clickHeaderClose}>Login</Link>
              </div>
              </div>
            )}
          </div>  
        </div >
      </div >
    </>
  )
}

export default Header;