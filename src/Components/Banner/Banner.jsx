import React from 'react';
import './Banner.css'
import BannerImg from '../../assets/banner-main.png'

const Banner = () => {
    return (
        <div className='bg-linear-to-r from-purple-200 to-blue-200 rounded-3xl py-16 px-3 text-center space-y-6 max-w-11/12 mx-auto'>
            <img className='mx-auto' src={BannerImg} alt="" />
            <h1 className='font-bold text-[40px] text-[#FFFFFF]'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <h5 className='font-medium text-2xl text-[#ffffff70]'>Beyond Boundaries Beyond Limits</h5>
            <button className='bg-[#E7FE29] p-5 text-black font-bold rounded-xl'>Claim Free Credit</button>
        </div>
    );
};

export default Banner;