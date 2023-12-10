import { Button } from '@mui/material'
import { Launch } from '../../gql/graphql'
import { useNavigate } from 'react-router-dom'
import { useFavouritesStore } from '../../zustand/favouritesStore'
import FavouritesButton from '../FavouritesButton'


const LaunchCard = ({ data }: { data: Launch }) => {

	const { id, mission_name, launch_year, rocket } = data
	const { launches, add, remove } = useFavouritesStore()
	const navigate = useNavigate()

	const exists = launches.some(item => item.id === id)

	return (
		<div className='p-2 w-full border border-slate-300 rounded-md shadow-md text-slate-900 font-medium leading-7 flex flex-col justify-between'>
			<div className='font-mono xl:text-sm'>
				<p>id: <span className='text-slate-500 font-normal'>{id}</span></p>
				<h2>mission: <span className='text-slate-500 font-normal'>{mission_name}</span></h2>
				<h2>rocket: <span className='text-slate-500 font-normal'>{rocket?.rocket_name}</span></h2>
				<h5>year: <span className='text-slate-500 font-normal'>{launch_year}</span></h5>
			</div>

			<div className='flex justify-center items-center gap-2 mt-4'>
				<Button
					variant='outlined'
					onClick={() => navigate(`/${id}`)}
					style={{ width: '100%', fontFamily: 'monospace' }}
				>
					learn more
				</Button>

				<FavouritesButton
					isInFavourites={exists}
					onClick={() => exists ? remove(data) : add(data)}
				/>
			</div>
		</div>
	)
}

export default LaunchCard