import React from 'react';
import stylish_man from '../../Assets/Images/handsome-young-man 1.png'
import deliver_man from '../../Assets/Images/handsome-delivery-man.png'
import health_beauty from '../../Assets/Images/Health & Beauty collection img.png'
const Banner = () => {
    return (
        <div className=' grid lg:grid-cols-3 gap-6 mt-[13px]'>
            <div className=' col-span-2 grid grid-cols-2 items-center bg-[#EBF0F9] rounded-[10px] py-[20px] lg:py-0 pl-[21px] lg:pl-[60px]'>
                <div className=' col-span-1'>
                    <h1 className='font-bold text-[20px] lg:text-[45px] text-primary'>Explore Men’s <br /> Winter Collection</h1>
                    <p className='text-[#646464] my-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <button className='text-white text-[16px] bg-secondary py-[10px] px-[25px] rounded-[5px]'>Shop Now</button>
                </div>
                <div>
                    <img className='w-[350px]' src={stylish_man} alt="stylish_man" />
                </div>
            </div>

            <div className='col-span-1 hidden lg:block'>
                <div className='flex flex-col gap-6'>
                    <div>
                        <img className='w-full rounded-[10px]' src={deliver_man} alt="deliver_man" />
                    </div>
                    <div>
                        <img className='w-full rounded-[10px]' src={health_beauty} alt="health_beauty" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;