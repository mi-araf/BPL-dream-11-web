import React from 'react';
import Card from '../../../ui/Card';

const AvailablePlayers = ({ players, setCoin, coin, selectedPlayers, setSelectedPlayers }) => {
    return (
        <div>
            <div className='grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    players.map(player => {
                        // console.log(player);

                        return (
                            <Card player={player} key={player.id} setCoin={setCoin} coin={coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />
                        )
                    })
                }


            </div>
        </div>
    );
};

export default AvailablePlayers;