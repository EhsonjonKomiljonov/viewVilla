import React from 'react';
import './blue-btn.scss';

export const BlueBtn = ({ Tag, href, text, displayIcon, bg, type, width }) => {
  if (!Tag) {
    Tag = 'button';
  }
  return (
    <Tag
      href={href ? href : ''}
      style={{ background: bg || '', maxWidth: width || '' }}
      type={type || 'button'}
      className="villa__btn"
    >
      {text || 'See more'}{' '}
      <i
        style={{ display: displayIcon || 'inline-block' }}
        class="fa-solid fa-arrow-right"
      ></i>
    </Tag>
  );
};
