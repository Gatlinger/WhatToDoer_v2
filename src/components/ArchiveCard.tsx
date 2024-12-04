import { Card } from "../componentsFromCard/Card"
import { Picture } from "../componentsFromCard/Picture.styled"
import { Text } from "../componentsFromCard/Text.styled"
import { TextH2 } from "../componentsFromCard/TextH2.styled"
import { ButtonStyled } from "../componentsFromCard/ButtonStyled.styled"
import styled from "styled-components"
import { useDispatch } from "react-redux"
import { returnCardAC } from "../state/archiveReduser"
import { AddCardAC } from "../state/cardsReduser"

export type ArchiveCardPropsType = {
    pictureUrl: string;
    eventTitle: string;
    eventDescription: string;
    id: string;
    checked: boolean;
    checkBoxHandler: (id: string) => void;
    color?: string;
}

export const ArchiveCard = (props: ArchiveCardPropsType) => {

    const dispatch = useDispatch()

    const returnCardHandler = (id: string) => {

        const cardToAdd = {
            id: props.id,
            pictureUrl: props.pictureUrl,
            eventTitle: props.eventTitle,
            eventDescription: props.eventDescription,
            checked: true,
        }
        dispatch(returnCardAC(props.id))
        dispatch(AddCardAC(props.pictureUrl, props.eventTitle, props.eventDescription))
    }

    return (
        <Card style={{ backgroundColor: props.color }}>
            <Picture src={props.pictureUrl} />
            <Text>{props.eventTitle}</Text>
            <TextH2 style={{ color: props.color === "yellowgreen" ? "black" : "black" }}>{props.eventDescription}</TextH2>
            <ReturnButtonBox>
                <ButtonStyled
                    id={props.id}
                    theme={'primary'}
                    onClick={() => {returnCardHandler(props.id)}}>ВЕРНУТЬ</ButtonStyled>
            </ReturnButtonBox>
        </Card>
    )
}


const ReturnButtonBox = styled.div`
    display: flex;
    justify-content: center;

    ${ButtonStyled} {
      position: relative;
      width: 80%;
    }
  `