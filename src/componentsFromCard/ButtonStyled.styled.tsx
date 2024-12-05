import styled from "styled-components";

type ButtonStyledPropsType = {
    theme: "outlined" | "primary"
    id: string;
}

export const ButtonStyled = styled.button<ButtonStyledPropsType> `
    width: 86px;
    height: 66px;
    gap: 0px;
    border-radius: 5px;
    opacity: 0px;
    color: ${props => props.theme === "outlined" && "#4E71FE" || props.theme === "primary" && "#FFFFFF"};
    border: 2px solid #4E71FE;
    background-color:${props => props.theme === "primary" && "#4E71FE" || props.theme === "outlined" && "#FFFFFF"};
    bottom: 10px;
    font-family: Arial;
    font-size: 10px;
    font-weight: 700;
    line-height: 20px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    cursor: pointer;

    &:hover {
        background-color: #9bafff;
        border-color: #9bafff;
        color: white;
    }

`