import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { toast } from 'react-toastify';

const SelectedPlayer = ({player,selectedPlayers,setSelectedPlayers, coin, setCoin}) => {


    const handleDeleteSelectedPlayer = (player) => {
        const filteredPlayers = selectedPlayers.filter(deletePlayer => deletePlayer.PlayerName !== player.PlayerName)
        setSelectedPlayers(filteredPlayers);
        toast(`${player.PlayerName} is Deleted`);

        setCoin(coin + player.Price)

    }
    console.log(player);
    return (
        <div>
            <div className='p-6 border border-[#13131310] flex justify-between items-center rounded-xl'>

            <div className='flex gap-6 items-center'>
                <img className='w-20 h-20 rounded-xl' src={player.PlayerImage} alt="" />
                <div>
                    <h3 className='text-2xl font-semibold text-[#131313]'>{player.PlayerName}</h3>
                    <h5 className='text-[#13131360]'>{player.PlayerType}</h5>
                </div>
            </div>
            <button className='btn text-red-500' onClick={() => handleDeleteSelectedPlayer(player)}>
                <RiDeleteBin6Line />
            </button>
            

            </div>
        </div>
    );
};

export default SelectedPlayer;