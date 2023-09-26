import { create } from 'zustand'

type uiStore = {
    navActive: boolean
    darkMode: boolean
    audioAllowed: boolean
    cookiesAllowed: boolean
    toggleNav: () => void
    toggleDarkMode:() => void
    toggleAudioAllowed: () => void
    toggleCookiesAllowed: () => void
}

export const useUIStore = create<uiStore>((set) => ({
  navActive: false,
  darkMode: false,
  audioAllowed: false,
  cookiesAllowed: false,
  toggleNav:  () => set((state) => ({ navActive: !state.navActive})),
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode})),
  toggleAudioAllowed: () => set((state) => ({ audioAllowed: !state.audioAllowed})),
  toggleCookiesAllowed: () => set((state) => ({ cookiesAllowed: !state.cookiesAllowed})),
}))