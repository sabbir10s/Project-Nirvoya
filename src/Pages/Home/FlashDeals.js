import React from 'react';
import ProductCard from '../../Shared/ProductCard';
import useProducts from '../../Shared/useProducts';

const FlashDeals = () => {
    const [products] = useProducts([])
    return (
        <div className='mt-[30px] lg:mt-[50px]'>
            <h2 className='text-[16px] lg:text-[26px] mb-[16px] lg:mb-[32px] font-bold'>Flash Deals</h2>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[16px] lg:gap-[25px]'>
                {
                    products.filter((product) => product.category === "flash deals").map(product => <ProductCard key={product._id} product={product} />)
                }
            </div>
        </div >
    );
};

export default FlashDeals;