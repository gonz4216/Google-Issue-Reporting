import React from 'react'
import PixleSix from './img/pixle6.png'
import HeroImg from './img/chtableimage.png'
import { Button, Text } from '@nextui-org/react';
import { Fade } from "react-awesome-reveal";


const PDHero = () => {
    return (
        <Fade delay={300}>
            <div className="pdhsero">
                <div className="pd-row">
                    <div className="pd-container">
                        <div className="left">
                            <div className="pd-text">
                                <Text className='title-pd'
                                    h6
                                    size={18}
                                    css={{
                                        color: "white",

                                    }}
                                >PIXEL ISSUE</Text>
                                <p className='pd-para'>Report any issues with your store's Pixel phone. This also includes security equipment.
                                </p>
                                <a href="https://issuetracker.google.com/issues?q=assignee:ethgon19@gmail.com%20status:open"><Button className='btn color'>Report an issue</Button></a>
                            </div>
                            <div className="img-wrapper">
                                <img src={PixleSix} alt="" className='pd-img' />
                            </div>
                        </div>
                        <div className="right">
                            <div className="pd-text">
                                <Text className='title-pd'
                                    h6
                                    size={18}
                                    css={{
                                        color: "white",

                                    }}
                                >DISPLAY ISSUE</Text>
                                <p className='pd-para'>Report any issues with your store's Pixel phone. This also includes security equipment.
                                </p>
                                <a href="https://issuetracker.google.com/issues?q=assignee:ethgon19@gmail.com%20status:open"><Button className='btn'>Report an issue</Button></a>
                            </div>
                            <div className="img-wrapper">
                                <img src={HeroImg} alt="" className='pd-img2' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default PDHero