import styled from "styled-components";
import { ButtonStyled } from "../componentsFromCard/ButtonStyled.styled";
import { Card } from "../componentsFromCard/Card";
import { Picture } from "../componentsFromCard/Picture.styled";
import { Text } from "../componentsFromCard/Text.styled";
import { TextH2 } from "../componentsFromCard/TextH2.styled";
import { Checkbox } from "@mui/material";
import { useDispatch } from "react-redux";
import { AddCardAC, deleteCardsAC } from "../state/cardsReduser";
import { useState } from "react";
import { FormCard } from "./FormCard";


export type MyCardPropsType = {
  pictureUrl: string;
  eventTitle: string;
  eventDescription: string;
  id: string;
  checked: boolean;
  checkBoxHandler: (id: string) => void;
  color?: string;

}

export function MyCard(props: MyCardPropsType) {

  const [doubleClicked, setDoubleClicked] = useState(false)

  const onDoubleClickHandler = () => {
    setDoubleClicked((prev => !doubleClicked))
  }

  const dispatch = useDispatch()
  return (
    <CardBox >


      {doubleClicked === false
        ? <Card onDoubleClick={onDoubleClickHandler} style={{ backgroundColor: props.color }}>
          <Picture src={props.pictureUrl} />
          <Text>{props.eventTitle}</Text>
          <TextH2 style={{ color: props.color === "yellowgreen" ? "black" : "ABB3BA" }}>{props.eventDescription}</TextH2>
          <ButtonBox>
            <Checkbox checked={props.checked} size="large" onClick={() => { props.checkBoxHandler(props.id) }} />

            <ButtonStyled id={props.id} theme={'outlined'} onClick={() => dispatch(deleteCardsAC(props.id))}>УДАЛИТЬ</ButtonStyled>
          </ButtonBox>
        </Card>
        : <FormCard
          callBack={() => { }}
          URL={props.pictureUrl}
          title={props.eventTitle}
          description={props.eventDescription}
          name="Изменить"
          id={props.id}
          setDoubleClicked={setDoubleClicked}
        />}



      {/* <Card onDoubleClick={onDoubleClickHandler} style={{backgroundColor: props.color}}>
        <Picture src={props.pictureUrl} />
        <Text>{props.eventTitle}</Text>
        <TextH2 style={{color: props.color === "yellowgreen" ? "black" : "ABB3BA"}}>{props.eventDescription}</TextH2>
        <ButtonBox>
          <Checkbox checked={props.checked} size="large" onClick={() => {props.checkBoxHandler(props.id)}}/>

          <ButtonStyled id={props.id} theme={'outlined'} onClick={() => dispatch(deleteCardsAC(props.id))}>УДАЛИТЬ</ButtonStyled>
        </ButtonBox>
      </Card> */}


    </CardBox>
  );
}

export const CardBox = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    gap: 15px;

    ButtonStyled + ButtonStyled {
      
    }
  `

const ButtonBox = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    margin-top: 20px;
    margin-left: 20px;
    gap: 10px;

    ${ButtonStyled} {
      position: absolute;
      direction: inherit;
      right: 0;
      margin-right: 20px;
    }
  `
