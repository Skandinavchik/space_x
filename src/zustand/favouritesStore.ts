import { StateCreator, create } from 'zustand'
import { Launch } from '../gql/graphql'


export type favouritesState = {
	launches: Launch[]
	add: (launch: Launch) => void
	remove: (launch: Launch) => void
}

const favouritesStateCreator: StateCreator<favouritesState> = set => ({
	launches: [],
	add: launch => set(state => {
		const exists = state.launches.some(currentItem => currentItem.id === launch.id)
		return {
			launches: exists ? state.launches : [...state.launches, launch]
		}
	}),

	remove: launch => set(state => {
		const filteredLaunches = state.launches.filter(currentItem => currentItem.id !== launch.id)
		return {
			launches: filteredLaunches
		}
	}),
})

export const useFavouritesStore = create<favouritesState>()(favouritesStateCreator)