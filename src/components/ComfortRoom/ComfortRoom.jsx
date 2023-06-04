import React from 'react';
import './comfortroom.scss';
import Slider from 'react-slick';

import comfortRoomDb from './../../db/comfortRoomsDb';
import { ComfortRoomCard } from './../ComfortRoomCard/ComfortRoomCard';

export const ComfortRoom = () => {
  const settings = {
    autoplay: true,
    slidesToShow: 3.2,
    slidesToScroll: 1.8,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2.,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1000,
        },
      },
    ],
  };
  return (
    <section className='comfort__room'>
      <div className='comfort__room__inner'>
        <h2 className='comfort__room__title'>Qulay xonalar</h2>
        <Slider {...settings}>
          {comfortRoomDb.map((el) => (
            <ComfortRoomCard el={el} />
          ))}
        </Slider>
      </div>
    </section>
  );
};
