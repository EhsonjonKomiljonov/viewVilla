import React from 'react';
import './villa-gallery.scss';
import Villa1 from '../../assets/images/villa-1.jpg'
import Villa2 from '../../assets/images/villa-2.svg'
import Villa3 from '../../assets/images/villa-3.svg'
import Villa4 from '../../assets/images/villa-4.jpg'
import { BlueBtn } from '../BlueBtn/BlueBtn';

export const VillaGallery = () => {
  return (
    <section className="villa">
      <div className="container">
        <div className="villa__inner">
          <h2>
            See your dream <span>villa Gallery</span>
          </h2>
          <div className="villa__grid grid">
            <div>
              <img src={Villa1} alt="" />
            </div>
            <div>
              <img src={Villa2} alt="" />
            </div>
            <div>
              <img src={Villa3} alt="" />
            </div>
            <div>
              <img src={Villa4} alt="" />
            </div>
          </div>
          <BlueBtn />
        </div>
      </div>
    </section>
  );
};
