import React from 'react';
import './villa-gallery.scss';
import Villa1 from '../../assets/images/villa-1.jpg';
import Villa2 from '../../assets/images/villa-2.svg';
import Villa3 from '../../assets/images/villa-3.svg';
import Villa4 from '../../assets/images/villa-4.jpg';
import { BlueBtn } from '../BlueBtn/BlueBtn';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export const VillaGallery = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="villa">
      <div className="container">
        <div className="villa__inner">
          <motion.h2
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
          >
            See your dream <span>villa Gallery</span>
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={container}
            className="villa__grid grid"
          >
            <motion.div variants={item}>
              <img src={Villa1} alt="" />
            </motion.div>
            <motion.div variants={item}>
              <img src={Villa2} alt="" />
            </motion.div>
            <motion.div variants={item}>
              <img src={Villa3} alt="" />
            </motion.div>
            <motion.div variants={item}>
              <img src={Villa4} alt="" />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ x: -300 }}
            whileInView={{
              x: 0,
              transition: { duration: 0.3, type: 'spring', stiffness: 100 },
            }}
          >
            <BlueBtn />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
