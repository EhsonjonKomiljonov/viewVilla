import React, { useRef } from 'react';
import './header.scss';
import Logo from '../../assets/images/logo.svg';
import { headerNavData } from '../../db/headerNavData';
import { HeaderNavLink } from '../HeaderNavLink/HeaderNavLink';

export const Header = () => {
  const menuRef = useRef();

  const handleOpen = () => {
    menuRef.current.classList.add('open');
  };

  const handleClose = () => {
    menuRef.current.classList.remove('open');
  };

  const overlayMenu = (evt) => {
    if (evt.target.matches('.menu-overlay')) {
      menuRef.current.classList.remove('open');
    }
  };

  return (
    <header className="site-header" ref={menuRef}>
      <div className="site-header__top top">
        <div className="container">
          <div className="top__inner">
            <a href="/">
              <img src={Logo} alt="Logo" />
            </a>
            <nav className="nav">
              <ul className="nav__list">
                {headerNavData.map((item) => (
                  <li>
                    <HeaderNavLink obj={item} />
                  </li>
                ))}
              </ul>
            </nav>
            <button onClick={handleOpen} className="open-btn">
              <i class="fa-solid fa-bars"></i>
            </button>
            <div className="menu-overlay" onClick={(evt) => overlayMenu(evt)}>
              <div className="menu">
                <div className="menu__header">
                  <button onClick={handleClose} className="close-btn">
                    <i class="fa-sharp fa-solid fa-xmark"></i>
                  </button>
                </div>
                <div className="menu__body">
                  <nav className="menu__nav">
                    <ul>
                      {headerNavData.map((item) => (
                        <li>
                          <HeaderNavLink obj={item} />
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-header__bottom bottom">
        <div className="container">
          <div className="bottom__inner">
            <div className="bottom__content">
              <h1>
                orzuyingizdagi <span>Dam</span> Olish <span>maskani</span> sizni
                kutmoqda
              </h1>
              <p>
                Everything you need about finding your place to live will be
                here, where it will be easier for you
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
