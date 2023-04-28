import styled from 'styled-components'
import Button from './Button'
import { getTheme } from './theme'

const StyledApp = styled.div`
    --primaryColor: ${({ theme }) => theme.primaryColor};
    --secondaryColor: ${getTheme('secondarColor')};
    --backgroundColor: ${getTheme('backgroundColor')};
    background-color: var(--backgroundColor);
    h2 {
        color: var(--primaryColor);
    }
`

function App() {
    return (
        <StyledApp>
            <h2>hello würld</h2>
            <Button />
        </StyledApp>
    )
}

export default App
