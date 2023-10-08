import { create } from "zustand"
// import { devtools, persist } from 'zustand/middleware'


type GameStore = {
    score: number
    increaseScore: () => void,
    resetScore: () => void
}

const gameStore = (set, get) => ({
        score: 0,
        increaseScore: () => set((state: { score: number }) => ({ score: state.score + 1 })),
        resetScore: () => set({ score: 0 })
    })  


export const useGameStore = create<GameStore>(gameStore)