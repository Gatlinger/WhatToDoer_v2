import styled from "styled-components";
import { ButtonStyled } from "../componentsFromCard/ButtonStyled.styled";
import { Card } from "../componentsFromCard/Card";
import { Picture } from "../componentsFromCard/Picture.styled";
import { Text } from "../componentsFromCard/Text.styled";
import { TextH2 } from "../componentsFromCard/TextH2.styled";


type MyCardPropsType = {
    pictureUrl: string; 
    gamesName: string;
}

export function MyCard(props: MyCardPropsType){
    return (
      <CardBox>
        <Card>
          <Picture src={props.pictureUrl} />
          <Text>Стрим по {props.gamesName}</Text>
          <TextH2>Приходи посмотреть прохождение игры {props.gamesName} на высоком уровне сложности!</TextH2>
          <ButtonBox>
            <ButtonStyled theme={'primary'}>На стрим</ButtonStyled>
            <ButtonStyled theme={'outlined'}>Сохранить</ButtonStyled>
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
    gap: 10px;
  
    ButtonStyled + ButtonStyled {
      
    }
  `
  
  const ButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    margin-left: 20px;
    gap: 10px;
  `