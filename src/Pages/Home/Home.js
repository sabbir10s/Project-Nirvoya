import React from 'react';
import Banner from './Banner';
import CategoryButtons from './CategoryButtons';
import FeaturedProduct from './FeaturedProduct';
import FlashDeals from './FlashDeals';

const Home = () => {
    return (
        <div className='px-[10px] lg:px-[32px] bg-[#FAFAFA]'>
            <Banner />
            <CategoryButtons />
            <FlashDeals />
            <FeaturedProduct />
        </div>
    );
};

export default Home;