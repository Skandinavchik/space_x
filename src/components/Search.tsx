import { TextField } from '@mui/material'
import { Launch } from '../gql/graphql'


type SearchProps = {
	data: Launch[]
	searchResult: (data: Launch[]) => void
}

const Search = ({ data, searchResult }: SearchProps) => {

	const result = (arr: Launch[], value: string) => {
		return arr.filter(item => item.launch_year === value)
	}

	return (
		<TextField
			variant="outlined"
			size='small'
			placeholder='Search by launch year...'

			onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
				searchResult(result(data, event.target.value))
			}}
			sx={{ marginBottom: '1rem' }}
			className='w-full'
		/>
	)
}

export default Search