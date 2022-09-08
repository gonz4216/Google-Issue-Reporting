import React from 'react'
import Laptop from './img/laptop.png'
import PhoneOne from './img/phone.gif'
import PhoneTwo from './img/phonetwo.png'
import GoogleHome from './img/google_home.png'
import Tower from './img/tower.png'
import { Fade } from "react-awesome-reveal";
const Phones = () => {
  return (
    <Fade>
      <div className='cards'>
        <div className="row">
          <div className="cards_contaier">
            <div className="card-content">
              <img src={PhoneTwo} alt="" className='cards-img' />
              <span className='cards-text'>Pixel issue's</span>
            </div>
            <div className="card-content bb">
              <img src={GoogleHome} alt="" className='cards-img sds' />
              <span className='cards-text hight-resize'>Pixel issue's</span>
            </div>
            <div className="card-content">
              <img src={Laptop} alt="" className='cards-img' />
              <span className='cards-text'>Pixel issue's</span>
            </div>
            <div className="card-content">
              <img src={Tower} alt="" className='cards-img' />
              <span className='cards-text'>Pixel issue's</span>
            </div>
            <div className="card-content">
              <img src={PhoneOne} alt="" className='cards-img resize' />
              <span className='cards-text'>Pixel issue's</span>
            </div>
          </div>
        </div>

      </div>
    </Fade>
  )
}

export default Phones