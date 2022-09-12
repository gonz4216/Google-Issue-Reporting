import { Button } from '@nextui-org/react'
import React from 'react'
import { useState } from 'react'
import { Input, Spacer } from "@nextui-org/react";
import Mail from './img/env.svg'
const Subcribe = () => {
 
  return (
    <div className='sub'>
      <div className="row">
        <div className="container-mail">
          
          <img src={Mail} alt="" className="mail-logo"/>
          <form action="">
     
          <Input clearable underlined labelPlaceholder="Email" initialValue="" />
            <Button className='btn-mail'>Submit</Button>
            
          </form>
          
        </div>
      </div>
      
      
      
      
     
    </div>
  )
}

export default Subcribe