import React from "react";
import { Button, Container } from "./style";

export function Header({changeTheme}) {

    return(
        <Container>
            <h1>Chapter</h1>
            <Button onClick={changeTheme}>Trocar Tema</Button>
        </Container>
    )
}