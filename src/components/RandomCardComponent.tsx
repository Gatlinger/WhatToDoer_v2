import { useDispatch } from "react-redux"
import { checkBoxHandlerAC, DataType } from "../state/cardsReduser"
import { MyCard } from "./MyCard"
import styled, { keyframes } from "styled-components"
import { useEffect } from "react"
import { Card } from "../componentsFromCard/Card"

type RandomCardComponentPropsType = {
    card: DataType
    checkBoxHandler: (id: string) => void
    deleteButtonHandler: (id: string) => void
}

export const RandomCardComponent = (props: RandomCardComponentPropsType) => {

    useEffect(() => {

    }, [props.card])

    const dispatch = useDispatch()
    const checkBoxHandler = (id: string) => {
        dispatch(checkBoxHandlerAC(id))
    }
   


    return (
        <MyCardRandom>
            {props.card.id === "нет"
                ? <div></div>
                : <MyCard
                    pageVariant={'randomCard'}
                    pictureUrl={props.card.pictureUrl}
                    eventDescription={props.card.eventDescription}
                    eventTitle={props.card.eventTitle}
                    id={props.card.id}
                    checked={props.card.checked}
                    checkBoxHandler={checkBoxHandler}
                    color="yellowgreen"
                />}
        </MyCardRandom>

    )
}
const opacityChange = keyframes`
from {
    opacity: 0;
}
to {
    opacity: 1;
}
`

const MyCardRandom = styled(Card) `
    width: 300px;
    height: 300px;
    animation: ${opacityChange} 0.8s linear;
`

