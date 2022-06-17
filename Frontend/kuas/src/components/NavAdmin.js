import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './NavAdmin.css';
import { FaCreativeCommons } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function NavAdmin() {
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
        <nav className='navadmin'>
          <div className='navbar-container container'>
            <Link to='/admin' className='navbar-logo' onClick={closeMobileMenu}>
             Admin
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/admin' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/admin/materi belajar'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Materi Pembelajaran
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/admin/video belajar'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Video Pembelajaran
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/admin/rating'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Rating
                </Link>
              </li>
              <li className='nav-btn'>
                   {button ? (
                     <Link to='/' className='btn-link'>
                       <Button buttonStyle='btn--outline'>LOGOUT</Button>
                     </Link>
                   ) : (
                     <Link to='/' className='btn-link'>
                       <Button
                         buttonStyle='btn--outline'
                         buttonSize='btn--mobile'
                         onClick={closeMobileMenu}
                       >
                         LOGOUT
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

export default NavAdmin;