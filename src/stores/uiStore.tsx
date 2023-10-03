import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'


interface UIStore {
    navActive: boolean
    darkMode: boolean
    audioMuted: boolean
    cookiesAllowed: boolean
    toggleNav: () => void
    toggleDarkMode:() => void
    toggleAudioMuted: () => void
    toggleCookiesAllowed: () => void    
}

export const useUIStore = create<UIStore>()(
  devtools(
  persist(
    (set) =>({
      navActive: false,
      darkMode: false,
      audioMuted: true  ,
      cookiesAllowed: false,
      toggleNav:  () => set((state) => ({ navActive: !state.navActive})),
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode})),
      toggleAudioMuted: () => set((state) => ({ audioMuted: !state.audioMuted})),
      toggleCookiesAllowed: () => set((state) => ({ cookiesAllowed: !state.cookiesAllowed}))
      }),
      {
        name: 'uiStore'
      })
    )
)





