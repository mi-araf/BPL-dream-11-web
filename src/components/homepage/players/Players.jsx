import React, { use, useState } from 'react';
import AvailablePlayers from './AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

const Players = ({ playerPromise }) => {
    const players = use(playerPromise);

    const [selectedType, setSelectedType] = useState('available');

    return (
        <div className='my-15 max-w-10/12 mx-auto'>
            <div className='flex justify-between gap-4 items-center'>
                {
                    selectedType === 'available'
                    ? <h2 className='font-bold text-[28px] mb-4'>Available Players</h2>
                    : <h2 className='font-bold text-[28px] mb-4'>Selected Players</h2>
                }

                <div>
                    <button onClick={() => setSelectedType('available')} className={`btn ${selectedType === 'available' ? `bg-[#E7FE29]` : ``} rounded-r-none rounded-l-xl`}>Available</button>
                    <button onClick={() => setSelectedType('selected')} className={`btn ${selectedType === 'selected' ? `bg-[#E7FE29]` : ``} rounded-l-none rounded-r-xl`}>Selected (0)</button>
                </div>
            </div>

            {
                selectedType === 'available'
                ? <AvailablePlayers players={players} />
                : <SelectedPlayers />
            }

        </div>
    );
};

export default Players;