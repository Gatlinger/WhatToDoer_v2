import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from {
        opacity: 0;
        scale: 0.3;
    }
    to {
        opacity: 1;
    }
`

export const Card = styled.div `
    width: 300px;
    height: 350px;
    color: white;
    border-radius: 15px;
    box-shadow: 3px 3px 10px   #2f3136;
    
    &:hover {
        transform: scale(1.05);
    }
`
