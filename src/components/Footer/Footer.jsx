import React from 'react';
import './footer.scss';
import Logo from '../../assets/images/logo-footer.svg';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 90, opacity: 0 }}
      whileInView={{
        y: 0,
        transition: { type: 'tween', duration: 0.5 },
        opacity: 1,
      }}
      viewport={{ once: true }}
      className="site-footer"
    >
      <div className="container">
        <div className="site-footer__inner">
          <div className="site-footer__left left">
            <motion.a
              className="logo"
              style={{ display: 'block' }}
              href="/"
              initial={{ x: -200 }}
              viewport={{ once: true }}
              whileInView={{
                x: 0,
                transition: { duration: 0.5, type: 'spring', stiffness: 100 },
              }}
            >
              <img src={Logo} alt="" />
            </motion.a>
            <p>
              We provide information about properties such as houses, villas and
              apartments to help people find their dream home
            </p>
            <ul>
              <motion.li
                initial={{ y: 30 }}
                viewport={{ once: true }}
                whileInView={{
                  y: 0,
                  transition: { type: 'spring', duration: 1, stiffness: 80 },
                }}
              >
                <a href="https://facebook.com">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </motion.li>
              <motion.li
                initial={{ y: 50 }}
                viewport={{ once: true }}
                whileInView={{
                  y: 0,
                  transition: { type: 'spring', duration: 1, stiffness: 80 },
                }}
              >
                <a href="https://twitter.com">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </motion.li>
              <motion.li
                initial={{ y: 70 }}
                viewport={{ once: true }}
                whileInView={{
                  y: 0,
                  transition: { type: 'spring', duration: 1, stiffness: 80 },
                }}
              >
                <a href="https://instagram.com"></a>
              </motion.li>
            </ul>
          </div>
          <div className="site-footer__left right">
            <motion.div
              initial={{ y: -60 }}
              viewport={{ once: true }}
              whileInView={{
                y: 0,
                transition: { duration: 0.5, type: 'spring', stiffness: 100 },
              }}
            >
              <strong>Property</strong>
              <ul>
                <li>
                  <a href="#">House</a>
                </li>
                <li>
                  <a href="#">Apartment</a>
                </li>
                <li>
                  <a href="#">Villa</a>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ y: 60 }}
              viewport={{ once: true }}
              whileInView={{
                y: 0,
                transition: { duration: 0.5, type: 'spring', stiffness: 100 },
              }}
            >
              <strong>Contact</strong>
              <ul>
                <li>
                  <a href="#">2464 Royal Ln. Mesa, New Jersey 45463</a>
                </li>
                <li>
                  <a href="tel:6715550110">(671) 555-0110</a>
                </li>
                <li>
                  <a href="mailto:info@hounter.com">info@hounter.com</a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
