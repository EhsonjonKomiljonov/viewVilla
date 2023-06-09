import React from 'react';
import './loader.scss';
import Loader from '../../assets/videos/loader.mp4';
import { motion } from 'framer-motion';

export const Loading = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 2.7, delay: 1.5 },
    },
  };

  return (
    <div className="loader">
      <video src={Loader} autoPlay muted playsInline></video>
      <motion.p
        className="waviy"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <span style={{ '--i': 1 }}>V</span>
        <span style={{ '--i': 2 }}>i</span>
        <span style={{ '--i': 3 }}>e</span>
        <span style={{ '--i': 4 }}>w</span>
        <span style={{ '--i': 5 }}>V</span>
        <span style={{ '--i': 6 }}>i</span>
        <span style={{ '--i': 7 }}>l</span>
        <span style={{ '--i': 8 }}>l</span>
        <span style={{ '--i': 9 }}>a</span>
      </motion.p>
    </div>
  );
};
