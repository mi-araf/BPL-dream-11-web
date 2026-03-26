import { Suspense } from 'react';
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

	return (
		<>
			<Navbar />
			<Banner	/>
			<Suspense fallback={ <div className='loading loading-dots loading-xl'></div> }>
				<Players playerPromise={playerPromise} />
			</Suspense>
		</>
	)
}

export default App