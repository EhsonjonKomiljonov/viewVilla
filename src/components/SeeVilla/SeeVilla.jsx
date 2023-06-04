import React from 'react';
import './seevilla.scss';
import seeVillaData from './../../db/seevilladb';
import { SeeVillaBtn } from './../SeeVillaBtn/SeeVillaBtn';

import seeVillaBg from '../../assets/images/seeVillaBg.png';

export const SeeVilla = () => {
  return (
    <>
      <section className='see__villa'>
        <div className='container'>
          <div className='see__villa__inner'>
            <div className='see__villa_left'>
              <h2 className='see__villa__title'>
                Sayohat qiling va{' '}
                <span className='see__villa__title__span'>Villamizni</span>{' '}
                ko’ring
              </h2>
              <p className='see__villa__text'>
                Villamiz Jahon boyicha barcha standartlarga javob beradi.
                Zamonaviy qulay va barcha sharoitlarga ega
              </p>
              <p className='see__villa__info'>Villa ma’lumotlari</p>
              <ul className='see__villa__list'>
                {seeVillaData.map((el) => {
                  return (
                    <li
                      key={el.title}
                      className='see__villa__item'
                    >
                      {el.title}
                    </li>
                  );
                })}
              </ul>
              <SeeVillaBtn />
            </div>
            <div className='see__villa_right'>
              <img
                src={seeVillaBg}
                alt=''
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
