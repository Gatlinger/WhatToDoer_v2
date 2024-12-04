import { TextField } from "@mui/material"
import { Card } from "../componentsFromCard/Card"
import { CardBox } from "./MyCard"
import styled from "styled-components"
import { ButtonStyled } from "../componentsFromCard/ButtonStyled.styled"
import React from "react"
import { useDispatch } from "react-redux"
import { AddCardAC, ChangeCardAC } from "../state/cardsReduser"

type FormCardPropsType = {
  callBack: (URL: string, title: string, Description: string) => void
  id: string
  URL?: string
  title?: string
  description?: string
  name?: string
  setDoubleClicked?: (status: boolean) => void
}


export const FormCard = (props: FormCardPropsType) => {

  const [UrlData, setUrlData] = React.useState(props.URL || "")
  const [TitleData, setTitleData] = React.useState(props.title || "")
  const [DescrData, setDescrData] = React.useState(props.description || "")
  const dispatch = useDispatch()

  const changeHandler = () => {
    console.log('111231234');
    
    dispatch(ChangeCardAC(UrlData, TitleData, DescrData, props.id))
    if (props.setDoubleClicked) {
      props.setDoubleClicked(false)
    }
  }

  return (
    <CardBox>
      <AddCard>

        <TextFieldStyled
          focused={props.URL ? true : false}
          value={UrlData}
          label={"URL изображения"}
          onChange={(e) => {
            setUrlData(e.target.value)
          }}>
        </TextFieldStyled>

        <TextFieldStyled
          focused={props.title ? true : false}
          value={TitleData}
          label={"Название"}
          onChange={(e) => setTitleData(e.target.value)}>
        </TextFieldStyled>

        <TextFieldStyled
          focused={props.description ? true : false}
          value={DescrData}
          label={"Описание"}
          onChange={(e) => setDescrData(e.target.value)}>
        </TextFieldStyled>

        <ButtonStyled
          id={"dsfgdsfg"}
          theme={"primary"}
          onClick={() =>
            
             props.name === "Изменить" 
             ? changeHandler() 
             : dispatch(AddCardAC(UrlData, TitleData, DescrData))
          }>
          {props.name ? props.name : "Добавить"}
        </ButtonStyled>

      </AddCard>
    </CardBox>
  )
}

export const AddCard = styled(Card)`
    display: flex;
    flex-direction: column;
    background: #ffdbdb;
    gap: 30px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease-in-out;

    ${ButtonStyled} {
        width: 100%;
    }
`


export const TextFieldStyled = styled(TextField)`
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