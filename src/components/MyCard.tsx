import styled from "styled-components";
import { ButtonStyled } from "../componentsFromCard/ButtonStyled.styled";
import { Card } from "../componentsFromCard/Card";
import { Picture } from "../componentsFromCard/Picture.styled";
import { Text } from "../componentsFromCard/Text.styled";
import { TextH2 } from "../componentsFromCard/TextH2.styled";
import { Checkbox } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteCardsAC } from "../state/cardsReduser";
import { useState } from "react";
import { FormCard } from "./FormCard";
import { archiveCardAC } from "../state/archiveReduser";
import { Create } from "@material-ui/icons";


export type MyCardPropsType = {
  pictureUrl: string;
  eventTitle: string;
  eventDescription: string;
  id: string;
  author?: string;
  checked?: boolean;
  checkBoxHandler: (id: string) => void;
  color?: string;
  pageVariant: 'instance' | 'main' | 'randomCard'
  backgroundColor?: string
  bookDescription?: string
}

export function MyCard(props: MyCardPropsType) {

  const [doubleClicked, setDoubleClicked] = useState(false)
  const dispatch = useDispatch()

  const onDoubleClickHandler = () => {
    setDoubleClicked((prev => prev = !doubleClicked))
  }

  const deleteCardHandler = () => {
    const deletedCard = {
      pictureUrl: props.pictureUrl,
      eventTitle: props.eventTitle,
      eventDescription: props.eventDescription,
      id: props.id,
      checked: true,
      backgroundColor: props.backgroundColor
    }
    dispatch(archiveCardAC(deletedCard))
    dispatch(deleteCardsAC(props.id))

  }


  return (
    < >
      {doubleClicked === false
        ? <Card onDoubleClick={onDoubleClickHandler} style={{ backgroundColor: props.color || 'aliceblue' }}>
          <UpdateButton onClick={() => { setDoubleClicked(true) }}>
            <Create style={{ marginLeft: 2.5, marginTop: 1.5 }} />
          </UpdateButton>
          <Picture content='' src={props.pictureUrl} style={{ backgroundColor: props.backgroundColor }} />
          <Text>
            {props.eventTitle}
          </Text>
          <TextH2 style={{ color: props.color === "yellowgreen" ? "black" : "ABB3BA" }}>
            {props.author ? props.author : props.eventDescription}
          </TextH2>
          <TextH2 style={{ color: props.color === "yellowgreen" ? "black" : "ABB3BA", display: props.author ? "flex" : "none" }}>
            {props.author ? props.bookDescription : false}
          </TextH2>

          {props.pageVariant === 'main'
            ? <ButtonBox>
              <Checkbox checked={props.checked} size="large" onClick={() => { props.checkBoxHandler(props.id) }} />

              <ButtonStyled id={props.id} theme={'primary'} onClick={deleteCardHandler}>УДАЛИТЬ</ButtonStyled>
            </ButtonBox>
            : false
          }


        </Card>
        : <FormCard
          buttonType={"change_card"}
          closeCallBack={onDoubleClickHandler}
          callBack={() => { }}
          URL={props.pictureUrl}
          title={props.eventTitle}
          description={props.eventDescription}
          name="Изменить"
          id={props.id}
          setDoubleClicked={setDoubleClicked}
        />}
    </>
  );
}

export const UpdateButton = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  position: relative;
  border: 2px solid black;
  border-radius: 100%;
  color: black;
  justify-self: flex-end;
  left: 10px;
  bottom: 10px;
  background-color: #fdfde9;
  gap: 10px;
`

export const CardBox = styled.div`
    display: flex;
    position: static;
    height: 100vh;
    justify-content: center;
    align-items: center;
    gap: 15px;

    ButtonStyled + ButtonStyled {
      
    }
  `

export const ButtonBox = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    margin-left: 30px;

    ${ButtonStyled} {
      position: absolute;
      direction: inherit;
      right: 0;
      margin-right: 20px;
      bottom: 1px;
    }
  `
