import styled from 'styled-components'

export const Container = styled.footer` 
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0em 2em;
    background-color: ${({theme}) => theme.colors.primary};

    & h2 {
        color: ${({theme}) => theme.colors.text};
        text-align: center;
    }
`;
