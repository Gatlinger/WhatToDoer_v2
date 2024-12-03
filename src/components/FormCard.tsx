import { TextField } from "@mui/material"
import { Card } from "../componentsFromCard/Card"
import { CardBox } from "./MyCard"
import styled from "styled-components"
import { ButtonStyled } from "../componentsFromCard/ButtonStyled.styled"
import React from "react"

type FormCardPropsType = {
    callBack: (URL:string, title: string, Description: string) => void
}


export const FormCard = (props: FormCardPropsType) => {

    const [UrlData, setUrlData] = React.useState("")
    const [TitleData, setTitleData] = React.useState("")
    const [DescrData, setDescrData] = React.useState("")


    return (
        <CardBox>
            <AddCard>
                <TextFieldStyled label={"URL"} onChange={(e) => setUrlData(e.target.value)}></TextFieldStyled>
                <TextFieldStyled label={"Название"} onChange={(e) => setTitleData(e.target.value)}></TextFieldStyled>
                <TextFieldStyled label={"Описание"} onChange={(e) => setDescrData(e.target.value)}></TextFieldStyled>
                <ButtonStyled id={"dsfgdsfg"} theme={"primary"} onClick={() => props.callBack(UrlData, TitleData, DescrData)}>ДОБАВИТЬ</ButtonStyled>
            </AddCard>
        </CardBox>
    )
}

const AddCard = styled(Card)`
    display: flex;
    flex-direction: column;
    background: #ffadad;
    gap: 30px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease-in-out;

    ${ButtonStyled} {
        width: 100%;
    }
`


const TextFieldStyled = styled(TextField)`
  background: white;
  & label.Mui-focused {
    color: black;
  }
  & .MuiInput-underline:after {
    border-bottom-color: black;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: white;
    }
    &:hover fieldset {
      border-color: white;
    }
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
`;