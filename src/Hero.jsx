import React from 'react'
import { Button, Text } from '@nextui-org/react';
import HeroImg from './img/chtableimage.png'

const Hero = () => {
    return (
        <>
            
                <div className="container-hero">
                    <Text className=''
                        h6
                        size={18}
                        css={{
                            textGradient: "45deg, $red600 -30%, $yellow600 50%",

                        }}
                    >Welcome to Google In-Store</Text>


                    <Text size="$2xl" className='hero-para'> Report any issues with your retail stores
                        Google products, retail displays & Chromebook’s
                        across USA & Canada.
                        </Text>
                        <img src={HeroImg} alt=""  className='hero-img'/>
                </div>
            
        </>
    )
}

export default Hero