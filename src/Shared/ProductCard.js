import React from 'react';
import ReactStars from 'react-stars';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { TbCurrencyTaka } from 'react-icons/tb';
import basket from '.././Assets/Icons/blue_basket.png'

const ProductCard = ({ product }) => {
    const { category, title, image, like, price, rating } = product
    return (
        <div className='bg-white rounded-[10px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]'>
            <div className='flex items-center justify-center bg-[#F2F2F2] m-[9px] rounded-[10px] relative'>
                <img className='w-[300px] rounded-[10px]' src={image} alt="" />
                {
                    category && <div className=' absolute top-0 left-0 bg-gradient-to-r from-[#FF7A00] to-[#FFB800] font-bold text-white text-[14px] py-[4.5px] px-[12.5px] rounded-tl-[10px]'>-25% OFF</div>
                }

                {
                    like !== true ? <><AiOutlineHeart className='text-[#999999]/40 text-2xl absolute top-3 right-2 cursor-pointer' /></> : <><AiFillHeart className='text-error text-2xl absolute top-3 right-2 cursor-pointer' /></>
                }

            </div>
            {
                category === "flash deals" ? <div className='mx-[9px]'>
                    <ReactStars
                        size={20}
                        value={rating}
                        edit={false}
                    ></ReactStars>
                    <h2 className='h-[40px] mt-[10px]'>{title}</h2>
                </div>
                    :
                    <></>
            }
            <div className='m-[9px] flex items-center justify-between'>
                <div className='flex items-center gap-0 text-primary text-[22px]'><TbCurrencyTaka /><span>{price}</span></div>
                <img className='w-[20px] cursor-pointer' src={basket} alt="" />
            </div>
        </div>
    );
};

export default ProductCard;