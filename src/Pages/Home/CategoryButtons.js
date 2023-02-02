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
import { Link } from 'react-router-dom';
const CategoryButtons = () => {
    return (
        <div className='mt-[30px] lg:mt-[50px]'>
            <h2 className=' text-[16px] lg:text-[26px] mb-[16px] lg:mb-[32px] font-bold'>Category</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[8px] lg:gap-[13px]'>
                <Link to='/productCategory'>
                    <div className='flex items-center justify-between bg-[#FFFFFF] hover:bg-base-200/50 px-[8px] lg:px-[18px] py-[17px] lg:py-[20px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]'>
                        <div className='flex items-center gap-[8px] lg:gap-[10px]'>
                            <img className='w-[20px] md:w-[30px]' src={health} alt="" />
                            <p className='text-[#394146] text-[12px] md:text-[16px]'>Health & Household</p>
                        </div>
                        <MdNavigateNext className=' text-[14px] lg:text-[25px] text-[#999999]' />
                    </div>
                </Link>
                <Link to='/productCategory'>
                    <div className='flex items-center justify-between bg-[#FFFFFF] hover:bg-base-200/50 px-[8px] lg:px-[18px] py-[17px] lg:py-[20px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]'>
                        <div className='flex items-center gap-[8px] lg:gap-[10px]'>
                            <img className='w-[20px] md:w-[30px]' src={kids} alt="" />
                            <p className='text-[#394146] text-[12px] md:text-[16px]'>Kids Fashion</p>
                        </div>
                        <MdNavigateNext className=' text-[14px] lg:text-[25px] text-[#999999]' />
                    </div>
                </Link>
                <Link to='/productCategory'>
                    <div className='flex items-center justify-between bg-[#FFFFFF] hover:bg-base-200/50 px-[8px] lg:px-[18px] py-[17px] lg:py-[20px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]'>
                        <div className='flex items-center gap-[8px] lg:gap-[10px]'>
                            <img className='w-[20px] md:w-[30px]' src={toys} alt="" />
                            <p className='text-[#394146] text-[12px] md:text-[16px]'>Toys</p>
                        </div>
                        <MdNavigateNext className=' text-[14px] lg:text-[25px] text-[#999999]' />
                    </div>
                </Link>
                <Link to='/productCategory'>
                    <div className='flex items-center justify-between bg-[#FFFFFF] hover:bg-base-200/50 px-[8px] lg:px-[18px] py-[17px] lg:py-[20px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]'>
                        <div className='flex items-center gap-[8px] lg:gap-[10px]'>
                            <img className='w-[20px] md:w-[30px]' src={groceries} alt="" />
                            <p className='text-[#394146] text-[12px] md:text-[16px]'>Groceries</p>
                        </div>
                        <MdNavigateNext className=' text-[14px] lg:text-[25px] text-[#999999]' />
                    </div>
                </Link>
                <Link to='/productCategory'>
                    <div className='flex items-center justify-between bg-[#FFFFFF] hover:bg-base-200/50 px-[8px] lg:px-[18px] py-[17px] lg:py-[20px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]'>
                        <div className='flex items-center gap-[8px] lg:gap-[10px]'>
                            <img className='w-[20px] md:w-[30px]' src={home} alt="" />
                            <p className='text-[#394146] text-[12px] md:text-[16px]'>Home & Lifestyle</p>
                        </div>
                        <MdNavigateNext className=' text-[14px] lg:text-[25px] text-[#999999]' />
                    </div>
                </Link>
                <Link to='/productCategory'>
                    <div className='flex items-center justify-between bg-[#FFFFFF] hover:bg-base-200/50 px-[8px] lg:px-[18px] py-[17px] lg:py-[20px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]'>
                        <div className='flex items-center gap-[8px] lg:gap-[10px]'>
                            <img className='w-[20px] md:w-[30px]' src={men} alt="" />
                            <p className='text-[#394146] text-[12px] md:text-[16px]'>Men Fashion</p>
                        </div>
                        <MdNavigateNext className=' text-[14px] lg:text-[25px] text-[#999999]' />
                    </div>
                </Link>
                <Link to='/productCategory'>
                    <div className='flex items-center justify-between bg-[#FFFFFF] hover:bg-base-200/50 px-[8px] lg:px-[18px] py-[17px] lg:py-[20px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]'>
                        <div className='flex items-center gap-[8px] lg:gap-[10px]'>
                            <img className='w-[20px] md:w-[30px]' src={women} alt="" />
                            <p className='text-[#394146] text-[12px] md:text-[16px]'>Women’s Fashion</p>
                        </div>
                        <MdNavigateNext className=' text-[14px] lg:text-[25px] text-[#999999]' />
                    </div>
                </Link>
                <Link to='/productCategory'>
                    <div className='flex items-center justify-between bg-[#FFFFFF] hover:bg-base-200/50 px-[8px] lg:px-[18px] py-[17px] lg:py-[20px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]'>
                        <div className='flex items-center gap-[8px] lg:gap-[10px]'>
                            <img className='w-[20px] md:w-[30px]' src={stationary} alt="" />
                            <p className='text-[#394146] text-[12px] md:text-[16px]'>Stationary & Books</p>
                        </div>
                        <MdNavigateNext className=' text-[14px] lg:text-[25px] text-[#999999]' />
                    </div>
                </Link>
                <Link to='/productCategory'>
                    <div className='flex items-center justify-between bg-[#FFFFFF] hover:bg-base-200/50 px-[8px] lg:px-[18px] py-[17px] lg:py-[20px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]'>
                        <div className='flex items-center gap-[8px] lg:gap-[10px]'>
                            <img className='w-[20px] md:w-[30px]' src={leather} alt="" />
                            <p className='text-[#394146] text-[12px] md:text-[16px]'>Leather Goods</p>
                        </div>
                        <MdNavigateNext className=' text-[14px] lg:text-[25px] text-[#999999]' />
                    </div>
                </Link>
                <Link to='/productCategory'>
                    <div className='flex items-center justify-between bg-[#FFFFFF] hover:bg-base-200/50 px-[8px] lg:px-[18px] py-[17px] lg:py-[20px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]'>
                        <div className='flex items-center gap-[8px] lg:gap-[10px]'>
                            <img className='w-[20px] md:w-[30px]' src={jewelleries} alt="" />
                            <p className='text-[#394146] text-[12px] md:text-[16px]'>Jewelleries</p>
                        </div>
                        <MdNavigateNext className=' text-[14px] lg:text-[25px] text-[#999999]' />
                    </div>
                </Link>
                <Link to='/productCategory'>
                    <div className='flex items-center justify-between bg-[#FFFFFF] hover:bg-base-200/50 px-[8px] lg:px-[18px] py-[17px] lg:py-[20px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]'>
                        <div className='flex items-center gap-[8px] lg:gap-[10px]'>
                            <img className='w-[20px] md:w-[30px]' src={watches} alt="" />
                            <p className='text-[#394146] text-[12px] md:text-[16px]'>Watches</p>
                        </div>
                        <MdNavigateNext className=' text-[14px] lg:text-[25px] text-[#999999]' />
                    </div>
                </Link>
                <Link to='/productCategory'>
                    <div className='flex items-center justify-between bg-[#FFFFFF] hover:bg-base-200/50 px-[8px] lg:px-[18px] py-[17px] lg:py-[20px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]'>
                        <div className='flex items-center gap-[8px] lg:gap-[10px]'>
                            <img className='w-[20px] md:w-[30px]' src={men_fashion} alt="" />
                            <p className='text-[#394146] text-[12px] md:text-[16px]'>Men Fashion</p>
                        </div>
                        <MdNavigateNext className=' text-[14px] lg:text-[25px] text-[#999999]' />
                    </div>
                </Link>
                <Link to='/productCategory'>
                    <div className='flex items-center justify-between bg-[#FFFFFF] hover:bg-base-200/50 px-[8px] lg:px-[18px] py-[17px] lg:py-[20px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]'>
                        <div className='flex items-center gap-[8px] lg:gap-[10px]'>
                            <img className='w-[20px] md:w-[30px]' src={tools} alt="" />
                            <p className='text-[#394146] text-[12px] md:text-[16px]'>Tools</p>
                        </div>
                        <MdNavigateNext className=' text-[14px] lg:text-[25px] text-[#999999]' />
                    </div>
                </Link>
                <Link to='/productCategory'>
                    <div className='flex items-center justify-between bg-[#FFFFFF] hover:bg-base-200/50 px-[8px] lg:px-[18px] py-[17px] lg:py-[20px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]'>
                        <div className='flex items-center gap-[8px] lg:gap-[10px]'>
                            <img className='w-[20px] md:w-[30px]' src={pet} alt="" />
                            <p className='text-[#394146] text-[12px] md:text-[16px]'>Pet Supplies</p>
                        </div>
                        <MdNavigateNext className=' text-[14px] lg:text-[25px] text-[#999999]' />
                    </div>
                </Link>
                <Link to='/productCategory'>
                    <div className='flex items-center justify-between bg-[#FFFFFF] hover:bg-base-200/50 px-[8px] lg:px-[18px] py-[17px] lg:py-[20px] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)]'>
                        <div className='flex items-center gap-[8px] lg:gap-[10px]'>
                            <img className='w-[20px] md:w-[30px]' src={seasonal} alt="" />
                            <p className='text-[#394146] text-[12px] md:text-[16px]'>Seasonal</p>
                        </div>
                        <MdNavigateNext className=' text-[14px] lg:text-[25px] text-[#999999]' />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default CategoryButtons;