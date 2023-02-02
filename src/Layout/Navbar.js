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
        <nav className="px-[20px] lg:px-[32px] border-b border-[#EFEEEE] pb-[10px] relative">
            <div className="grid grid-cols-6 md:grid-cols-12 items-center">
                <div className=" col-span-3 order-1 block lg:hidden w-full">
                    <Link to='/'><img className="w-[100px]" src={logo} alt="Project-Nirvoya-Logo" /></Link>
                </div>
                <div className=" order-3 lg:order-1 col-span-9 w-full flex items-center gap-10">
                    <Link to='/'><img className="hidden lg:block  w-[141px]" src={logo} alt="Project-Nirvoya-Logo" /></Link>
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
                    <li className=" cursor-pointer hover:text-secondary border-b-2 pb-2 border-b-transparent hover:border-b-2 hover:border-secondary block group">Women's Fashion
                        <div className="hidden group-hover:block absolute top-[119px] bg-white px-[5px] lg:px-[71px] pt-[30px] pb-[26px] w-full text-[#757575] normal-case">
                            <div className=" grid grid-cols-3 lg:grid-cols-5 justify-between">
                                <div>
                                    <h2 className=" text-black font-semibold">Saree</h2>
                                    <p>Cotton</p>
                                    <p>Silk</p>
                                    <p>Katan</p>
                                    <p>Muslin</p>
                                    <p>Jamdani</p>
                                    <p>Georgette</p>
                                    <p>Nakshi Kantha</p>
                                    <p>Linen</p>
                                    <p>Khadi</p>
                                    <p>Tangail Taant</p>
                                    <p>Monipuri</p>
                                    <p>Dhakai Benaroshi</p>
                                </div>
                                <div>
                                    <h2 className=" text-black font-semibold">Clothes</h2>
                                    <p>T-shirt</p>
                                    <p>Shorts</p>
                                    <p>Shirt</p>
                                    <p>Tracksuit</p>
                                    <p>Jeans</p>
                                    <p>Georgette</p>
                                    <p>Waistcoat</p>
                                    <p>Sweater</p>
                                    <p>coats</p>
                                    <p>Suit</p>
                                    <p>Sweatshirt</p>
                                    <p>Uniform</p>
                                </div>
                                <div>
                                    <h2 className=" text-black font-semibold">Cosmetic</h2>
                                    <p>Perfume</p>
                                    <p>Eye make-up</p>
                                    <p>Skin care</p>
                                    <p>Hair care</p>
                                    <p>Make-up</p>
                                    <p>Oral Care</p>
                                    <p>Body Care</p>
                                    <p>Sanitary pad</p>
                                    <p>Shower Gels & Creams</p>
                                    <p>Hair Removal Products</p>
                                    <p>Lipstick</p>
                                    <p>Suntan cream</p>
                                </div>
                                <div>
                                    <h2 className=" text-black font-semibold">Sports & Outdoor</h2>
                                    <p>Sweatshirt</p>
                                    <p>T-shirt</p>
                                    <p>Sports Bra</p>
                                    <p>Leggings</p>
                                    <p>Tracksuit</p>
                                    <p>Running Shoes</p>
                                    <p>Sports Bag</p>
                                    <p>Sports Equipment</p>
                                    <p>Outdoor Shoes</p>
                                    <p>Snow Boot</p>
                                    <p>Outdoor Equipment</p>
                                    <p>Sports Accessories</p>
                                </div>
                                <div className="flex flex-row justify-between lg:flex-col gap-[33px]">
                                    <div>
                                        <h2 className=" text-black font-semibold">Personal Care</h2>
                                        <p>Perfume</p>
                                        <p>Sexual Health</p>
                                        <p>After Shave Products</p>
                                        <p>Razor blade</p>
                                    </div>
                                    <div>
                                        <h2 className=" text-black font-semibold">Shoes</h2>
                                        <p>Heeled shoes</p>
                                        <p>sneakers</p>
                                        <p>Casual Shoes</p>
                                        <p>Babet</p>
                                        <p>Sandals</p>
                                        <p>Slipper</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </li>
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