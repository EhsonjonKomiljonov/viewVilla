import React from 'react';
import './header-nav-link.scss';

export const HeaderNavLink = ({ obj }) => {
  const { title } = obj;
  return (
    <a className="site-header__link" href="#">
      {title}
    </a>
  );
};
