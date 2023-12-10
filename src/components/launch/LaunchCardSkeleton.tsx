import Skeleton from '@mui/material/Skeleton'


const LaunchCardSkeleton = () => {

	const style = {
		height: '18px',
	}

	return (
		<div className='w-full border p-2 rounded-md flex flex-col justify-start gap-2 shadow-md'>
			<Skeleton
				variant="rounded"
				style={{ ...style, width: '75%' }}
			/>
			<Skeleton
				variant="rounded"
				style={{ ...style, width: '40%' }}
			/>
			<Skeleton
				variant="rounded"
				style={{ ...style, width: '55%' }}
			/>
			<Skeleton
				variant="rounded"
				style={{ ...style, width: '35%' }}
			/>

			<Skeleton
				variant="rounded"
				style={{ ...style, width: '100%', height: '36px', marginTop: '1rem' }}
			/>
		</div>
	)
}

export default LaunchCardSkeleton