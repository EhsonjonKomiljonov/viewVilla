import React, { useEffect, useRef } from 'react';
import './seevilla.scss';
import seeVillaData from './../../db/seevilladb';
import { SeeVillaBtn } from './../SeeVillaBtn/SeeVillaBtn';

import seeVillaBg from '../../assets/images/seeVillaBg.png';
import { useMotionValue, useTransform, motion } from 'framer-motion';

export const SeeVilla = () => {
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 700], [10, -10]);
  const rotateY = useTransform(x, [0, 700], [-10, 10]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

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

  const parent = {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <section className="see__villa">
        <div className="container">
          <div className="see__villa__inner">
            <div className="see__villa_left">
              <motion.h2
                className="see__villa__title"
                variants={container}
                initial="hidden"
                whileInView="visible"
              >
                <motion.span variants={child}>Sayohat qiling va </motion.span>
                <motion.span
                  className="see__villa__title__span"
                  variants={child}
                >
                  Villamizda
                </motion.span>
                <motion.span variants={child}> dam oling</motion.span>
              </motion.h2>
              <motion.p
                className="see__villa__text"
                variants={container}
                initial="hidden"
                whileInView="visible"
              >
                <motion.span variants={child}>
                  Villamiz Jahon boyicha barcha
                </motion.span>
                <motion.span variants={child}>
                  standartlarga javob beradi.
                </motion.span>
                <motion.span variants={child}>
                  Zamonaviy qulay va barcha
                </motion.span>
                <motion.span variants={child}>sharoitlarga ega</motion.span>
              </motion.p>
              <p className="see__villa__info">Villa ma’lumotlari</p>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                variants={parent}
                className="see__villa__list"
              >
                {seeVillaData.map((el) => {
                  return (
                    <motion.li
                      variants={item}
                      key={el.title}
                      className="see__villa__item"
                    >
                      <p>{el.title}</p>
                    </motion.li>
                  );
                })}
              </motion.ul>
              <motion.div
                initial={{ x: -200 }}
                whileInView={{
                  x: 0,
                  transition: { duration: 1, type: 'spring', stiffness: 100 },
                }}
              >
                <SeeVillaBtn />
              </motion.div>
            </div>
            <motion.div
              className="see__villa__right"
              style={{
                placeItems: 'center',
                placeContent: 'center',
                perspective: 400,
              }}
              onMouseMove={handleMouse}
            >
              <motion.img
                src={seeVillaBg}
                alt=""
                style={{
                  rotateX: rotateX,
                  rotateY: rotateY,
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
