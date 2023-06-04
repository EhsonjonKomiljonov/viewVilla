import React from 'react';
import { LearnMoreBtn } from './../LearnMoreBtn/LearnMoreBtn';
import './aboutus.scss';

export const AboutUs = () => {
  return (
    <section className='about__us'>
      <div className='about__us__inner'>
        <div className='container'>
          <div className='about__us__left'>
            <h2 className='about__us__title'>
              Biz <span>Haqimizda</span>
            </h2>
            <p className='about__us__text'>
              Fusce justo mi, vehicula id arcu et, dapibus tristique lectus.
              Vivamus a elit sodales, tincidunt nunc non, maximus lacus. Fusce a
              augue sed dolor auctor iaculis vitae id mauris. Integer ut lectus
              non neque suscipit luctus. Mauris et erat id ipsum condimentum
              cursus. Sed tempus enim non massa mattis iaculis. In quis massa
              risus
            </p>
            <LearnMoreBtn />
          </div>
          <div className='about__us__right'></div>
        </div>
      </div>
    </section>
  );
};
