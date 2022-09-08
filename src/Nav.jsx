import React from 'react'
import { Button, Text } from '@nextui-org/react';
import logo from './img/Google__G__Logo.svg'
import { useState } from 'react';

import { Fade } from "react-awesome-reveal";
const Nav = () => {
 
    return (
       
            <div className='trans'>
                <nav className="nav-bar">
                    <div className="row">
                        <div className="container-nav">
                            <img src={logo} alt="" className='logo' />
                            <Text className='logo-text'
                                h1
                                size={18}
                                css={{
                                    textGradient: "45deg, $gray600 -30%, $gray600 50%",

                                }}

                            >
                                Google In-Store Issue Reporting System
                            </Text>
                        </div>
                    </div>
                </nav>
            </div>
        
    )
}

export default Nav




