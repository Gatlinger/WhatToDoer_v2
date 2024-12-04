import { useDispatch, useSelector } from "react-redux"
import { checkBoxHandlerAC, DataType, deleteCardsAC } from "../state/cardsReduser"
import { MyCard } from "./MyCard"
import { AppRootStateType } from "../state/store"

type RandomCardComponentPropsType = {
    card: DataType
    checkBoxHandler: (id: string) => void
    deleteButtonHandler: (id: string) => void
}

export const RandomCardComponent = (props: RandomCardComponentPropsType) => {


    const cards = useSelector<AppRootStateType, DataType[]>(state => state.cards)
    const dispatch = useDispatch()
    const checkBoxHandler = (id: string) => {
        dispatch(checkBoxHandlerAC(id))
      }

    return (
        <div>
            {props.card.id === "нет" ? <div></div> : <MyCard
            pictureUrl={props.card.pictureUrl}
            eventDescription={props.card.eventDescription}
            eventTitle={props.card.eventTitle}
            id={props.card.id}
            checked={props.card.checked}
            checkBoxHandler={checkBoxHandler}
            color="yellowgreen"
        />}
        </div>

    )
}