import styled from "styled-components";

export const Text = styled.h1 `
    position: relative;;
    height: 19px;
    margin-left: 20px;
    gap: 0px;
    color: ${props => props.color || 'black'};
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    text-align: left;
    bottom: 12px


`