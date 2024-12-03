import { DataType } from "../App"
import { MyCard, MyCardPropsType } from "./MyCard"

type RandomCardComponentPropsType = {
    card: DataType
    checkBoxHandler: (id: string) => void
}

export const RandomCardComponent = (props: RandomCardComponentPropsType) => {

    return (
        <div>
            {props.card.id === "нет" ? <div></div> : <MyCard
            pictureUrl={props.card.pictureUrl}
            callBack={() => { }}
            eventDescription={props.card.eventDescription}
            eventTitle={props.card.eventTitle}
            id={props.card.id}
            checked={props.card.checked}
            checkBoxHandler={props.checkBoxHandler}
            color="yellowgreen"
        />}
        </div>

    )
}