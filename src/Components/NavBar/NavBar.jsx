import React from "react";
import CurrencyImg from '../../assets/Currency.png'
import NavLogo from '../../assets/logo.png'

const NavBar = ({coin}) => {
  return (
    <nav className="flex justify-between items-center">
        <div>
            <img src={NavLogo} alt="" />
        </div>
        <div>
            <ul className="flex gap-8 justify-between items-center">
                <li className="text-[#13131370]"><a href="">Home</a></li>
                <li className="text-[#13131370]"><a href="">Fixture</a></li>
                <li className="text-[#13131370]"><a href="">Teams</a></li>
                <li className="text-[#13131370]"><a href="">Schedules</a></li>
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
