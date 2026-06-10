import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faBars,
  faShoppingCart,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import LibraryLogo from '../assets/Library.svg';

const Nav = ({ cartCount = 0 }) => {
  function openMenu(){
    document.body.classList.add('menu--open');
  }
  function closeMenu(){
    document.body.classList.remove('menu--open');
  }
  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img src={LibraryLogo} alt="Library Logo" className="logo" />
        </Link>

        <ul className="nav__links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/">Books</Link>
          </li>

          <li>
            <button className="btn__menu" onClick={openMenu}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </li>

          <li className="nav__icon">
            <Link to="/cart" className="nav__link">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            <span className="cart__length">{cartCount}</span>
          </li>
        </ul>

        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <ul className="menu__links"></ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;