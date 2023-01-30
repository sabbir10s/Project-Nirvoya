import React from 'react';
import { MdDelete } from 'react-icons/md';
import { TbCurrencyTaka } from 'react-icons/tb';
import useProducts from '../../Shared/useProducts';
import './myCart.css'
const MyCart = () => {
    const [products] = useProducts([])
    return (
        <div className='px-[20px] lg:px-[32px] mt-[46px] mb-[50px] grid grid-cols-4 gap-[28px]'>
            <div className=' col-span-3'>
                <div className='bg-white py-[32px] pl-[27px] pr-[48px] '>
                    <div className='flex items-center justify-between '>
                        <div>
                            <label class="main">Select All
                                <input type="checkbox" />
                                <span className="box"></span>
                            </label>
                        </div>
                        <button className='flex items-center gap-[6px] text-[#A4A4A4]'>
                            <MdDelete className='text-[24px]' />
                            <p>Remove</p>
                        </button>
                    </div>
                </div>
                <div>

                    {
                        products.slice(0, 4).map(product => <div className='bg-white py-[32px] pl-[27px] pr-[48px] mt-[17px]'>
                            <div className='flex items-start justify-between'>
                                <div className='flex items-start gap-[22px]'>
                                    <div className='flex items-center gap-[38px]'>
                                        <label className="main">
                                            <input type="checkbox" />
                                            <span className="box"></span>
                                        </label>
                                        <div className='w-[130px] h-[130px]'>
                                            <img src={product.image} alt="" />
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-[16px]'>
                                        <h2 className='text-[18px] font-semibold'>{product.title}</h2>
                                        <p className='text-secondary text-[20px] font-semibold'>{product.price}</p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[47px] '>
                                    <p className='text-[18px] text-[#4D4D4D]'>SKU 12314124124</p>
                                    <div className='flex items-center gap-[20px]'>
                                        <div className='w-[120px] h-[56px] flex items-center justify-center gap-[16px] border-[1px] border-[#D8D8D8] rounded-[5px] shadow-[0_1px_5px_4px_rgba(0,0,0,0.05)]'>
                                            <button className='text-[#D2D2D2] font-bold text-[20px]'>-</button>
                                            <p className='text-[18px] text-secondary font-bold'>2</p>
                                            <button className='text-[#D2D2D2] font-bold text-[20px]'>+</button>
                                        </div>

                                        <button className='w-[60px] h-[56px] border-[1px] border-[#D8D8D8] rounded-[5px] flex items-center justify-center'>
                                            <MdDelete className='text-[24px] text-[#A4A4A4]' />
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>

            <div className='bg-white p-[29px] h-[380px]'>
                <p className='text-[20px] font-semibold'>My Orders</p>
                <div className='flex items-center justify-between mt-[27px]'>
                    <p className='text-[18px] text-[#8D8D8D]'>Subtotal</p>
                    <p className='text-[20px] flex items-center font-semibold'><TbCurrencyTaka />1,952.66</p>
                </div>
                <div className='flex items-center justify-between mt-[7px]'>
                    <p className='text-[18px] text-[#8D8D8D]'>Free Shipping</p>
                    <p className='text-[20px] flex items-center font-semibold'><TbCurrencyTaka />0</p>
                </div>
                <div className='h-[1.73px] w-full bg-[#F3F3F3] my-[30px]'></div>

                <div className='flex items-center justify-between mt-[7px]'>
                    <p className='text-[18px] text-[#8D8D8D]'>Order Total</p>
                    <p className='text-[28px] text-secondary font-bold flex items-center '><TbCurrencyTaka />1,952.66</p>
                </div>

                <button className='uppercase text-white text-[20px] font-bold bg-secondary w-full py-[13px] rounded-[5px] mt-[31px]'>proceed to checkout</button>
            </div>

        </div >
    );
};

export default MyCart;