import styled from 'styled-components'

export const Container = styled.main` 
    width: 100%;
    min-height: calc(100vh - 150px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2em;
    background-color: ${({theme}) => theme.colors.secondary};

    & h1 {
        color: ${({theme}) => theme.colors.text};
    }
`;

export const CardChapter = styled.div`
    width: 400px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 3em 1em;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 1px ${({theme}) => theme.colors.shadow_outside}, inset 0px 0px 150px 0px ${({theme}) => theme.colors.shadow_inside};

    & h1 {
        font-size: 33px;
        color: ${({theme}) => theme.colors.text};
        text-align: center;
    }

    & svg {
        font-size: 300px;
        color: ${({theme}) => theme.colors.styled_components}
    }
`;