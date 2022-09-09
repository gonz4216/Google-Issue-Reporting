import { Button } from '@nextui-org/react'
import React from 'react'
import { useState } from 'react'
import Mail from './img/env.svg'
const Subcribe = () => {
 
  return (
    <div className='sub'>
      <div className="row">
        <div className="container-mail">
          
          <img src={Mail} alt="" className="mail-logo"/>
          <form action="">
     
            <input type="text" name='mail' placeholder='Email Address'/>
            <Button className='btn-mail'>Submit</Button>
            
          </form>
          
        </div>
      </div>

    </div>
  )
}

export default Subcribe