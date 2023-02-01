import React from 'react';
import { MdOutlineNavigateNext } from 'react-icons/md';
import previewOne from '../../Assets/Images/previewOne.png'
import previewTwo from '../../Assets/Images/previewTwo.png'
import previewThree from '../../Assets/Images/previewThree.png'
import previewFour from '../../Assets/Images/previewFour.png'
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import { BsSuitHeartFill } from 'react-icons/bs';
import ReactStars from 'react-stars';
import linkedIn from '../../Assets/Icons/linkedIn.png'
import twitter from '../../Assets/Icons/twitter.png'
import facebook from '../../Assets/Icons/facebook.png'
import whatsApp from '../../Assets/Icons/whatsApp.png'
import shareLink from '../../Assets/Icons/share link.png'

const FirstSection = () => {
    return (
        <div className='pt-[56px] pb-[89px] px-[20px] lg:px-[32px]'>
            <div className='flex items-center '><span className='text-[#02344F] font-semibold'>Home</span><MdOutlineNavigateNext className='text-[#02344F] font-semibold' /><span className='text-[#02344F] font-semibold'>Men's Fashion</span> <MdOutlineNavigateNext className='text-[#02344F] font-semibold' /> <span className='text-[#757575]'>Men's Short Sleeve</span></div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-[109px] mt-[25px]'>
                <div className='flex flex-col lg:flex-row gap-[25px]'>
                    <div>
                        <div className='w-full lg:w-[550px] h-[550px] bg-[#F2F2F2] flex items-center lg:items-end justify-center'>
                            <img className='w-[250px]' src={previewOne} alt="" />
                        </div>
                        <div className='flex items-center gap-[14px] mt-[45px]'>
                            <p className='text-[20px] text-[#333333]'>Share</p>
                            <img className='w-[35px] lg:w-[44px]' src={linkedIn} alt="" />
                            <img className='w-[35px] lg:w-[44px]' src={twitter} alt="" />
                            <img className='w-[35px] lg:w-[44px]' src={facebook} alt="" />
                            <img className='w-[35px] lg:w-[44px]' src={whatsApp} alt="" />
                            <img className='w-[35px] lg:w-[44px]' src={shareLink} alt="" />
                        </div>
                    </div>
                    <div className='flex flex-row lg:flex-col items-center'>
                        <RiArrowUpSLine className='hidden lg:block text-2xl font-bold hover:text-primary cursor-pointer mb-[24px]' />
                        <div className='border-[1.5px] border-secondary cursor-pointer'>
                            <div className='w-[60px] lg:w-[85px] h-[60px] lg:h-[85px] bg-[#F2F2F2] flex items-end justify-center m-[6px]'>
                                <img className=' w-[30px] lg:w-[40px]' src={previewOne} alt="" />
                            </div>
                        </div>
                        <div className='border-[1.5px] border-transparent hover:border-secondary cursor-pointer'>
                            <div className='w-[60px] lg:w-[85px] h-[60px] lg:h-[85px] bg-[#F2F2F2] flex items-end justify-center m-[6px]'>
                                <img className=' w-[30px] lg:w-[40px]' src={[previewTwo]} alt="" />
                            </div>
                        </div>
                        <div className='border-[1.5px] border-transparent hover:border-secondary cursor-pointer'>
                            <div className='w-[60px] lg:w-[85px] h-[60px] lg:h-[85px] bg-[#F2F2F2] flex items-end justify-center m-[6px]'>
                                <img className=' w-[30px] lg:w-[40px]' src={previewThree} alt="" />
                            </div>
                        </div>
                        <div className='border-[1.5px] border-transparent hover:border-secondary cursor-pointer'>
                            <div className='w-[60px] lg:w-[85px] h-[60px] lg:h-[85px] bg-[#F2F2F2] flex items-end justify-center m-[6px]'>
                                <img className=' w-[30px] lg:w-[40px]' src={previewFour} alt="" />
                            </div>
                        </div>
                        <RiArrowDownSLine className='hidden lg:block text-2xl font-bold hover:text-primary cursor-pointer mt-[24px]' />
                    </div>
                </div>

                <div>
                    <h2 className='lg:text-[26px] font-semibold'>Volcom Men's Stone Tech Short Sleeve Quick Drying Tee</h2>
                    <div className='mt-[22px] text-[18px] flex flex-col lg:flex-row lg:items-center gap-[15px]'>
                        <div className='flex items-center gap-1'>
                            <p className=' font-semibold'>4.0</p>
                            <span> <ReactStars
                                size={20}
                                value={4}
                                edit={false}
                            ></ReactStars>
                            </span>
                            <p className='text-[#BABABA]'>(203)</p>
                        </div>
                        <div className='bg-[#F2F2F2] h-[31px] w-[2px] hidden lg:block'></div>
                        <div className='flex items-center gap-2'>
                            <FaCheck className='text-[#0AC96D]' />
                            <p className='font-semibold'>4,320</p> <p>Sold</p>
                        </div>
                        <div className='bg-[#F2F2F2] h-[31px] w-[2px] hidden lg:block'></div>
                        <div className='flex items-center gap-2'>
                            <BsSuitHeartFill className='text-[#C7C7C7]' />
                            <p className='text-secondary font-semibold'>Add to wishlist</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-[25px]'>
                        <h2 className='text-secondary text-[36px] font-bold'>$996.33</h2>
                        <div className='flex items-center gap-[17px]'>
                            <del className='text-[20px] text-[#8D8D8D]'> $1020.99</del>

                            <div className='bg-gradient-to-r from-[#FF7A00] to-[#FFB800] font-bold text-white text-[14px] w-[48px] h-[30px] rounded-[2px] flex items-center justify-center'>
                                <p>20%</p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-[11px]'>
                        <p><span className=' font-semibold'>SKU:</span> <span className='text-[#757575]'>12314124124</span></p>
                    </div>

                    <div className='mt-[33px]'>
                        <p className='text-[18px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <ul className='mt-[10px] list-disc ml-[20px]'>
                            <li>Direct Full Array</li>
                            <li>Quantum Dot Technology</li>
                            <li>Ambient Mode</li>
                            <li>One Remote Control</li>
                        </ul>
                    </div>

                    <div className='mt-[33px] flex items-center gap-[15px]'>
                        <p className='text-[19px]'>Size</p>
                        <div className='border border-[#EAEAEA] rounded-[1px] bg-white w-[35px] h-[29px] text-[14px] flex items-center justify-center hover:bg-secondary hover:text-white cursor-pointer'>
                            <p>S</p>
                        </div>
                        <div className='border border-[#EAEAEA] rounded-[1px] bg-secondary text-white w-[35px] h-[29px] text-[14px] flex items-center justify-center cursor-pointer'>
                            <p>M</p>
                        </div>
                        <div className='border border-[#EAEAEA] rounded-[1px] bg-white w-[35px] h-[29px] text-[14px] flex items-center justify-center hover:bg-secondary hover:text-white cursor-pointer'>
                            <p>L</p>
                        </div>
                        <div className='border border-[#EAEAEA] rounded-[1px] bg-white w-[35px] h-[29px] text-[14px] flex items-center justify-center hover:bg-secondary hover:text-white cursor-pointer'>
                            <p>X</p>
                        </div>
                        <div className='border border-[#EAEAEA] rounded-[1px] bg-white w-[35px] h-[29px] text-[14px] flex items-center justify-center hover:bg-secondary hover:text-white cursor-pointer'>
                            <p>XL</p>
                        </div>
                        <div className='border border-[#EAEAEA] rounded-[1px] bg-white w-[35px] h-[29px] text-[14px] flex items-center justify-center hover:bg-secondary hover:text-white cursor-pointer'>
                            <p>XXL</p>
                        </div>
                    </div>

                    <div className='mt-[33px] flex flex-col lg:flex-row  gap-[15px]'>
                        <div className='flex gap-[16px] items-center'>
                            <p>Quantity:</p>
                            <div className='flex items-center '>
                                <button className='bg-[#EFEFEF] text-[#ACACAC] w-[26px] h-[34px] flex items-center justify-center rounded-tl-[2px] rounded-bl-[2px]'>-</button>
                                <p className='w-[26px] h-[34px] flex items-center justify-center border-y-[1.5px] border-[#EAEAEA]'>2</p>
                                <button className='bg-[#EFEFEF] text-[#ACACAC] w-[26px] h-[34px] flex items-center justify-center rounded-tr-[2px] rounded-br-[2px] '>+</button>
                            </div>
                        </div>
                        <div className='flex flex-row items-center gap-[35px] mt-[12px] lg:mt-0'>
                            <button className='w-[165px] h-[45px] text-[20px] font-bold border-[1.5px] border-secondary rounded-[3px] hover:text-secondary text-white hover:bg-white bg-secondary'>Add Cart</button>
                            <button className='w-[165px] h-[45px] text-[20px] font-bold border-[1.5px] border-secondary rounded-[3px] text-secondary hover:text-white bg-white hover:bg-secondary'>Buy Now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FirstSection;