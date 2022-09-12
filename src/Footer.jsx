import React from 'react'
import ReactLogo from './img/react.png'
import Glogo from './img/google.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="line"></div>
        <div className="row">
            <div className="container_footer">
                <div className="col--1">
                    <img src={Glogo} alt="" className='google_logo'/>
                    <a href="https://policies.google.com/privacy" className='atag'><span className='col--content-footer'>Privacy</span></a>
                    <a href="https://policies.google.com/terms?hl=en-GB&gl=au" className='atag'><span className='col--content-footer'>Terms</span></a>
                    <a href="https://about.google/" className='atag'><span className='col--content-footer'>About Google</span></a>
                    <a href="https://store.google.com/?hl=en-GB" className='atag'><span className='col--content-footer'>Products</span></a>
                </div>
              
            </div>
        </div>
    </div>
  )
}

export default Footer