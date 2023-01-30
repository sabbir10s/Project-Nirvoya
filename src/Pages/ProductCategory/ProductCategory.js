import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { ImStarFull } from 'react-icons/im';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import './productCategory.css'
import ProductCard from '../../Shared/ProductCard';
import useProducts from '../../Shared/useProducts';

const ProductCategory = () => {
    const [products] = useProducts([])
    if (products.length === 0) {
        return <p className='h-screen flex justify-center items-center text-4xl font-bold text-gray-400'>Loading...</p>
    }
    return (
        <div className='grid grid-cols-4 gap-[53px] px-[20px] lg:px-[32px]'>
            <div className='bg-white col-span-1 p-[19px] mt-[43px] h-[694px] w-[300px] '>
                <div className='pt-[25px] pb-[18px] border-b-[1px] border-[#F1F1F1]'>
                    <h3 className='text-[18px] text-[#3D3D3F] font-semibold'>Related Categories</h3>
                    <div className='flex items-center gap-[4px]'><div className='h-1 w-1 bg-[#757575] rounded-full'></div> <p className='text-[#757575] mt-[4px] mb-[5px]'>Men's Fashion</p></div>
                    <div className='text-[#757575] ml-[14px] flex flex-col gap-[5px]'>
                        <p className='text-secondary'>Men's Jacket</p>
                        <p>Men's T-Shirt</p>
                        <p>Casual T-Shirt</p>
                        <p>Summer T-Shirt</p>
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between text-[#383838] text-[18px] font-semibold py-[25px]'>
                        <h3>Filter by Price</h3>
                        <RiArrowDownSLine />
                    </div>
                    <input className='w-full h-[6px] bg-[#D0D0D2] rounded-[5px] appearance-none cursor-pointer range-lg' type="range" id="vol" name="vol" min="0" max="50"></input>
                    <p className='text-[18px] text-[#A7A7A7] py-[25px] border-b-[1px] border-[#F1F1F1]'>Price: <span className='text-black font-semiboldS'>৳1000 - ৳2500</span> </p>
                </div>
                <div>
                    <div className='flex items-center justify-between text-[#383838] text-[18px] font-semibold py-[25px]'>
                        <h3>Filter by Rating</h3>
                        <RiArrowDownSLine />
                    </div>

                    <div className='flex flex-col gap-[16px]'>
                        <div className='flex items-center gap-[16px]'>
                            <input id="star" type="checkbox" className="w-[24px] h-[24px] text-secondary bg-white border-[3px] border-gray-300 rounded-[2px] focus:none" />
                            <label htmlFor="star">
                                <ImStarFull className='text-[20px] text-[#FFB340]' />
                            </label>
                        </div>
                        <div className='flex items-center gap-[16px]'>
                            <input id="star" type="checkbox" className="w-[24px] h-[24px] text-secondary bg-white border-[3px] border-gray-300 rounded-[2px] focus:none" />
                            <label className='flex items-center gap-[8px]' htmlFor="star">
                                <ImStarFull className='text-[20px] text-[#FFB340]' />
                                <ImStarFull className='text-[20px] text-[#FFB340]' />
                            </label>
                        </div>
                        <div className='flex items-center gap-[16px]'>
                            <input id="star" type="checkbox" className="w-[24px] h-[24px] text-secondary bg-white border-[3px] border-gray-300 rounded-[2px] focus:none" />
                            <label className='flex items-center gap-[8px]' htmlFor="star">
                                <ImStarFull className='text-[20px] text-[#FFB340]' />
                                <ImStarFull className='text-[20px] text-[#FFB340]' />
                                <ImStarFull className='text-[20px] text-[#FFB340]' />
                            </label>
                        </div>
                        <div className='flex items-center gap-[16px]'>
                            <input id="star" type="checkbox" checked="checked" className="w-[24px] h-[24px] text-secondary bg-white border-[3px] border-gray-300 rounded-[2px] focus:none" />
                            <label className='flex items-center gap-[8px]' htmlFor="star">
                                <ImStarFull className='text-[20px] text-[#FFB340]' />
                                <ImStarFull className='text-[20px] text-[#FFB340]' />
                                <ImStarFull className='text-[20px] text-[#FFB340]' />
                                <ImStarFull className='text-[20px] text-[#FFB340]' />
                            </label>
                        </div>
                        <div className='flex items-center gap-[16px]'>
                            <input id="star" type="checkbox" className="w-[24px] h-[24px] text-secondary bg-white border-[3px] border-gray-300 rounded-[2px] focus:none" />
                            <label className='flex items-center gap-[8px]' htmlFor="star">
                                <ImStarFull className='text-[20px] text-[#FFB340]' />
                                <ImStarFull className='text-[20px] text-[#FFB340]' />
                                <ImStarFull className='text-[20px] text-[#FFB340]' />
                                <ImStarFull className='text-[20px] text-[#FFB340]' />
                                <ImStarFull className='text-[20px] text-[#FFB340]' />
                            </label>
                        </div>
                    </div>

                </div>
            </div>

            <div className='col-span-3 mt-[65px]'>
                <div className=' flex items-center justify-between'>
                    <p className='text-[18px] text-[#424241]/50 '>Showing  <span className='text-black font-semibold'>20</span> of <span className='text-black font-semibold'>160</span> product</p>

                    <div className='flex items-center gap-[12px]'>
                        <p className='text-[18px] text-[#424241]/50'>Short by:</p>
                        <button className=' border-[1.2px] border-[#E9E9E9] w-[180px] h-[40px] flex items-center justify-center gap-[7px] text-[#383838] text-[18px] font-semibold py-[25px]'>Newest Items<RiArrowDownSLine /></button>
                    </div>
                </div>

                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] mt-[22px]'>
                        {
                            products.filter((product) => product.category !== "flash deals").map(product => <ProductCard key={product._id} product={product} />)
                        }
                    </div>
                </div>
                <div className='flex justify-end'>
                    <div className='flex items-center gap-[18px] mt-[40px] mb-[50px]'>
                        <button className='text-[18px] text-secondary font-semibold border-[1px] border-[#E9E9E9] rounded-[5px] px-[26px] py-[12px] flex items-center gap-[18px]'><IoIosArrowBack className='text-blue-500' /> <span>Previous</span> </button>
                        <div className='flex items-center'>
                            <button className='bg-secondary text-white px-[24px] py-[12px] text-[18px] font-semibold border-[1px] border-secondary rounded-l-[5px]'>1</button>
                            <button className='bg-white text-primary px-[24px] py-[12px] text-[18px] font-semibold border-[1px] border-[#E9E9E9]'>2</button>
                            <button className='bg-white text-primary px-[24px] py-[12px] text-[18px] font-semibold border-[1px] border-[#E9E9E9] rounded-r-[5px]'>3</button>
                        </div>
                        <button className='text-[18px] text-secondary font-semibold border-[1px] border-[#E9E9E9] rounded-[5px] px-[26px] py-[12px] flex items-center gap-[18px]'><IoIosArrowForward className='text-blue-500' /> <span>Next</span> </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductCategory;