import React from 'react';
import { RiAccountPinCircleLine } from "react-icons/ri";
import { FaRegFlag } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";

const Card = ({ player, setCoin, coin, selectedPlayers, setSelectedPlayers }) => {
    // Check if player is already selected based on the global selectedPlayers array
    const isSelected = selectedPlayers.some(selectedPlayer => selectedPlayer.id === player.id);

    const handleChoosePlayer = () => {        
        // Prevent selecting the same player multiple times
        if (isSelected) return;

        let newCoin = coin - player.price;

        if (newCoin >= 0) {
            setCoin(newCoin);
        } else {
            alert('Not enough coin');
            return ; 
        }

        setSelectedPlayers([...selectedPlayers, player]);
    };

    return (
        <div>
            <div className="card bg-base-200 shadow-sm">
                <figure className="overflow-hidden rounded-2xl aspect-3/3">
                    <img src={player.playerImg} alt={player.playerName} className="p-6 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title"><RiAccountPinCircleLine />{player.playerName}</h2>
                    <div className='flex justify-between items-center gap-2'>
                        <FaRegFlag className='text-[#131313] opacity-70' />
                        <p className='text-[#131313] opacity-70'>{player.playerCountry}</p>
                        <button className="btn ">
                            {player.playerType}
                        </button>
                    </div>

                    <div className='divider'></div>

                    <h2 className='font-bold'>Rating: ({player.rating})</h2>

                    <div className='flex justify-between gap-4 font-bold'>
                        <p>{player.batStyle}</p>
                        <p className='text-right'>{player.bowlingStyle}</p>
                    </div>

                    <div className="card-actions justify-between items-center">
                        <p className='font-semibold flex items-center'>Price: <TbCurrencyTaka />{player.price}</p>
                        <button onClick={() => {handleChoosePlayer()}} className="btn border-gray-400" disabled={isSelected ? true : false}>
                            {isSelected === true ? 'Selected' : 'Choose Player'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;