import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaCreativeCommons } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);

  }, []);


  return (
    <>
      <IconContext.Provider value={{ color: 'black' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
             <img src = "images/logo.png"></img>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/fitur'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Fitur Lainnya
                </Link>
              </li>
              <li className='nav-rate'>
                <Link
                  to='/rate'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Rate Us
                </Link>
              </li>
              <li className='nav-btn'>
                   {button ? (
                     <Link to='/login' className='btn-link'>
                       <Button buttonStyle='btn--outline'>LOGIN</Button>
                     </Link>
                   ) : (
                     <Link to='/login' className='btn-link'>
                       <Button
                         buttonStyle='btn--outline'
                         buttonSize='btn--mobile'
                         onClick={closeMobileMenu}
                       >
                         LOGIN
                       </Button>
                     </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;