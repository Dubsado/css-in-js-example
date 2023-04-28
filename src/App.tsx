import styled from 'styled-components'
import Button from './Button'
import { getTheme } from './theme'

const StyledApp = styled.div`
    --primaryColor: ${({ theme }) => theme.primaryColor};
    --secondaryColor: ${getTheme('secondaryColor')};
    --backgroundColor: ${getTheme('backgroundColor')};
    background-color: var(--backgroundColor);
    h2 {
        color: var(--primaryColor);
    }
`

function App({ toggleTheme }: { toggleTheme: () => void }) {
    return (
        <StyledApp>
            <h2>hello würld</h2>
            <Button onClick={toggleTheme} />
        </StyledApp>
    )
}

export default App
