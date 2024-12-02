import styled from "styled-components";

export const Text = styled.h1 `
    position: relative;;
    height: 19px;
    margin-left: 20px;
    gap: 0px;
    opacity: 0px;
    color: ${props => props.color || 'black'};
    font-family: Arial;
    font-size: 16px;
    font-weight: 700;
    line-height: 19.36px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;


`