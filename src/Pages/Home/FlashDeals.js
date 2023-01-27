import React from 'react';
import getProducts from '../../Shared/getProducts';
import ProductCard from '../../Shared/ProductCard';

const FlashDeals = () => {
    const [products] = getProducts([])
    return (
        <div className='mt-[50px]'>
            <h2 className='text-[26px] mb-[32px] font-bold'>Flash Deals</h2>

            <div className='grid grid-cols-2     md:grid-cols-3 lg:grid-cols-4 gap-[25px]'>
                {
                    products.filter((product) => product.category === "flash deals").map(product => <ProductCard key={product._id} product={product} />)
                }
            </div>
        </div >
    );
};

export default FlashDeals;