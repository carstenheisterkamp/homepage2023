import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
interface UIStore {
  theme: string
  navActive: boolean,
  setTheme: () => void
  setNavActive: () => void
}

const useUIStore = create<UIStore>()(
  devtools(
  persist(
    (set, get) => ({
        theme: "dark",
        navActive: false,
        setTheme: () => set((state) => ({
          ...state,
          theme: get().theme === "dark" ? "light" : "dark"
        })),
        setNavActive: () => set((state) =>({
          ...state,
          navActive: get().navActive ? false : true
        }))  
      }), {
        name: 'theme',
    }
)))

export const useTheme = () => useUIStore((state) => state.theme)
export const useSetTheme = () => useUIStore((state) => state.setTheme)

export const useNav = () => useUIStore((state) => state.navActive)
export const useSetNav= () => useUIStore((state) => state.setNavActive)