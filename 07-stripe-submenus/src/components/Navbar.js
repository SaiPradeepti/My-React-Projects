import React from 'react';
import logo from '../images/logo.svg';
import { FaBars, FaAngleRight } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { sublinks, openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const btn = e.target.getBoundingClientRect();
    const center = (btn.left+btn.right)/2;
    const bottom = btn.bottom - 3;

    openSubmenu(page,{center,bottom});
  }

  const handleSubmenu = (e) => {
    if(!e.target.classList.contains('link-btn')){
      closeSubmenu();
    }
  }

  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className="nav__center">
        <div className="nav__header">
          <img src={logo} alt="stripe" />
        </div>
        <ul className="nav__links">
          {
            sublinks.map((link,index) => {
              const {page} = link;
              return (
              <li key={index}>
                <button className='link-btn' onMouseOver={displaySubmenu}>
                  {page}
                </button>
              </li>
              );

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
