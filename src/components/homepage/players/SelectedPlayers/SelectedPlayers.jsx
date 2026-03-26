import React from 'react';
import { RiDeleteBin4Line } from "react-icons/ri";

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
    console.log(selectedPlayers);

    const handleDeleteSelectedPlayer = (player) => {
        const filteredPlayers = selectedPlayers.filter((selectedPlayer) => selectedPlayer.playerName !== player.playerName);
        setSelectedPlayers(filteredPlayers);

        setCoin(coin + player.price);   // to update the price
    };

    return (
        <div>
            {
            selectedPlayers.length === 0
            ? <div className='p-20 text-center border-4 border-emerald-600 rounded-2xl'>
                <h2 className='font-bold text-3xl'>No Players Selected</h2>
                <p className='opacity-80'>Select Your Unbeatable Players</p>
            </div>
            : selectedPlayers.map((player, index) => 
            <div key={index} className='flex items-center justify-between gap-6 rounded-2xl border border-gray-200 p-6 my-5'>
                <div className='flex gap-4 items-center'>
                    <img className='w-19 rounded-2xl' src={`${player.playerImg}`} alt="" />
                    <div>
                        <h2 className='font-semibold text-2xl mb-1'>{player.playerName}</h2>
                        <p className='text-[#131313] opacity-60'>{player.playerType}</p>
                    </div>
                </div>
                <button onClick={() => handleDeleteSelectedPlayer(player)} className='btn text-2xl text-rose-500 cursor-pointer'><RiDeleteBin4Line /></button>
            </div>)
                
            }
        </div>
    );
};

export default SelectedPlayers;