import React, { useState } from "react";
import CurrencyImg from '../../assets/Currency.png'
import NavLogo from '../../assets/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const NavBar = ({coin}) => {

    const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center max-w-11/12 mx-auto pt-5">
        <div className="flex gap-48 items-center">
            <span className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open ? <IoCloseSharp /> : <GiHamburgerMenu />
                }               
                </span>
                <ul className={`md:hidden absolute duration-1000 bg-gray-200 rounded-xl space-y-3 ${open? 'top-16' : '-top-60'}`}>
                <li className="text-[#131313] hover:bg-gray-400 duration-500 px-4 py-2.5 rounded-xl"><a href="">Home</a></li>
                <li className="text-[#131313] hover:bg-gray-400 duration-500 px-4 py-2.5 rounded-xl"><a href="">Fixture</a></li>
                <li className="text-[#131313] hover:bg-gray-400 duration-500 px-4 py-2.5 rounded-xl"><a href="">Teams</a></li>
                <li className="text-[#131313] hover:bg-gray-400 duration-500 px-4 py-2.5 rounded-xl"><a href="">Schedules</a></li>
                </ul>
            <img src={NavLogo} alt="" />
        </div>
        <div>
            <ul className="flex gap-8 justify-between items-center">
                <div className="md:flex hidden gap-8 items-center">
                <li className="text-[#13131370]"><a href="">Home</a></li>
                <li className="text-[#13131370]"><a href="">Fixture</a></li>
                <li className="text-[#13131370]"><a href="">Teams</a></li>
                <li className="text-[#13131370]"><a href="">Schedules</a></li>
                </div>
                <li>
                    <button className="flex gap-2 border border-[#13131311] p-4 rounded-xl">
                    <span className="font-semibold text-[#131313]">{coin} Coin</span>
                    <img src={CurrencyImg} alt="" />
                </button>
                </li>
                
            </ul>
        </div>
    </nav>
  );
};

export default NavBar;
