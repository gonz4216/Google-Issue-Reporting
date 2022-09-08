import React from 'react'
import Laptop from './img/laptop.png'
import PhoneOne from './img/phone.gif'
import PhoneTwo from './img/phonetwo.png'
import GoogleHome from './img/google_home.png'
import PixleThree from './img/pixel312.png'
import { Fade } from "react-awesome-reveal";
import { Button, Text } from '@nextui-org/react';

const FootHero = () => {
    return (
        <Fade delay={300}>
            <div className='foot-hero'>
                <div className="pd-row">
                    <div className="container-foot">
                        <div className="col-foot">
                            <div className="col-text--foot">
                                <Text className='title-pd title-fot'
                                    h6
                                    size={18}
                                    css={{
                                        textGradient: "45deg, $red600 -30%, $yellow600 50%",

                                    }}
                                >NEST ISSUE</Text>
                                <p className='pd-para black'>Report any issues with your store's Pixel phone. This also includes security equipment.
                                </p>
                                <a href="https://issuetracker.google.com/issues?q=assignee:ethgon19@gmail.com%20status:open"><Button className='foot-btn'>Report an issue</Button></a>
                            </div>
                           
                                <img src={GoogleHome} alt="" className='foot-img' />
                            
                        </div>
                        <div className="col-foot">
                            <div className="col-text--foot">
                                <Text className='title-pd title-fot'
                                    h6
                                    size={18}
                                    css={{
                                        textGradient: "45deg, $red600 -30%, $yellow600 50%",

                                    }}
                                >DEMO ISSUE</Text>
                                <p className='pd-para black'>Report any issues with your store's Demo software.
                                </p>
                                <a href="https://issuetracker.google.com/issues?q=assignee:ethgon19@gmail.com%20status:open"><Button className='foot-btn'>Report an issue</Button></a>
                            </div>
                            
                                <img src={PixleThree} alt="" className='foot-img' />
                            
                        </div>
                        <div className="col-foot">
                            <div className="col-text--foot">
                                <Text className='title-pd title-fot'
                                    h6
                                    size={18}
                                    css={{
                                        textGradient: "45deg, $red600 -30%, $yellow600 50%",
                                        
                                    }}
                                >CHROMEBOOK ISSUE</Text>
                                <p className='pd-para black'>Report any issues with your stores Chromebooks. This includes pricing tickets, display condition & overall maintenance.
                                </p>
                                <a href="https://issuetracker.google.com/issues?q=assignee:ethgon19@gmail.com%20status:open"><Button className='foot-btn'>Report an issue</Button></a>
                            </div>
                            
                                <img src={Laptop} alt="" className='foot-img' />
                            
                        </div>

                    </div>
                    <h1 className='test'>Keep updated with in-store updated</h1>
                </div>
            </div>
        </Fade>
    )
}

export default FootHero