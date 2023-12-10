import { useParams } from 'react-router-dom'
import { Launch, useLaunchesPastQuery } from '../gql/graphql'
import { useFavouritesStore } from '../zustand/favouritesStore'
import FavouritesButton from '../components/FavouritesButton'
import IFrameVideo from '../components/IFrameVideo'


const SingleLauch = () => {

	const { id } = useParams()
	const [result] = useLaunchesPastQuery()
	const { data, fetching, error } = result
	const { launches, add, remove } = useFavouritesStore()
	let launch: Launch = {}

	if (data && data.launchesPast) {
		for (const item of data.launchesPast) {
			if (item && item.id === id) {
				launch = item
			}
		}
	}

	const { mission_name, rocket, details, links } = launch
	const exists = launches.some(item => item.id === id)

	if (fetching) {
		return (
			<main>
				<div className='xl:container'>
					<p className='p-4 xl:px-0 mt-[3.5rem]'>Loading...</p>
				</div>
			</main>

		)
	}

	if (error) {
		return (
			<main>
				<div className='xl:container'>
					<p className='p-4 xl:px-0 mt-[3.5rem]'>Something went wrong! Try later</p>
				</div>
			</main>

		)
	}

	return (
		<main>
			<div className=' xl:container'>
				<div className='p-4 xl:px-0 mt-[3.5rem]'>
					<div className='mb-10 font-mono flex justify-between items-start'>
						<div>
							<h1 className='text-2xl font-semibold'>{mission_name}</h1>
							<h2>{rocket?.rocket_name}</h2>
						</div>

						<FavouritesButton
							isInFavourites={exists}
							onClick={() => exists ? remove(launch) : add(launch)}
						/>
					</div>

					<div className='flex flex-col justify-start gap-6'>
						<div>
							<h3 className='mb-2 text-xl font-medium font-mono'>
								Details
							</h3>
							<p className='font-mono'>{details ? details : 'No details'}</p>
						</div>

						<div className='w-full h-[1px] bg-slate-200' />

						<div>
							<h3 className='mb-2 text-xl font-medium font-mono'>Watch</h3>

							{
								links?.video_link
									? <IFrameVideo
										link={links?.video_link}
										fullWidth
									/>
									: <p className='font-mono'>No video</p>
							}

						</div>

						<div className='w-full h-[1px] bg-slate-200' />

						<div>
							<h3 className='mb-2 text-xl font-medium font-mono'>Read</h3>
							{
								links?.article_link && links.wikipedia
									? <ul className='list-disc list-inside underline text-sm text-slate-500 space-y-4'>
										<li className={`${links?.article_link ? '' : 'hidden'}`}>
											<a
												href={links?.article_link as string}
												target='_blank'
											>
												{links?.article_link}
											</a>
										</li>
										<li className={`${links?.wikipedia ? '' : 'hidden'}`}>
											<a
												href={links?.wikipedia as string}
												target='_blank'
											>
												{links?.wikipedia}
											</a>
										</li>
									</ul>
									: <p className='font-mono'>No links</p>
							}
						</div>

					</div>
				</div>
			</div>
		</main>
	)
}

export default SingleLauch