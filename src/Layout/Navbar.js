import React from "react";
import { Link } from "react-router-dom";
import logo from '.././Assets/Icons/pirvoya_logo.png'
import cart from '.././Assets/Icons/cart.png'
import { BiSearch } from 'react-icons/bi';
import { HiOutlineUser } from 'react-icons/hi';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdNavigateNext } from 'react-icons/md';

const Navbar = () => {

    return (
        <nav className="px-[20px] lg:px-[32px] border-b border-[#EFEEEE] pb-[10px]">
            <div className="grid grid-cols-6 md:grid-cols-12 items-center">
                <div className=" col-span-3 order-1 block lg:hidden w-full">
                    <img className="w-[100px]" src={logo} alt="Project-Nirvoya-Logo" />
                </div>
                <div className=" order-3 lg:order-1 col-span-9 w-full flex items-center gap-10">
                    <img className="hidden lg:block  w-[141px]" src={logo} alt="Project-Nirvoya-Logo" />
                    <div className="flex w-full">
                        <input className=" w-full border border-[#F1F1F1] rounded-l-[5px] bg-[#F6F6F6] pl-[13px] lg:pl-[13px] py-[8px] lg:py-[13px] outline-none focus:bg-white" type="search" name="search" id="search" placeholder="I'm looking for..." />
                        <button className="bg-secondary px-[20px] py-[14px] rounded-r-[5px] text-2xl text-white"><BiSearch /></button>
                    </div>
                </div>
                <div className=" order-2 lg:order-2 col-span-3 w-full">
                    <div className="flex justify-end items-center gap-8 w-full">
                        <div>
                            <Link className="text-base flex items-center gap-1" to='/login'><HiOutlineUser /> <span className="hidden lg:block">Login</span></Link>
                        </div>
                        <div>
                            <Link className="text-base flex items-center gap-1" to='/wishlist'> <AiOutlineHeart /> <span className="hidden lg:block">Wishlist</span></Link>
                        </div>
                        <div>
                            <Link className="text-base flex items-center gap-1 relative" to='/myCart'>
                                <img className="w-[16px] " src={cart} alt="" />
                                <span className="hidden lg:block">My Cart</span>
                                <span className="bg-secondary text-white w-4 lg:w-5 h-4 lg:h-5 rounded-full flex justify-center items-center text-xs lg:text-sm absolute lg:relative top-[-8px] lg:top-0 left-[8px] lg:left-0">1</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <ul className="uppercase flex items-center justify-between text-[14px] mt-[20px]">
                    <li className=" cursor-pointer hover:text-secondary border-b-2 pb-2 border-b-transparent hover:border-b-2 hover:border-secondary">Women's Fashion</li>
                    <li className=" cursor-pointer hover:text-secondary border-b-2 pb-2 border-b-transparent hover:border-b-2 hover:border-secondary">Men's Fashion</li>
                    <li className=" cursor-pointer hover:text-secondary border-b-2 pb-2 border-b-transparent hover:border-b-2 hover:border-secondary">Kid's Fashion</li>
                    <li className="hidden lg:block cursor-pointer hover:text-secondary border-b-2 pb-2 border-b-transparent hover:border-b-2 hover:border-secondary">Home & Lifestyle</li>
                    <li className="hidden lg:block cursor-pointer hover:text-secondary border-b-2 pb-2 border-b-transparent hover:border-b-2 hover:border-secondary">Arts & Crafts</li>
                    <li className="hidden lg:block cursor-pointer hover:text-secondary border-b-2 pb-2 border-b-transparent hover:border-b-2 hover:border-secondary">Computer & Electronics</li>
                    <li className="hidden lg:block cursor-pointer hover:text-secondary border-b-2 pb-2 border-b-transparent hover:border-b-2 hover:border-secondary">Food & Grocery</li>
                    <li className="block lg:hidden cursor-pointer hover:text-secondary border-b-2 pb-2 border-b-transparent hover:border-b-2 hover:border-secondary text-lg text-[#999999]"><MdNavigateNext /></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;