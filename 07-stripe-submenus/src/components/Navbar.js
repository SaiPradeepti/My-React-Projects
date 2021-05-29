import React from 'react';
import logo from '../images/logo.svg';
import { FaBars, FaAngleRight } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { sublinks, openSidebar } = useGlobalContext();
  return (
    <nav className='nav'>
      <div className="nav__center">
        <div className="nav__header">
          <img src={logo} alt="stripe" />
        </div>
        <ul className="nav__links">
          {
            sublinks.map((link,index) => {
              const {page} = link;
              return (<li className='link-btn'>
                {page}
              </li>);

            })
          }
        </ul>
        <button className="btn signin__btn">
          Sign in
          <div className="btn__icon"><FaAngleRight className='icon'/></div>
        </button>
        <div className="nav__btn btn" onClick={openSidebar}>
          <FaBars />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
