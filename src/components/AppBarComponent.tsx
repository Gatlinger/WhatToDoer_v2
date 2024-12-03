import styled from "styled-components"
import { AppBarStyled } from "./styledComponents/AppBar.styled"

export const AppBarComponent = () => {
    return (
        <AppBarStyled>
          <H1Styled>WhatToDoer_v2</H1Styled>
        </AppBarStyled>
    )
}

export const H1Styled = styled.h1 `
  font-size: 48px;
  text-align: center;
` 