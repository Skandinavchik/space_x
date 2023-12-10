import { IconButton } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import { yellow } from '@mui/material/colors'


type FavouritesButtonProps = {
	isInFavourites: boolean
	onClick?: () => void
}

const FavouritesButton = ({ isInFavourites, onClick }: FavouritesButtonProps) => {

	return (
		<IconButton onClick={onClick}>
			{
				isInFavourites
					? <StarIcon sx={{ color: yellow[700] }} />
					: <StarBorderOutlinedIcon color='primary' />
			}
		</IconButton>
	)
}

export default FavouritesButton