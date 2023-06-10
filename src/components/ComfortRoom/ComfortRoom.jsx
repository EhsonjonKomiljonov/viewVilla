import React from 'react';
import './comfortroom.scss';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import comfortRoomDb from './../../db/comfortRoomsDb';
import { ComfortRoomCard } from './../ComfortRoomCard/ComfortRoomCard';

export const ComfortRoom = () => {
  const settings = {
    autoplay: true,
    slidesToShow: 3.4,
    slidesToScroll: 0.6,
    autoplaySpeed: 2000,
    arrows: true,
    useTransform: true,
    pauseOnHover: false,
    changeDir: true,
    draggable: false,

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  const container = {
    hidden: { opacity: 0, y: -80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        type: 'tween',
      },
    },
  };

  return (
    <section className='comfort__room'>
      <div className='comfort__room__inner'>
        <motion.h2
          className='comfort__room__title'
          initial={{ x: -240 }}
          whileInView={{ x: 0, transition: { duration: 1, type: 'spring' } }}
        >
          Qulay xonalar
        </motion.h2>
        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={container}
        >
          <Slider {...settings}>
            {comfortRoomDb.map((el) => (
              <ComfortRoomCard el={el} />
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};
