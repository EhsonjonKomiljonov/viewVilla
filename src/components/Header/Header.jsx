import React, { useRef } from 'react';
import './header.scss';
import Logo from '../../assets/images/logo.svg';
import { headerNavData } from '../../db/headerNavData';
import { HeaderNavLink } from '../HeaderNavLink/HeaderNavLink';
import { motion } from 'framer-motion';
import HeroImg1 from '../../assets/images/hero-bgi.png';
import HeroImg2 from '../../assets/images/hero-bgi-2.png';
import { BlueBtn } from '../BlueBtn/BlueBtn';

export const Header = () => {
  // ====================

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

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delay: 2 },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  // LOGO ANIMATE

  return (
    <header className="site-header" ref={menuRef}>
      {/* HEADER TOP */}

      <div className="site-header__top top">
        <div className="container">
          <div className="top__inner">
            <a className="logo" href="/">
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
                      {headerNavData.map((item, index) => (
                        <motion.li
                          initial={{ y: 50, opacity: 0 }}
                          whileInView={{
                            y: 0,
                            opacity: 1,
                            transition: { duration: 0.7 },
                          }}
                        >
                          <HeaderNavLink obj={item} />
                        </motion.li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HEADER BOTTOM */}

      <div className="site-header__bottom bottom">
        <div className="container">
          <div className="bottom__inner">
            <div className="bottom__content">
              <motion.h1
                variants={container}
                initial="hidden"
                whileInView="visible"
              >
                <motion.span variants={child}>orzuyingizdagi </motion.span>
                <motion.span className="one" variants={child}>
                  Dam
                </motion.span>{' '}
                <motion.span variants={child}>Olish </motion.span>
                <motion.span className="two" variants={child}>
                  maskani
                </motion.span>{' '}
                <motion.span variants={child}>sizni </motion.span>
                <motion.span variants={child}>kutmoqda</motion.span>
              </motion.h1>
              <motion.p
                variants={container}
                initial="hidden"
                whileInView="visible"
              >
                <motion.span variants={child}>Everything </motion.span>
                <motion.span variants={child}>you </motion.span>
                <motion.span variants={child}>need </motion.span>
                <motion.span variants={child}>about </motion.span>
                <motion.span variants={child}>finding </motion.span>
                <motion.span variants={child}>your </motion.span>
                <motion.span variants={child}>place </motion.span>
                <motion.span variants={child}>to </motion.span>
                <motion.span variants={child}>live </motion.span>
                <motion.span variants={child}>will </motion.span>
                <motion.span variants={child}>be </motion.span>
                <motion.span variants={child}>here, </motion.span>
                <motion.span variants={child}>where </motion.span>
                <motion.span variants={child}>it </motion.span>
                <motion.span variants={child}>will </motion.span>
                <motion.span variants={child}>be </motion.span>
                <motion.span variants={child}>easier </motion.span>
                <motion.span variants={child}>for </motion.span>
                <motion.span variants={child}>you </motion.span>
              </motion.p>
              <BlueBtn
                text="Watch Demo"
                bg="linear-gradient(269.47deg, #0051ED 2.21%, #2F00B5 97.11%);"
                width="225px"
              />
            </div>
            <div className="bottom-right">
              <div className="bottom-right__inner">
                <div className="bottom-right__first">
                  <motion.img
                    src={HeroImg1}
                    alt=""
                    initial={{ x: 270, y: 130, scale: 0.8 }}
                    whileInView={{
                      x: 0,
                      y: 10,
                      scale: 1,
                      transition: { duration: 1, delay: 2 },
                    }}
                  />
                </div>
                <motion.div
                  className="bottom-right__center"
                  initial={{ height: '0' }}
                  whileInView={{ height: '740px' }}
                ></motion.div>
                <div className="bottom-right__second">
                  <motion.img
                    src={HeroImg2}
                    alt=""
                    initial={{ x: -250, y: -130, scale: 0.8 }}
                    whileInView={{
                      x: 0,
                      y: 30,
                      scale: 1,
                      transition: { duration: 1, delay: 2 },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
