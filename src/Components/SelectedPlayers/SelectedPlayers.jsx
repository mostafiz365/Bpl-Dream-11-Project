import React from 'react';
import SelectedPlayer from './SelectedPlayer';

const SelectedPlayers = ({selectedPlayers, setSelectedPlayers, coin, setCoin}) => {
    return (
        <div className='space-y-5 grid col-span-3'>
            { selectedPlayers.length === 0 ? 
            <div className='text-center my-20 space-y-5'>
                <h3 className='text-2xl font-semibold text-[#13131360]'>NO Players Selected Yet</h3>
                <h5 className='text-[#13131360]'>Go To Available tab to Selected Players</h5>
            </div> :
                selectedPlayers.map((player,index)=> <SelectedPlayer key={index} player={player} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} coin={coin} setCoin={setCoin}></SelectedPlayer>)
            }
        </div>
    );
};

export default SelectedPlayers;