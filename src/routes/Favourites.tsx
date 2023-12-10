import { Launch } from '../gql/graphql'
import { useFavouritesStore } from '../zustand/favouritesStore'
import { IconButton } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import DeleteIcon from '@mui/icons-material/Delete'
import { useNavigate } from 'react-router-dom'


const Favourites = () => {

	const { launches, remove } = useFavouritesStore()
	const navigate = useNavigate()

	const renderFavouriteLaunches = (arr: Launch[]) => {
		return arr.map(item => {
			return (
				<div key={item.id} className='p-2 w-full flex justify-between items-center border border-slate-300 shadow-md rounded-md'>
					<h1 className='font-mono w-2/3'>mission: <span className='text-slate-500'>
						{item.mission_name}
					</span></h1>
					<div>
						<IconButton onClick={() => remove(item)}>
							<DeleteIcon color='warning' />
						</IconButton>
						<IconButton onClick={() => navigate(`/${item.id}`)}>
							<ArrowForwardIcon color='primary' />
						</IconButton>
					</div>
				</div>
			)
		})
	}

	const favouriteLaunchesList = renderFavouriteLaunches(launches)

	return (
		<main>
			<div className=' xl:container'>
				<div className='p-4 xl:px-0 mt-[3.5rem] flex flex-col justify-start gap-4'>
					{
						favouriteLaunchesList.length
							? favouriteLaunchesList
							: 'No favourite launches'
					}
				</div>
			</div>
		</main>
	)
}

export default Favourites