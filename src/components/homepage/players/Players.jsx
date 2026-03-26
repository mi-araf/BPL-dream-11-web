import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

const Players = ({ playerPromise, setCoin, coin }) => {
    const players = use(playerPromise);

    const [selectedType, setSelectedType] = useState('available');

    const [selectedPlayers, setSelectedPlayers] = useState([]);

    return (
        <div className='my-15 max-w-10/12 mx-auto'>
            <div className='flex justify-between gap-4 mb-5 items-center'>
                {
                    selectedType === 'available'
                    ? <h2 className='font-bold text-[28px]'>Available Players</h2>
                    : <h2 className='font-bold text-[28px]'>Selected Players ({selectedPlayers.length}/{players.length})</h2>
                }

                <div>
                    <button onClick={() => setSelectedType('available')} className={`btn ${selectedType === 'available' ? `bg-[#e9fe29f1]` : ``} rounded-r-none rounded-l-xl`}>Available</button>
                    <button onClick={() => setSelectedType('selected')} className={`btn ${selectedType === 'selected' ? `bg-[#E7FE29]` : ``} rounded-l-none rounded-r-xl`}>Selected ({selectedPlayers.length})</button>
                </div>
            </div>

            {
                selectedType === 'available'
                ? <AvailablePlayers players={players} setCoin={setCoin} coin={coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}  />
                : <SelectedPlayers setCoin={setCoin} coin={coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />
            }

        </div>
    );
};

export default Players;