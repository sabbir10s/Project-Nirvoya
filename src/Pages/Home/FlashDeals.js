import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ReactStars from 'react-stars';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { TbCurrencyTaka } from 'react-icons/tb';
import basket from '../../Assets/Icons/blue_basket.png'

const FlashDeals = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='mt-[50px]'>
            <h2 className='text-[26px] mb-[32px] font-bold'>Flash Deals</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[25px]'>
                {
                    products.map(product =>
                        <div className='bg-white rounded-[10px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]'>
                            <div className='flex items-center justify-center bg-[#F2F2F2] m-[9px] rounded-[10px] relative'>
                                <img className='w-[260px] pt-5' src={product.image} alt="" />
                                <div className=' absolute top-0 left-0 bg-gradient-to-r from-[#FF7A00] to-[#FFB800] font-bold text-white text-[14px] py-[4.5px] px-[12.5px] rounded-tl-[10px]'>-25% OFF</div>

                                {
                                    product?.like !== true ? <><AiOutlineHeart className='text-[#999999]/40 text-2xl absolute top-3 right-2' /></> : <><AiFillHeart className='text-error text-2xl absolute top-3 right-2' /></>
                                }

                            </div>
                            <div className='ml-[9px]'>
                                <ReactStars
                                    size={20}
                                    value={product?.ratings}
                                    edit={false}
                                ></ReactStars>
                                <h2>{product.title}</h2>
                            </div>
                            <div className='mx-[9px] mt-[10px] flex items-center justify-between'>
                                <div className='flex items-center gap-0 text-primary text-[22px]'><TbCurrencyTaka /><span>{product.price}</span></div>
                                <img className='w-[20px]' src={basket} alt="" />
                            </div>
                        </div>)
                }
            </div>
        </div >
    );
};

export default FlashDeals;