import { Route, Routes } from 'react-router-dom'
import Launches from '../routes/Launches'
import SingleLauch from '../routes/SingleLaunch'
import NavBar from '../components/NavBar'
import Favourites from '../routes/Favourites'


const App = () => {


	return (
		<>
			<NavBar />
			<Routes>
				<Route path='/' element={<Launches />} />
				<Route path='/:id' element={<SingleLauch />} />
				<Route path='/favourites' element={<Favourites />} />
			</Routes>
		</>
	)
}

export default App
