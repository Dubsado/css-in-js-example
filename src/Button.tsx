import styled from 'styled-components'
import { getTheme } from './theme'

const StyledButton = styled.button`
    span {
        text-decoration: line-through;
        color: var(--secondaryColor);
    }
    color: ${getTheme('secondaryColor')};
`

function Button({ onClick }: { onClick: () => void }) {
    return (
        <StyledButton onClick={onClick}>
            Toggle <span>shit</span> dark mode
        </StyledButton>
    )
}

export default Button
