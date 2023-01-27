import React from 'react';
import health from '../../Assets/Icons/category_icons/health.png'
import kids from '../../Assets/Icons/category_icons/kids.png'
import toys from '../../Assets/Icons/category_icons/toys.png'
import groceries from '../../Assets/Icons/category_icons/groceries.png'
import home from '../../Assets/Icons/category_icons/home.png'
import men from '../../Assets/Icons/category_icons/men.png'
import women from '../../Assets/Icons/category_icons/women.png'
import stationary from '../../Assets/Icons/category_icons/stationary.png'
import leather from '../../Assets/Icons/category_icons/leather.png'
import jewelleries from '../../Assets/Icons/category_icons/jewelleries.png'
import watches from '../../Assets/Icons/category_icons/watches.png'
import men_fashion from '../../Assets/Icons/category_icons/men fashion.png'
import tools from '../../Assets/Icons/category_icons/tools.png'
import pet from '../../Assets/Icons/category_icons/pet.png'
import seasonal from '../../Assets/Icons/category_icons/seasonal.png'
import { MdNavigateNext } from 'react-icons/md';
const Category = () => {
    return (
        <div className='mt-[50px]'>
            <h2 className='text-[26px] mb-[32px]'>Category</h2>
            <div className='grid grid-cols-5 gap-[13px]'>
                <div className='flex items-center justify-between bg-[#FFFFFF] p-[16px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]'>
                    <div className='flex items-center gap-[10px]'>
                        <img className='w-[30px]' src={health} alt="" />
                        <p className='text-[#394146]'>Health & Household</p>
                    </div>
                    <MdNavigateNext className='text-[25px] text-[#999999]' />
                </div>
                <div className='flex items-center justify-between bg-[#FFFFFF] p-[16px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]'>
                    <div className='flex items-center gap-[10px]'>
                        <img className='w-[30px]' src={kids} alt="" />
                        <p className='text-[#394146]'>Kids Fashion</p>
                    </div>
                    <MdNavigateNext className='text-[25px] text-[#999999]' />
                </div>
                <div className='flex items-center justify-between bg-[#FFFFFF] p-[16px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]'>
                    <div className='flex items-center gap-[10px]'>
                        <img className='w-[30px]' src={toys} alt="" />
                        <p className='text-[#394146]'>Toys</p>
                    </div>
                    <MdNavigateNext className='text-[25px] text-[#999999]' />
                </div>
                <div className='flex items-center justify-between bg-[#FFFFFF] p-[16px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]'>
                    <div className='flex items-center gap-[10px]'>
                        <img className='w-[30px]' src={groceries} alt="" />
                        <p className='text-[#394146]'>Groceries</p>
                    </div>
                    <MdNavigateNext className='text-[25px] text-[#999999]' />
                </div>
                <div className='flex items-center justify-between bg-[#FFFFFF] p-[16px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]'>
                    <div className='flex items-center gap-[10px]'>
                        <img className='w-[30px]' src={home} alt="" />
                        <p className='text-[#394146]'>Home & Lifestyle</p>
                    </div>
                    <MdNavigateNext className='text-[25px] text-[#999999]' />
                </div>
                <div className='flex items-center justify-between bg-[#FFFFFF] p-[16px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]'>
                    <div className='flex items-center gap-[10px]'>
                        <img className='w-[30px]' src={men} alt="" />
                        <p className='text-[#394146]'>Men Fashion</p>
                    </div>
                    <MdNavigateNext className='text-[25px] text-[#999999]' />
                </div>
                <div className='flex items-center justify-between bg-[#FFFFFF] p-[16px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]'>
                    <div className='flex items-center gap-[10px]'>
                        <img className='w-[30px]' src={women} alt="" />
                        <p className='text-[#394146]'>Women’s Fashion</p>
                    </div>
                    <MdNavigateNext className='text-[25px] text-[#999999]' />
                </div>
                <div className='flex items-center justify-between bg-[#FFFFFF] p-[16px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]'>
                    <div className='flex items-center gap-[10px]'>
                        <img className='w-[30px]' src={stationary} alt="" />
                        <p className='text-[#394146]'>Stationary & Books</p>
                    </div>
                    <MdNavigateNext className='text-[25px] text-[#999999]' />
                </div>
                <div className='flex items-center justify-between bg-[#FFFFFF] p-[16px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]'>
                    <div className='flex items-center gap-[10px]'>
                        <img className='w-[30px]' src={leather} alt="" />
                        <p className='text-[#394146]'>Leather Goods</p>
                    </div>
                    <MdNavigateNext className='text-[25px] text-[#999999]' />
                </div>
                <div className='flex items-center justify-between bg-[#FFFFFF] p-[16px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]'>
                    <div className='flex items-center gap-[10px]'>
                        <img className='w-[30px]' src={jewelleries} alt="" />
                        <p className='text-[#394146]'>Jewelleries</p>
                    </div>
                    <MdNavigateNext className='text-[25px] text-[#999999]' />
                </div>
                <div className='flex items-center justify-between bg-[#FFFFFF] p-[16px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]'>
                    <div className='flex items-center gap-[10px]'>
                        <img className='w-[30px]' src={watches} alt="" />
                        <p className='text-[#394146]'>Watches</p>
                    </div>
                    <MdNavigateNext className='text-[25px] text-[#999999]' />
                </div>
                <div className='flex items-center justify-between bg-[#FFFFFF] p-[16px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]'>
                    <div className='flex items-center gap-[10px]'>
                        <img className='w-[30px]' src={men_fashion} alt="" />
                        <p className='text-[#394146]'>Men Fashion</p>
                    </div>
                    <MdNavigateNext className='text-[25px] text-[#999999]' />
                </div>
                <div className='flex items-center justify-between bg-[#FFFFFF] p-[16px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]'>
                    <div className='flex items-center gap-[10px]'>
                        <img className='w-[30px]' src={tools} alt="" />
                        <p className='text-[#394146]'>Tools</p>
                    </div>
                    <MdNavigateNext className='text-[25px] text-[#999999]' />
                </div>
                <div className='flex items-center justify-between bg-[#FFFFFF] p-[16px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]'>
                    <div className='flex items-center gap-[10px]'>
                        <img className='w-[30px]' src={pet} alt="" />
                        <p className='text-[#394146]'>Pet Supplies</p>
                    </div>
                    <MdNavigateNext className='text-[25px] text-[#999999]' />
                </div>
                <div className='flex items-center justify-between bg-[#FFFFFF] p-[16px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]'>
                    <div className='flex items-center gap-[10px]'>
                        <img className='w-[30px]' src={seasonal} alt="" />
                        <p className='text-[#394146]'>Seasonal</p>
                    </div>
                    <MdNavigateNext className='text-[25px] text-[#999999]' />
                </div>

            </div>
        </div>
    );
};

export default Category;