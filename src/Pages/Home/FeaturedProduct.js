import React from 'react';
import getProducts from '../../Shared/getProducts'
import ProductCard from '../../Shared/ProductCard';
import { FiChevronDown } from 'react-icons/fi';
const FeaturedProduct = () => {
    const [products] = getProducts([])
    return (
        <div className='mt-[50px]'>
            <h2 className='text-[26px] mb-[32px] font-bold'>Featured Products</h2>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[25px]'>
                {
                    products.filter((product) => product.category !== "flash deals").map(product => <ProductCard key={product._id} product={product} />)
                }
            </div>
            <div className='flex justify-center'>
                <button className='uppercase bg-secondary text-white font-bold py-[10px] px-[26px] rounded-full my-[40px] flex items-center gap-1'><span>show more</span> <FiChevronDown className='text-2xl' /></button>
            </div>
        </div >
    );
};

export default FeaturedProduct;