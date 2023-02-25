import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider'
import { createGlobalStyle } from 'styled-components'

function GlobalStyle() {
    const { theme } = useContext(ThemeContext)

    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
 
    body {
        /* Ici cette syntaxe revient au même que
        background-color: ${({ props }) =>
        props.isDarkMode ? '#2F2E41' : 'white'};
        */
        background-color: ${({ isDarkMode }) => (isDarkMode ? 'black' : 'white')};
        margin: 0;  
    }
`