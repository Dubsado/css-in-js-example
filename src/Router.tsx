import { ThemeProvider } from 'styled-components'
import App from './App'
import { darkTheme, theme } from './theme'
import { useColorSheme } from './useColorScheme'

// https://medium.com/rbi-tech/theme-with-styled-components-and-typescript-209244ec15a3

export const Router = () => {
    const { isLightMode } = useColorSheme()
    console.log(`is light mode: `, isLightMode)
    return (
        <>
            <ThemeProvider theme={isLightMode ? theme : darkTheme}>
                <App />
            </ThemeProvider>
        </>
    )
}
