import React from 'react'
import './blue-btn.scss'

export const BlueBtn = ({Tag, href}) => {
  if(!Tag) {
    Tag = 'button'
  }
  return (
    <Tag href={href ? href : '#'} className="villa__btn">
      See more <i class="fa-solid fa-arrow-right"></i>
    </Tag>
  )
}
