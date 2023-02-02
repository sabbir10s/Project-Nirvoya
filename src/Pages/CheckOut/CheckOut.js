import React from 'react';
import './CheckOut.css'
import { TbCurrencyTaka } from 'react-icons/tb';
import cashonDelivery from '../../Assets/Icons/cashonDelivery.png'
import bkash from '../../Assets/Icons/Bkash.png'
import nagad from '../../Assets/Icons/nagad.png'
import roket from '../../Assets/Icons/roket.png'
const CheckOut = () => {
    return (
        <div className='lg:px-[32px] lg:mt-[60px] flex flex-col lg:flex-row items-start lg:gap-[42px]'>
            <div className=' bg-white px-[20px] py-[40px] lg:pl-[35px] lg:pr-[45px]lg: lg:pt-[14px] lg:pb-[53px] mb-[50px] w-full'>
                <h1 className='text-[30px] text-[#414B56] font-semibold'>Shipping Details</h1>
                <div className='h-[0.75px] bg-[#ECECEC] mt-[13px]'></div>
                <p className='text-[20px] text-[#333333] mt-[19px] uppercase'>Contact Information</p>
                <div className='mt-[17px]'>
                    <div className='flex flex-col lg:flex-row items-center gap-[20px] lg:gap-[40px]'>
                        <div className='w-full'>
                            <div className='flex flex-col mb-[20px]'>
                                <label className='uppercase text-[14px] text-[#636363] mb-[10px]' htmlFor="firstName">First Name</label>
                                <input className='border-[1px] border-[#D6D3D3] bg-[#FAFAFA] h-[45px] outline-none focus:bg-white text-lg pl-4' type="text" id='firstName' />
                            </div>
                            <div className='flex flex-col lg:mb-[20px]'>
                                <label className='uppercase text-[14px] text-[#636363] mb-[10px]' htmlFor="email">Email Address</label>
                                <input className='border-[1px] border-[#D6D3D3] bg-[#FAFAFA] h-[45px] outline-none focus:bg-white text-lg pl-4' type="email" id='email' />
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='flex flex-col mb-[20px]'>
                                <label className='uppercase text-[14px] text-[#636363] mb-[10px]' htmlFor="lastName">Last Name</label>
                                <input className='border-[1px] border-[#D6D3D3] bg-[#FAFAFA] h-[45px] outline-none focus:bg-white text-lg pl-4' type="text" id='lastName' />
                            </div>
                            <div className='flex flex-col lg:mb-[20px]'>
                                <label className='uppercase text-[14px] text-[#636363] mb-[10px]' htmlFor="mobile">Mobile Number <span className='text-red-500'>*</span></label>
                                <input className='border-[1px] border-[#D6D3D3] bg-[#FAFAFA] h-[45px] outline-none focus:bg-white text-lg pl-4' type="number" id='mobile' />
                            </div>
                        </div>
                    </div>

                    <p className='text-[20px] text-[#333333] mt-[30px] uppercase'>Shipping Address</p>
                    <div className='flex flex-col mb-[20px] mt-[17px]'>
                        <label className='uppercase text-[14px] text-[#636363] mb-[10px]' htmlFor="address">Address Line 1 <span className='text-red-500'>*</span></label>
                        <input className='border-[1px] border-[#D6D3D3] bg-[#FAFAFA] h-[45px] outline-none focus:bg-white text-lg pl-4' type="address" id='address' />
                    </div>
                    <div className='flex flex-col lg:mb-[20px]'>
                        <label className='uppercase text-[14px] text-[#636363] mb-[10px]' htmlFor="address">Address Line 2</label>
                        <input className='border-[1px] border-[#D6D3D3] bg-[#FAFAFA] h-[45px] outline-none focus:bg-white text-lg pl-4' type="address" id='address' />
                    </div>
                    <div className='flex flex-col lg:flex-row items-center lg:gap-[39px]'>
                        <div className='flex flex-col mb-[20px] mt-[17px] text-[#636363] w-full'>
                            <label className='uppercase text-[14px]  mb-[10px]' htmlFor="country">County <span className='text-red-500'>*</span></label>
                            <select className='border-[1px] border-[#D6D3D3] bg-[#FAFAFA] h-[45px] outline-none focus:bg-white text-lg pl-4' id="country">
                                <option value="volvo">Select Country</option>
                                <option value="saab">India</option>
                                <option value="fiat">Canada</option>
                                <option value="audi">USA</option>
                            </select>
                        </div>
                        <div className='flex flex-col mb-[20px] lg:mt-[17px] text-[#636363] w-full'>
                            <label className='uppercase text-[14px]  mb-[10px]' htmlFor="country">City/Area <span className='text-red-500'>*</span></label>
                            <select className='border-[1px] border-[#D6D3D3] bg-[#FAFAFA] h-[45px] outline-none focus:bg-white text-lg pl-4' id="country">
                                <option value="volvo">Select City or Area</option>
                                <option value="volvo">Cumilla</option>
                                <option value="saab">Dhaka</option>
                                <option value="fiat">Chandpur</option>
                                <option value="audi">Pabna</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center gap-[20px] lg:gap-[39px]'>
                        <div className='flex flex-col w-full'>
                            <label className='uppercase text-[14px] text-[#636363] mb-[10px]' htmlFor="district">Select at district, state of province
                            </label>
                            <input className='border-[1px] border-[#D6D3D3] bg-[#FAFAFA] h-[45px] outline-none focus:bg-white text-lg pl-4' type="text" id='district' />
                        </div>
                        <div className='flex flex-col w-full'>
                            <label className='uppercase text-[14px] text-[#636363] mb-[10px]' htmlFor="postal"> Postal Code <span className='text-red-500'>*</span></label>
                            <input className='border-[1px] border-[#D6D3D3] bg-[#FAFAFA] h-[45px] outline-none focus:bg-white text-lg pl-4' type="number" id='postal' />
                        </div>
                    </div>

                    <div className='mt-[33px]'>
                        <label class="main">Add to address book
                            <input type="checkbox" checked="checked" />
                            <span className="box"></span>
                        </label>
                    </div>
                </div>
            </div>
            <div className='bg-white p-[20px] lg:p-[29px] w-full lg:w-[500px]'>

                <p className='text-[20px] font-semibold'>My Orders</p>

                <div>
                    <div className='flex justify-between mt-[25px]'>
                        <p className='lg:text-[18px] text-[#8D8D8D]'>LED Monitor With High Quality In The World</p>
                        <p className='flex items-center lg:text-[20px] font-semibold'> <span className='text-[20px] text-[#8D8D8D]'>1x</span> <TbCurrencyTaka />976.33</p>
                    </div>
                    <div className='flex justify-between mt-[25px]'>
                        <p className='lg:text-[18px] text-[#8D8D8D]'>Magic Pen for iPad</p>
                        <p className='flex items-center lg:text-[20px] font-semibold'> <span className='text-[20px] text-[#8D8D8D]'>1x</span> <TbCurrencyTaka />976.33</p>
                    </div>
                    <div className='h-[1.73px] bg-[#F3F3F3] mt-[31px]'></div>
                    <div className='flex justify-between mt-[25px]'>
                        <p className='lg:text-[18px] text-[#8D8D8D]'>Subtotal</p>
                        <p className='flex items-center lg:text-[20px] font-semibold'> <span className='text-[20px] text-[#8D8D8D]'>1x</span> <TbCurrencyTaka />1,952.66</p>
                    </div>
                    <div className='flex justify-between mt-[15px]'>
                        <p className='lg:text-[18px] text-[#8D8D8D]'>Free Shipping</p>
                        <p className='flex items-center lg:text-[20px] font-semibold'> <span className='text-[20px] text-[#8D8D8D]'>1x</span> <TbCurrencyTaka />0</p>
                    </div>
                    <div className='h-[1.73px] bg-[#F3F3F3] mt-[29px]'></div>
                    <div className='flex justify-between mt-[26px]'>
                        <p className='lg:text-[18px] font-semibold'>Order Total</p>
                        <p className='flex items-center lg:text-[28px] text-secondary font-semibold '> <TbCurrencyTaka />1,952.66</p>
                    </div>
                    <div className='h-[1.73px] bg-[#F3F3F3] mt-[26px]'></div>
                    <div className='mt-[31px] text-[20px] font-semibold'>
                        <p>Payment Methods</p>

                        <div className='mt-[23px]'>
                            <label className="main ">
                                <div className='flex items-center justify-between'>
                                    <span className='text-[#757575] text-[14px] lg:text-[16px]'>Cash on delivery</span>
                                    <img className='w-[30px]' src={cashonDelivery} alt="" />
                                </div>
                                <input type="checkbox" />
                                <span className="roundedBox"></span>
                            </label>
                            <label className="main ">
                                <div className='flex items-center justify-between'>
                                    <span className='text-[#757575] text-[14px] lg:text-[16px]'>Pay With BKash</span>
                                    <img className='w-[30px]' src={bkash} alt="" />
                                </div>
                                <input type="checkbox" />
                                <span className="roundedBox"></span>
                            </label>
                            <label className="main ">
                                <div className='flex items-center justify-between'>
                                    <span className='text-[#757575] text-[14px] lg:text-[16px]'>Pay With Nagad</span>
                                    <img className='w-[30px]' src={nagad} alt="" />
                                </div>
                                <input type="checkbox" />
                                <span className="roundedBox"></span>
                            </label>
                            <label className="main ">
                                <div className='flex items-center justify-between'>
                                    <span className='text-[#757575] text-[14px] lg:text-[16px]'>Pay With Roket</span>
                                    <img className='w-[30px]' src={roket} alt="" />
                                </div>
                                <input type="checkbox" />
                                <span className="roundedBox"></span>
                            </label>
                        </div>

                        <button className='text-[20px] text-white font-semibold bg-secondary w-full rounded-[5px] py-[13px] mt-[30px]'>PLACE ORDER</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;