import React from 'react';
import car from '.././Assets/Icons/footer_icons/car.png'
import star from '.././Assets/Icons/footer_icons/star.png'
import clock from '.././Assets/Icons/footer_icons/clock.png'
import payment from '.././Assets/Icons/footer_icons/payment.png'
import logo from '.././Assets/Icons/pirvoya_logo2.png'
import facebook from '.././Assets/Icons/footer_icons/facebook.png'
import instagram from '.././Assets/Icons/footer_icons/instagram.png'
import twitter from '.././Assets/Icons/footer_icons/twitter.png'
import linkedIn from '.././Assets/Icons/footer_icons/linkedIn.png'
import contact from '.././Assets/Icons/footer_icons/contact.png'
import paymentMethod from '.././Assets/Icons/footer_icons/paymt_methods.png'

const Footer = () => {
    return (
        <div className='bg-white'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:justify-items-center gap-[25px] py-[24px] lg:py-[52px] border-b border-b-[#E5E5E5] px-[20px] lg:px-[32px]'>
                <div className='flex gap-[18px] items-center'>
                    <div>
                        <img className='w-[40px] lg:w-[60px]' src={car} alt="car" />
                    </div>
                    <div>
                        <h3 className=' font-semibold uppercase text-[20px]'>Free Shipping</h3>
                        <p className='text-[#757575]'>Order Via Campaign</p>
                    </div>
                </div>
                <div className='flex gap-[18px] items-center'>
                    <div>
                        <img className='w-[40px] lg:w-[60px]' src={star} alt="car" />
                    </div>
                    <div>
                        <h3 className=' font-semibold uppercase text-[20px]'>Free Shipping</h3>
                        <p className='text-[#757575]'>Order Via Campaign</p>
                    </div>
                </div>
                <div className='flex gap-[18px] items-center'>
                    <div>
                        <img className='w-[40px] lg:w-[60px]' src={clock} alt="car" />
                    </div>
                    <div>
                        <h3 className=' font-semibold uppercase text-[20px]'>Free Shipping</h3>
                        <p className='text-[#757575]'>Order Via Campaign</p>
                    </div>
                </div>
                <div className='flex gap-[18px] items-center'>
                    <div>
                        <img className='w-[40px] lg:w-[60px]' src={payment} alt="car" />
                    </div>
                    <div>
                        <h3 className=' font-semibold uppercase text-[20px]'>Free Shipping</h3>
                        <p className='text-[#757575]'>Order Via Campaign</p>
                    </div>
                </div>
            </div>

            <div className='py-[20px] lg:py-[60px] border-b border-b-[#E5E5E5]'>
                <div>
                    <div className='grid lg:grid-cols-10 gap-[30px] lg:gap-[97px] px-[20px] lg:px-[32px]'>
                        <div className='lg:col-span-3 order-4 lg:order-1 '>
                            <img className='hidden lg:block w-[153px] mb-[35px]' src={logo} alt="" />
                            <p className='hidden lg:block text-[#333333]/80 text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className='flex items-center gap-[20px] mt-[26px]'>
                                <img className='w-[41px]' src={facebook} alt="" />
                                <img className='w-[41px]' src={twitter} alt="" />
                                <img className='w-[41px]' src={linkedIn} alt="" />
                                <img className='w-[41px]' src={instagram} alt="" />
                            </div>

                        </div>
                        <div className='lg:col-span-2 order-2 lg:order-2'>
                            <h3 className='uppercase font-semibold text-[20px]'>quick links</h3>
                            <div className='flex flex-col gap-3 mt-[10px] lg:mt-[25px] text-[18px] text-[#333333]/80'>
                                <a href="#">About us</a>
                                <a href="#">Contact us</a>
                                <a href="#">products</a>
                                <a href="#">Login</a>
                                <a href="#">Sign Up</a>
                            </div>
                        </div>
                        <div className='lg:col-span-2 order-3 lg:order-3'>
                            <h3 className='uppercase font-semibold text-[20px]'>Contact</h3>
                            <div className='flex flex-col gap-3 mt-[10px] lg:mt-[25px] text-[18px] text-[#333333]/80'>
                                <a href="#">My Account</a>
                                <a href="#">Orders</a>
                                <a href="#">Terms</a>
                                <a href="#">Privacy Policy</a>
                                <a href="#">Shipping Information</a>
                            </div>
                        </div>
                        <div className='lg:col-span-3 order-1 lg:order-4'>
                            <h3 className='uppercase font-semibold text-[20px]'>customer area</h3>
                            <div className='flex flex-col gap-3 mt-[16px] lg:mt-[25px] text-[18px] text-[#333333]/80'>
                                <p className='text-[#333333]/80 text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                <div className='flex items-center gap-[27px] mt-[31px]'>
                                    <img className='w-[48px]' src={contact} alt="" />
                                    <div>
                                        <h3 className='font-[18px]'>Have any question</h3>
                                        <h3 className='text-secondary'>099 456 789</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid lg:grid-cols-2 py-[17px] px-[20px] lg:px-[32px] text-center md:text-left'>
                <p>Projectnirvoya - © 2021 All Rights Reserved.png</p>
                <div className='hidden md:block'>
                    <div className='flex items-center gap-2'>
                        <p className='text-secondary text-[18px] '>Pay With</p>
                        <img className='w-[576px]' src={paymentMethod} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;