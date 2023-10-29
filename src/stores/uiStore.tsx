import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface UIStore {
  isTouchDevice: boolean
  theme: string
  navActive: boolean
  cookiesAccepted: boolean
  setIsTouchDevice: (payload: boolean) => void
  setTheme: () => void
  setNavActive: () => void
  setCookiesAcceptance: (payload: boolean) => void
}

const useUIStore = create<UIStore>()(
  devtools(
  persist(
    (set, get) => ({
        isTouchDevice: false,
        theme: "dark",
        navActive: false,
        cookiesAccepted: false,
        setIsTouchDevice: (payload: boolean) => set(() => ({isTouchDevice: payload})),
        setTheme: () => set((state) => ({
          ...state,
          theme: get().theme === "dark" ? "light" : "dark"
        })),
        setNavActive: () => set((state) => ({
          ...state,
          navActive: get().navActive ? false : true
        })),
        setCookiesAcceptance: (payload: boolean) => set(() => ({cookiesAccepted: payload})), 
      }), {
        name: 'theme',
    }
)))

export const useDevice = () => useUIStore((state) => state.isTouchDevice)
export const useSetIsTouchDevice = () => useUIStore((state) => state.setIsTouchDevice)

export const useTheme = () => useUIStore((state) => state.theme)
export const useSetTheme = () => useUIStore((state) => state.setTheme)

export const useNav = () => useUIStore((state) => state.navActive)
export const useSetNav= () => useUIStore((state) => state.setNavActive)

export const useCookies = () => useUIStore((state) => state.cookiesAccepted)
export const useSetCookies = () => useUIStore((state) => state.setCookiesAcceptance)