import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        {/* <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          MERINOO
          
        </Link> */}
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/curriculum'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Pinton Merinoo
            </Link>
          </li>
          {/* <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Pintor Merinoo <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li> */}
          <li className='nav-item'>
            <Link
              to='/galeria-virtual'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Galeria virtual
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/exposiciones'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Exposiciones
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/obra-disponible'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Obra Disponible
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/copia-impresa'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Copia Impresa
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contacto'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contacto
            </Link>
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Languaje
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
