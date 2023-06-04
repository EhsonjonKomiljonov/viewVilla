import React from 'react'
import './blue-btn.scss'

export const BlueBtn = ({Tag, href, text, displayIcon, bg}) => {
  if(!Tag) {
    Tag = 'button'
  }
  return (
    <Tag href={href ? href : '#'} style={{background: bg || ''}} className="villa__btn">
      {text || 'See more'} <i style={{display: displayIcon || 'inline-block'}} class="fa-solid fa-arrow-right"></i>
    </Tag>
  )
}
