import React from 'react';
import { LearnMoreBtn } from './../LearnMoreBtn/LearnMoreBtn';
import './aboutus.scss';
import Line from '../../assets/images/line.png';
import { motion } from 'framer-motion';
import responsiveBg from '../../assets/images/aboutUsBgMobile.png';

export const AboutUs = () => {
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

  return (
    <section className="about__us">
      <div className="about__us__inner">
        <div className="container framer">
          <div className="about__us__left">
            <motion.h2
              className="about__us__title"
              initial={{
                x: -200,
                y: -50,
                opacity: 0,
              }}
              viewport={{once: true}}
              whileInView={{
                x: 0,
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, type: 'spring' },
              }}
            >
              Biz <span>Haqimizda</span>
            </motion.h2>
            <motion.p
              className="about__us__text"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{once: true}}
            >
              <motion.span variants={child}>
                Fusce justo mi, vehicula
              </motion.span>
              <motion.span variants={child}>
                id arcu et, dapibus tristique lectus.
              </motion.span>
              <motion.span variants={child}>
                Vivamus a elit sodales,
              </motion.span>
              <motion.span variants={child}>
                tincidunt nunc non, maximus lacus. Fusce
              </motion.span>
              <motion.span variants={child}>a augue sed dolor</motion.span>
              <motion.span variants={child}>
                auctor iaculis vitae id mauris.
              </motion.span>
              <motion.span variants={child}>Integer ut lectus non</motion.span>
              <motion.span variants={child}>
                neque suscipit luctus. Mauris et erat id
              </motion.span>
              <motion.span variants={child}>
                ipsum condimentum cursus.
              </motion.span>
              <motion.span variants={child}>
                Sed tempus enim non massa mattis
              </motion.span>
              <motion.span variants={child}>
                iaculis. In quis massarisus
              </motion.span>
            </motion.p>
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, stiffness: 70, type: 'spring' },
              }}
            >
              <LearnMoreBtn />
            </motion.div>
          </div>
          <div className="about__us__bottom">
            <img src={responsiveBg} alt="" className="about__us__bg" />
          </div>
        </div>
      </div>
    </section>
  );
};
