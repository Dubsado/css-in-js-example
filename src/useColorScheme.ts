import { useEffect, useState } from 'react'

const isDark = () =>
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches

export const useColorSheme = () => {
    const [colorScheme, setColorScheme] = useState(isDark() ? 'dark' : 'light')

    useEffect(() => {
        const handleChange = (event: any) => {
            setColorScheme(event.matches ? 'dark' : 'light')
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

    return { isLightMode: colorScheme == 'light' }
}
