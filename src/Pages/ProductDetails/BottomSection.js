import React, { useEffect, useState } from 'react';
import star from '../../Assets/Icons/star.png'
import halfStar from '../../Assets/Icons/half star.png'
import ReactStars from 'react-stars';
const BottomSection = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    if (!reviews.length) {
        return <p>Loading...</p>
    }
    console.log(reviews.length);
    return (
        <div className='mx-[20px] lg:mx-[32px]'>
            <div className='bg-[#FCFCFC] px-[48px] pb-[60px] mt-[30px] mb-[50px]'>
                <div className='flex items-center gap-[75px]'>
                    <div>
                        <h3 className='text-[20px] text-[#3D3D3F] font-semibold'>Customer reviews</h3>
                        <div className='flex items-center gap-[4px] mt-[10px]'>
                            <img className='w-[15px]' src={star} alt="" />
                            <img className='w-[15px]' src={star} alt="" />
                            <img className='w-[15px]' src={star} alt="" />
                            <img className='w-[15px]' src={star} alt="" />
                            <img className='w-[15px]' src={halfStar} alt="" />
                            <p className='text-[15px] text-[#3D3D3F]'>4.6 out of 5</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center gap-[11px]'>
                            <p>5 Stars</p>
                            <progress class="progress progress-warning w-56" value="80" max="100"></progress>
                            <p>79%</p>
                        </div>
                        <div className='flex items-center gap-[11px]'>
                            <p>4 Stars</p>
                            <progress class="progress progress-warning w-56" value="12" max="100"></progress>
                            <p>59%</p>
                        </div>
                        <div className='flex items-center gap-[11px]'>
                            <p>3 Stars</p>
                            <progress class="progress progress-warning w-56" value="5" max="100"></progress>
                            <p>15%</p>
                        </div>
                        <div className='flex items-center gap-[11px]'>
                            <p>2 Stars</p>
                            <progress class="progress progress-warning w-56" value="2" max="100"></progress>
                            <p>10%</p>
                        </div>
                        <div className='flex items-center gap-[11px]'>
                            <p>1 Stars</p>
                            <progress class="progress progress-warning w-56" value="1" max="100"></progress>
                            <p>7%</p>
                        </div>
                    </div>

                    <button className='text-white hover:text-secondary bg-secondary hover:bg-white border border-transparent hover:border-secondary w-[200px] h-[40px] rounded-[3px] flex items-center justify-center'>Write a Review</button>
                </div>

                <h3 className='pt-[35px] pb-[20px] text-[24px] font-semibold'>Reviews ({reviews.length})</h3>
                <div className='border-t-[1px] border-[#F1F1F1] pt-[19px]'>
                    {
                        reviews.map(review => <div >
                            <div className='flex gap-[16px]'>
                                <div>
                                    <img className='w-[56px] rounded-[4px]' src={review.img} alt="" />
                                </div>
                                <div className='text-[18px]'>
                                    <p>{review.customerName}</p>
                                    <div className='flex items-center gap-[16px]'>
                                        <p>{review.rating}</p>
                                        <ReactStars
                                            size={20}
                                            value={review.rating}
                                            edit={false}
                                        ></ReactStars>
                                        <p className='text-[#A7A7A7]'>{review.time}</p>
                                    </div>
                                </div>
                            </div>
                            <p className='mt-[24px] mb-[30px]'>{review.comment}</p>
                        </div>)
                    }
                </div>

                <h3 className='pt-[30px] pb-[16px] text-[24px] font-semibold'>Add Your Review</h3>
                <p className='text-[18px] text-[#A7A7A7] mb-[28px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>

                <div className='flex flex-col gap-[16px]'>
                    <label htmlFor='name' className='text-[18px] text-[#383838] '>Name*</label>
                    <input className='border-[1px] border-[#A7A7A7] rounded-[5px] w-1/2 h-[60px] text-[20px]' type="text" name="name" id="name" />
                </div>
                <div className='flex flex-col gap-[16px] mt-[32px]'>
                    <label htmlFor='email' className='text-[18px] text-[#383838] '>Email*</label>
                    <input className='border-[1px] border-[#A7A7A7] rounded-[5px] w-1/2 h-[60px] text-[20px]' type="email" name="email" id="email" />
                </div>
                <div className='flex flex-col gap-[16px] mt-[32px]'>
                    <label htmlFor='review' className='text-[18px] text-[#383838] '>Review*</label>
                    {/* <input  type="email" name="email" id="email" /> */}
                    <textarea className='border-[1px] border-[#A7A7A7] rounded-[5px] w-1/2 h-[119px] text-[20px]' name="review" id="review" cols="30" rows="4"></textarea>
                </div>
                <div className='flex items-center gap-[16px] my-[42px]'>
                    <p>Rating</p>
                    <ReactStars
                        size={20}
                        value={4}
                        edit={false}
                    ></ReactStars>
                </div>

                <button className='bg-secondary text-white w-[180px] h-[60px] text-18px flex items-center justify-center rounded-[8px]'>Submit</button>
            </div>
        </div>
    );
};

export default BottomSection;