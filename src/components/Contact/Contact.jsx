import React, { useEffect, useRef } from 'react';
import { BlueBtn } from '../BlueBtn/BlueBtn';
import './contact.scss';
import { motion } from 'framer-motion';

export const Contact = () => {
  const constraintsRef = useRef();

  return (
    <>
      <section className="contact">
        <div className="contact__inner"  >
          <motion.div 
            className="contact__form"
            initial={{ x: -300, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 3,
                type: 'spring',
                stiffness: 50,
              },
            }}
          >
            <h2>Hoziroq bron qiling</h2>
            <form>
              <input required type="text" name="user_name" placeholder="Ism" />
              <input required type="tel" name="phone" placeholder="Telefon" />
              <textarea
                name="user_message"
                placeholder="Xabar"
                cols="30"
              ></textarea>
              <BlueBtn
                bg="linear-gradient(269.47deg, #1D4ED8 2.21%, #052D9C 97.11%)"
                text="Subscribe Now"
                displayIcon="none"
              />
            </form>
          </motion.div>
        </div>
        <div className="contact__map">
          <iframe
            initial={{ x: -200 }}
            id="myIframe"
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7817.31017938598!2d74.57109035946885!3d42.86788461659766!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1685882549813!5m2!1sru!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
};
