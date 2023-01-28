import React from 'react';
import Banner from './Banner';
import Category from './Category';
import FeaturedProduct from './FeaturedProduct';
import FlashDeals from './FlashDeals';

const Home = () => {
    return (
        <div className='px-[20px] lg:px-[32px] bg-[#FAFAFA]'>
            <Banner />
            <Category />
            <FlashDeals />
            <FeaturedProduct />
        </div>
    );
};

export default Home;