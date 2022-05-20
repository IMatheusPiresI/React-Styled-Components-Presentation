import styled from 'styled-components'

export const Container = styled.header` 
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0em 2em;
    background-color: ${({theme}) => theme.colors.primary};

    & h1 {
        color: ${({theme}) => theme.colors.text};
    }
`;

export const Button = styled.button`
    max-width: 150px;
    padding: 10px 25px;
    border: none;
    color: ${({theme}) => theme.colors.text};
    text-shadow: 1px 1px #000;
    border-radius: 25px;
    background-color: rgba(255, 255, 255, .5);
    box-shadow: 0px 0px 5px 0px ${({theme}) => theme.colors.shadow_outside}, inset 0px 0px 15px 0px ${({theme}) => theme.colors.shadow_inside};
`;