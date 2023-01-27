import React from 'react';
import Banner from './Banner';
import Category from './Category';

const Home = () => {
    return (
        <div className='px-[2px] lg:px-[32px] bg-[#FAFAFA]'>
            <Banner />
            <Category />
        </div>
    );
};

export default Home;