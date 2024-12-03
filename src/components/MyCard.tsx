import styled from "styled-components";
import { ButtonStyled } from "../componentsFromCard/ButtonStyled.styled";
import { Card } from "../componentsFromCard/Card";
import { Picture } from "../componentsFromCard/Picture.styled";
import { Text } from "../componentsFromCard/Text.styled";
import { TextH2 } from "../componentsFromCard/TextH2.styled";
import { Checkbox } from "@mui/material";


export type MyCardPropsType = {
  pictureUrl: string;
  eventTitle: string;
  eventDescription: string;
  id: string;
  callBack: (key:string) => void;
    
  }

export function MyCard(props: MyCardPropsType) {

  
  return (
    <CardBox>
      <Card onDoubleClick={() => props.callBack(props.id)}>
        <Picture src={props.pictureUrl} />
        <Text>{props.eventTitle}</Text>
        <TextH2>{props.eventDescription}</TextH2>
        <ButtonBox>
          <Checkbox size="large"/>

          <ButtonStyled id={props.id} theme={'outlined'} onClick={() => props.callBack(props.id)}>УДАЛИТЬ</ButtonStyled>
        </ButtonBox>
      </Card>
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
