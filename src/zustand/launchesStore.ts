import { StateCreator, create } from 'zustand'


export type LaunchesCountState = {
	count: number
	setCount: () => void
	reset: () => void
}

const LaunchesCountStateCreator: StateCreator<LaunchesCountState> = set => ({
	count: 24,
	setCount: () => set(state => ({ count: state.count + 24 })),
	reset: () => set(() => ({ count: 24 }))
})

export const useLaunchesCountStore = create<LaunchesCountState>()(LaunchesCountStateCreator)