import { Launch, useLaunchesPastQuery } from '../../gql/graphql'
import LaunchCard from './LaunchCard'
import LaunchCardSkeleton from './LaunchCardSkeleton'


type LaunchesGridProps = {
	count: number
	data: Launch[]
	page: number
}

const LaunchesGrid = ({ count, data, page }: LaunchesGridProps) => {

	const [result] = useLaunchesPastQuery()
	const { fetching } = result

	const renderLaunchCardSkeleton = () => {
		const skeletonList = Array.from({ length: count }, (_, index) => index + 1)
		return skeletonList.map(item => {
			return (
				<LaunchCardSkeleton key={item} />
			)
		})
	}

	const renderLaunchesCardsList = (arr: Launch[], count: number, page: number) => {
		const slicedCardsList = arr.slice((count * page) - count, count * page)
		return slicedCardsList.map(card => {
			return (
				<LaunchCard key={card.id} data={card} />
			)
		})
	}

	const cardSkeletonList = renderLaunchCardSkeleton()
	const launchesCardsList = renderLaunchesCardsList(data, count, page)
	const showList = fetching ? cardSkeletonList : launchesCardsList

	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-x-4 gap-y-6 xl:gap-x-6 xl:gap-y-8'>
			{showList}
		</div>
	)
}

export default LaunchesGrid