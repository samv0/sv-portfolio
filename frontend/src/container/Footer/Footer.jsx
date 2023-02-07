import React from 'react'
import './Footer.scss'
import { images } from '../../constants';

const Footer = () => {
  return (
    <div id='contact'>
      <h2 className="head-text">Reach out to me at</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:contact@samvinh.com" className="p-text">contact@samvinh.com</a>
        </div>
      </div>
    </div>
  )
}

export default Footer