import { ThemeProvider } from 'styled-components'
import App from './App'
import { darkTheme, theme } from './theme'
import { useColorSheme } from './useColorScheme'

// https://medium.com/rbi-tech/theme-with-styled-components-and-typescript-209244ec15a3

export const Router = () => {
    const { isLightMode, toggleTheme } = useColorSheme()
    return (
        <>
            <ThemeProvider theme={isLightMode ? theme : darkTheme}>
                <App toggleTheme={toggleTheme} />
            </ThemeProvider>
        </>
    )
}
