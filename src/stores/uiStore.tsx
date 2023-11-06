import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface UIStore {
  isTouchDevice: boolean
  theme: string
  navActive: boolean
  pointerPosition: Array<number>
  scrollPosition: number
  cookiesAccepted: boolean
  setPointerPosition: (payload: [number, number]) => void
  setScrollPosition: (payload: number) => void
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
        pointerPosition: [0,0],
        scrollPosition: 0,
        cookiesAccepted: false,
        setPointerPosition: (payload: Array<number>) => set(() => ({pointerPosition: payload})),
        setScrollPosition: (payload: number) => set(() => ({scrollPosition: payload})),
        setIsTouchDevice: (payload: boolean) => set(() => ({isTouchDevice: payload})),
        setTheme: () => set(() => ({
          theme: get().theme === "dark" ? "light" : "dark"
        })),
        setNavActive: () => set(() => ({
          navActive: !get().navActive
        })),
        setCookiesAcceptance: (payload: boolean) => set(() => ({
          cookiesAccepted: payload
        })), 
      }), {
        name: 'theme',
    }
)))

export const useIsTouchDevice = () => useUIStore((state) => state.isTouchDevice)
export const useSetIsTouchDevice = () => useUIStore((state) => state.setIsTouchDevice)

export const useTheme = () => useUIStore((state) => state.theme)
export const useSetTheme = () => useUIStore((state) => state.setTheme)

export const useNav = () => useUIStore((state) => state.navActive)
export const useSetNav= () => useUIStore((state) => state.setNavActive)

export const useCookies = () => useUIStore((state) => state.cookiesAccepted)
export const useSetCookies = () => useUIStore((state) => state.setCookiesAcceptance)

export const usePointerPosition = () => useUIStore((state) => state.pointerPosition)
export const useSetPointerPosition = () => useUIStore((state) => state.setPointerPosition)

export const useScrollPosition = () => useUIStore((state) => state.scrollPosition)
export const useSetScrollPosition = () => useUIStore((state) => state.setScrollPosition)