import React from "react";
import { Container, CardChapter } from "./style";
import { SiStyledcomponents } from 'react-icons/si'

export function Main() {

    return(
        <Container>
            <CardChapter>
                <h1>This is Chapter: Styled-Components</h1>
                <SiStyledcomponents/>
            </CardChapter>
        </Container>
    )
}