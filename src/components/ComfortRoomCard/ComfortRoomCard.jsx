import React from 'react';
import './comfortroomcard.scss';

export const ComfortRoomCard = (el) => {
  return (
    <div className='comfort__room__card'>
      <img
        className='comfort__room__img'
        src={`${el.el.src}`}
        alt=''
      />
      <span className={`${el.el.spanClass} comfort__room__span `}>
        {el.el.span}
      </span>
      <h3 className='comfort__room__title'>{el.el.title}</h3>
    </div>
  );
};
