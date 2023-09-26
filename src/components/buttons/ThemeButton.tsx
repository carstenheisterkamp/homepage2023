import { useState } from "react"

export default function ThemeButton() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    
  )
}



/* if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  
  localStorage.theme = 'light'
  localStorage.theme = 'dark'
  localStorage.removeItem('theme') */