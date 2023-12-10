import LaunchesGrid from '../components/launch/LaunchesGrid'
import { Launch, useLaunchesPastQuery } from '../gql/graphql'
import { Button } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import { useLaunchesCountStore } from '../zustand/launchesStore'
import { useCallback, useEffect, useState } from 'react'
import Search from '../components/Search'


const Launches = () => {

	const [page, setPage] = useState<number>(1)
	const [searchResult, setSearchResult] = useState<Launch[]>([])
	const { count, setCount, reset } = useLaunchesCountStore()
	const [result] = useLaunchesPastQuery()
	const { data, fetching, error } = result
	let updatedData: Launch[] = []

	if (data?.launchesPast) {
		for (const item of data.launchesPast) {
			if (item) {
				updatedData = [item, ...updatedData]
			}
		}
	}

	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value)
		window.scrollTo({ top: 0 })
	}

	useEffect(() => {
		if (count > 24) {
			reset()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const handleSearchResult = useCallback((data: Launch[]) => {
		setSearchResult(data)
	}, [])


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
			<div className='xl:container'>
				<div className='p-4 xl:px-0 mt-[3.5rem] min-h-[calc(100dvh-3.5rem)] flex flex-col justify-between gap-6'>
					<div>
						<h1 className='mb-2 text-lg font-medium font-mono'>Launches</h1>
						<Search
							data={updatedData}
							searchResult={handleSearchResult}
						/>
						<LaunchesGrid
							count={count}
							data={searchResult.length ? searchResult : updatedData}
							page={page}
						/>
					</div>
					<div className='lg:hidden w-full'>
						<Button
							disabled={fetching}
							variant={'contained'}
							onClick={setCount}
							sx={{
								width: '100%',
								fontFamily: 'monospace'
							}}
						>
							{`${fetching ? 'Loading...' : 'Show more'}`}
						</Button>
					</div>
					<div className='hidden lg:flex justify-center'>
						<Pagination
							count={Math.ceil(searchResult.length ? searchResult.length / count : updatedData.length / count)}
							onChange={handleChange}
							page={page}
							color="primary"
						/>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Launches