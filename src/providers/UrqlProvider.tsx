import { Client, Provider, cacheExchange, fetchExchange } from 'urql'


const client = new Client({
	url: 'https://main--spacex-l4uc6p.apollographos.net/graphql',
	exchanges: [cacheExchange, fetchExchange],
})

const UrqlProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<Provider value={client}>
			{children}
		</Provider>
	)
}

export default UrqlProvider