import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/homepage/banner/Banner'
import Players from './components/homepage/players/Players';
import Navbar from './components/navbar/Navbar'

const fetchPlayer = async () => {
	// / --> public er vitore bojhai
	const res = await fetch('/data.json');
	return res.json();
}

function App() {
	const playerPromise = fetchPlayer();

	const [coin, setCoin] = useState(1000000);

	return (
		<>
			<Navbar coin={coin} />

			{/* <Banner /> */}
			
			<Suspense fallback={ <div className='loading loading-dots loading-xl'></div> }>
				<Players playerPromise={playerPromise} setCoin={setCoin} coin={coin} />
			</Suspense>
		</>
	)
}

export default App