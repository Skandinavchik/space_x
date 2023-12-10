import { Maybe } from 'graphql/jsutils/Maybe'


type IFrameVideoProps = {
	link: Maybe<string>
	fullWidth?: boolean
	width?: string
	height?: string
}

const IFrameVideo = ({ link, fullWidth, width, height }: IFrameVideoProps) => {

	const convertToEmbededLink = (link: Maybe<string>) => {
		const convertedLinkBase = 'https://www.youtube.com/embed/'
		if (link) {
			const path = link.split('/').pop()
			return `${convertedLinkBase}${path}`
		}
	}

	return (
		<div className='aspect-video'>
			<iframe
				width={width}
				height={height}
				src={convertToEmbededLink(link)}
				allowFullScreen
				className={`${fullWidth ? 'w-full h-full' : ''}`}
			/>
		</div>
	)
}

export default IFrameVideo