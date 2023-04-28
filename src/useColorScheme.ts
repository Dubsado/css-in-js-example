import { useEffect, useState } from 'react'

const isDark = () =>
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches

export const useColorSheme = () => {
    const [colorScheme, setColorScheme] = useState(isDark() ? 'dark' : 'light')
    const [_, setOverriden] = useState(false)

    const toggleTheme = () => {
        const newColorScheme = colorScheme == 'light' ? 'dark' : 'light'
        setColorScheme(newColorScheme)
        setOverriden(true)
    }

    useEffect(() => {
        const handleChange = (event: any) => {
            setOverriden((overridden) => {
                if (overridden) return true
                setColorScheme(event.matches ? 'dark' : 'light')
                return false
            })
        }
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', handleChange)
        return () => {
            window
                .matchMedia('(prefers-color-scheme: dark)')
                .removeEventListener('change', handleChange)
        }
    }, [])

    return { isLightMode: colorScheme == 'light', toggleTheme }
}
