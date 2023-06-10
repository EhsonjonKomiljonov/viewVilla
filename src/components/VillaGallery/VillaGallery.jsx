import React, { useState } from 'react';
import './villa-gallery.scss';
import { BlueBtn } from '../BlueBtn/BlueBtn';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { villaGalleryData } from '../../db/villaGalleryData';

export const VillaGallery = () => {
  const [items, setItems] = useState(villaGalleryData.slice(0, 1));

  const viewAll = () => {
    items.length === 1
      ? setItems(villaGalleryData)
      : setItems(villaGalleryData.slice(0, 1));
  };

  const openImg = (evt) => {
    const filteredImg = items.filter((item) => {
      if (
        item.id1 == +evt.target.id ||
        item.id2 == +evt.target.id ||
        item.id3 == +evt.target.id
      ) {
        evt.target.classList.toggle('open');
        evt.target.parentNode.classList.toggle('open-image');
        document.body.style.overflow =
          evt.target.classList == 'open' ? 'hidden' : 'auto';
      }
    });
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
          <motion.div className="villa__grid grid">
            {items.map((item) => (
              <div className="grid__view">
                <div className="grid__img-box">
                  <div>
                    <img
                      onClick={(evt) => openImg(evt)}
                      id={item.id1}
                      src={item.img1}
                      alt=""
                    />
                    <span>{item.text1}</span>
                  </div>
                </div>
                <div className="grid__inner">
                  <div className="grid__box">
                    <div>
                      <img
                        onClick={(evt) => openImg(evt)}
                        id={item.id2}
                        src={item.img2}
                        alt=""
                      />
                      <span>{item.text2}</span>
                    </div>
                  </div>
                  <div className="grid__box">
                    <div>
                      <img
                        onClick={(evt) => openImg(evt)}
                        id={item.id3}
                        src={item.img3}
                        alt=""
                      />
                      <span>{item.text3}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ x: -200 }}
            whileInView={{
              x: 0,
              transition: { duration: 0.3, type: 'spring', stiffness: 70 },
            }}
          >
            <BlueBtn
              text={`${items.length === 1 ? 'See More' : 'Hide'}`}
              onClick={viewAll}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
