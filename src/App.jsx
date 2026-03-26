import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/homepage/banner/Banner'
import Players from './components/homepage/players/Players';
import Navbar from './components/navbar/Navbar'
import { ToastContainer } from 'react-toastify';

const fetchPlayer = async () => {
	// / --> public er vitore bojhai
	const res = await fetch('/data.json');
	return res.json();
}

function App() {
	const playerPromise = fetchPlayer();

	const [coin, setCoin] = useState(500000);

	return (
		<>
			<Navbar coin={coin} />

			{/* <Banner /> */}

			<ToastContainer />

			<Suspense fallback={ <div className='loading loading-dots loading-xl'></div> }>
				<Players playerPromise={playerPromise} setCoin={setCoin} coin={coin} />
			</Suspense>

		</>
	)
}

export default App