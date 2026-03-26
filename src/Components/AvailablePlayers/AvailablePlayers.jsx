import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { IoFlag } from "react-icons/io5";
import { toast } from "react-toastify";

const AvailablePlayers = ({ player, setCoin, coin, setSelectedPlayers, selectedPlayers }) => {

  const [isSelected, setIsSelected]= useState(false);
  const handleChoicePlayers = () => {

    let newCoin = coin - player.Price;
    if(newCoin >= 0){
      setCoin(coin- player.Price);
    }else{
      toast.error('Not Enough Coin to Purchase this Player');
      return;
    } 
    setIsSelected(true);
    toast.success(`${player.PlayerName} is Selected`);

    setSelectedPlayers([...selectedPlayers,player])
  }

  return (
    <div>

    <div className="card bg-base-100 shadow-sm p-6">
      <figure>
        <img className="rounded-2xl h-60"
          src={player.PlayerImage}
          alt="Shoes"
        />
      </figure>
      <div className="card-body mt-5 space-y-3">
        <h2 className="card-title"> <FaUserAlt /> {player.PlayerName}</h2>

        <div className="flex justify-between items-center">
            <p className="flex gap-2 items-center"><IoFlag /> {player.PlayerCountry}</p>
            <button className="btn rounded-xl">{player.PlayerType}</button>
        </div>
        <div className="divider"></div>
        
        <h5 className="font-bold text-[#131313]">Rating</h5>

        <div className="flex">
            <p className="font-semibold text-[#131313]">{player.BattingStyle}</p>
            <p className="text-[#13131370] text-right">{player.BowlingStyle}</p>
        </div>
        <div className="card-actions flex justify-between items-center">
            <p className="font-semibold text-[#131313]"> Price:${player.Price}</p>
          <button className="btn" onClick={handleChoicePlayers} disabled={isSelected}>{isSelected? 'Selected' : 'Choose Player'}</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AvailablePlayers;
