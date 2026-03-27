import React, { use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Players = ({fetchPlayersData, setCoin, coin}) => {

    const [selectedBtn, setSelectedBtn] = useState('available');
    const [selectedPlayers, setSelectedPlayers] = useState([])


    const playersData = use(fetchPlayersData)
    return (
        <div>

            <div className='flex justify-between items-center mt-20 mb-9 max-w-11/12 mx-auto'>
                <h3 className='font-bold text-3xl text-[#131313]'>
                    {selectedBtn === 'available' ? 'Available Players' : `Selected Players (${selectedPlayers.length}/${playersData.length})`}
                </h3>

                <div>
                    <button 
                    onClick={() => setSelectedBtn('available')} className={`btn ${selectedBtn === 'available' ? 'bg-[#E7FE29]' : ''} rounded-r-none rounded-l-xl `}>Available</button>
                    <button 
                    onClick={() => setSelectedBtn('selected')} className={`btn ${selectedBtn === 'selected' ? 'bg-[#E7FE29]' : ''} rounded-l-none rounded-r-xl`}>Selected({selectedPlayers.length}) </button>
                </div>
            </div>



            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-11/12 mx-auto'>
                {
                    selectedBtn==='available' ? playersData.map((player, index) => <AvailablePlayers key={index} player={player} setCoin={setCoin} coin={coin} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}></AvailablePlayers>) : <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={setCoin}></SelectedPlayers>
                }
                
            </div>

            {/* {
                selectedBtn === 'available' ? <AvailablePlayers></AvailablePlayers> : <SelectedPlayers></SelectedPlayers>
            } */}
        </div>
    );
};

export default Players;