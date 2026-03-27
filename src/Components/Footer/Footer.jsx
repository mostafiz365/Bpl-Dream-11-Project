import React from 'react';
import FooterImg from '../../assets/logo-footer.png'

const Footer = () => {
    return (
        <div className='mt-96 bg-[#06091A] max-w-full relative'>
            <div className='max-w-11/12 mx-auto'>

                <div className='border-2 border-[#FFFFFF] p-6 rounded-3xl bg-[#FFFFFF15] w-11/12 absolute -top-52'>
                    <div className='background-img rounded-3xl border border-[#13131310]'>
                    <div className='text-center py-20 space-y-5'>
                        <h3 className='text-[32px] font-bold text-[#131313]'>Subscribe to our Newsletter</h3>
                        <p className='text-xl font-medium text-[#13131370]'>Get the latest updates and news right in your inbox!</p>
                        <div className='flex gap-5 justify-center'>
                            <input className='px-8 py-4 rounded-xl bg-[#FFFFFF]' type="text" placeholder='Enter your email'/>
                            <button className='px-7 py-4 rounded-xl bg-linear-to-r from-yellow-400 to-purple-400 font-bold text-[#040D11]'>Subscribe</button>
                        </div>
                    </div>
                    </div>

                </div>

                <div className='pt-60'>
                    <img className='mx-auto' src={FooterImg} alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 text-center md:text-left gap-20 pt-16 pb-20'>
                    <div className='space-y-4'>
                        <h4 className='font-semibold text-[18px] text-[#FFFFFF]'>About Us</h4>
                        <p className='text-[#FFFFFF60]'>We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div className='space-y-4'>
                        <h4 className='font-semibold text-[18px] text-[#FFFFFF]'>Quick Links</h4>
                        <ul className='md:list-disc space-y-3'>
                            <li className='text-[#FFFFFF60]'> <a href="">Home</a></li>
                            <li className='text-[#FFFFFF60]'> <a href="">Services</a></li>
                            <li className='text-[#FFFFFF60]'> <a href="">About</a></li>
                            <li className='text-[#FFFFFF60]'> <a href="">Contact</a></li>
                        </ul>
                    </div>
                    <div className='space-y-4'>
                        <h4 className='font-semibold text-[18px] text-[#FFFFFF]'>Subscribe</h4>
                        <p className='text-[#FFFFFF60]'>Subscribe to our newsletter for the latest updates.</p>
                        <input className='bg-[#FFFFFF] rounded-l-xl px-6 py-3' type="text" placeholder='Enter your email'/>
                        <button className='px-6 py-3 rounded-r-xl bg-linear-to-r from-yellow-400 to-purple-400 font-bold text-[#040D11]'>Subscribe</button>
                    </div>
                </div>
                <div>
                    <div className="divider"></div>
                    <p className='text-[#FFFFFF60] text-center py-8'>@2024 Your Company All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;