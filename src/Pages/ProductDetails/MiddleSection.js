import React from 'react';

const MiddleSection = () => {
    return (
        <div className='mx-[20px] lg:mx-[32px]'>
            <div className='bg-[#FCFCFC]'>
                <h2 className=' font-semibold text-[24px] text-secondary py-[20px] px-[48px] border-[1px] border-[#F1F1F1]'>Product Details of Men's Stone Tech Short Sleeve</h2>
                <div className='px-[48px] pb-[35px] mt-[25px] border-b-[1px] border-[#F1F1F1]'>
                    <h3 className=' font-semibold text-[#333333] text-[24px]'>See the best picture no matter where you sit</h3>
                    <div className='grid grid-cols-2 mt-[19px] text-[18px]'>
                        <ul className='list-disc ml-[20px]'>
                            <li>Size: M, L, XL</li>
                            <li>Product Type: Jogger</li>
                            <li>Main Material: Cotton</li>
                            <li>Gender: Male</li>
                            <li>Gender: Male</li>
                            <li>Waist: Mid-rise</li>
                            <li>Zip: Fly</li>
                        </ul>
                        <ul className='list-disc ml-[20px]'>
                            <li>Zipper: Yes Pocket</li>
                            <li>Pocket: Two front and One Back Pockets.</li>
                            <li>100% Authentic Product</li>
                            <li>Product color may slightly vary due to our photography and Sometimes it’s vary on our devices</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MiddleSection;