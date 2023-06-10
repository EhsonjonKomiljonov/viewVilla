import React from 'react';
import './blue-btn.scss';
import { useRef } from 'react';

export const BlueBtn = ({
  Tag,
  href,
  text,
  displayIcon,
  bg,
  type,
  width,
  onClick,
  className,
  Ref,
}) => {
  if (!Tag) {
    Tag = 'button';
  }
  return (
    <Tag
      ref={Ref}
      href={href ? href : ''}
      style={{ background: bg || '', maxWidth: width || '' }}
      type={type || 'button'}
      className={'villa__btn ' + className || ''}
      onClick={onClick || ''}
    >
      {text || 'See more'}{' '}
      <i
        style={{ display: displayIcon || 'inline-block' }}
        class="fa-solid fa-arrow-right"
      ></i>
    </Tag>
  );
};
