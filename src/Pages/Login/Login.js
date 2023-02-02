import React from 'react';
import loginImg from '../../Assets/Images/loginImg.png'
import facebook from '../../Assets/Icons/facebook2.png'
import google from '../../Assets/Icons/google.png'
import close from '../../Assets/Icons/colse.png'
const Login = () => {
    return (
        <div>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className=" w-11/12 max-w-5xl">
                    <div className='grid grid-cols-1 lg:grid-cols-2 '>
                        <div className='bg-primary rounded-l-[24px] text-white lg:px-[86px] lg:py-[30px] hidden lg:block'>
                            <h1 className='text-[28px] font-semibold'>Create Account</h1>
                            <p className='text-18px mt-[12px]'>Sign up with your mobile number or email to get started</p>
                            <img className='w-[321px]' src={loginImg} alt="" />
                        </div>
                        <div className='rounded-[24px] lg:rounded-r-[24px] backdrop-blur-sm bg-gradient-to-r from-[#868B94]/5 to-[#ffffff]/20 '>
                            <div className="modal-action">
                                <label htmlFor="my-modal-5" className="px-8 cursor-pointer">
                                    <img className='w-[19px]' src={close} alt="" />
                                </label>
                            </div>
                            <div className='px-[10px] lg:px-[65px] w-full'>
                                <h2 className='text-[#042847] text-[24px] font-semibold'>Create your Project Nirvoya Account</h2>
                                <div>
                                    <input className='w-full mt-[16px] p-[9px]' type="text" placeholder='Full name' />
                                </div>
                                <div>
                                    <input className='w-full mt-[16px] p-[9px]' type="text" placeholder='Enter Email or Mobile number' />
                                </div>
                                <div>
                                    <input className='w-full mt-[16px] p-[9px]' type="password" placeholder='Enter Password' />
                                </div>
                                <div>
                                    <input className='w-full mt-[16px] p-[9px]' type="password" placeholder='Confirm Password' />
                                </div>
                                <div className='mt-[20px]'>
                                    <label className="main" htmlFor="star1">
                                        <p className='text-[#757575]'> I agree to Project <span className='text-secondary'>Nrvoya terms & conditions</span> </p>
                                        <input type="checkbox" id="star1" />
                                        <span className="agreeBox"></span>
                                    </label>
                                </div>

                                <div className='mt-20px'>
                                    <button className='bg-secondary text-white text-[16px] font-semibold w-full py-[8px] rounded-[2px]'>Create Account</button>
                                </div>

                                <div className='flex items-center justify-center my-[8px]'>
                                    <div className='flex items-center justify-between gap-[4px] w-1/2'>
                                        <div className='bg-white h-[1px] w-full'></div>
                                        <p>Or</p>
                                        <div className='bg-white h-[1px] w-full'></div>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center gap-[8px]'>
                                    <button className='border-[1.5px] border-white py-[9.5px] px-[46px] flex items-center gap-[11px] text-[14px] text-[#042847] font-semibold rounded-full hover:bg-white '>
                                        <img className='w-[24px]' src={google} alt="" />
                                        <p>Google</p>
                                    </button>
                                    <button className='border-[1.5px] border-white py-[9.5px] px-[46px] flex items-center gap-[11px] text-[14px] text-[#042847] font-semibold rounded-full hover:bg-white '>
                                        <img className='w-[24px]' src={facebook} alt="" />
                                        <p>Facebook</p>
                                    </button>
                                </div>
                                <div className='text-center text-[#757575] text-[14px] my-[42px]'>
                                    <p>Already member? <span className='text-secondary cursor-pointer'>Login here</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;