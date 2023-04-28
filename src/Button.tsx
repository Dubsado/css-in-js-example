import styled from 'styled-components'
import { getTheme } from './theme'

const StyledButton = styled.button`
    span {
        text-decoration: line-through;
        color: var(--secondaryColor);
    }
    color: ${getTheme('secondaryColor')};
`

function App() {
    return (
        <StyledButton>
            Sübmit that <span>shit</span> thing
        </StyledButton>
    )
}

export default App
