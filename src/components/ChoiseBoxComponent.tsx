import { AppChoiseBox } from "../App"
import { DataType } from "../state/cardsReduser"
import { RandomCardComponent } from "./RandomCardComponent"

type ChoiseBoxComponentType = {
    choise: DataType,
    checkBoxHandler: (id: string) => void,
    deleteButtonHandler: (id: string) => void,
}

export const ChoiseBoxComponent = (props: ChoiseBoxComponentType) => {
    return (
        <AppChoiseBox>
            <RandomCardComponent
                card={props.choise}
                checkBoxHandler={props.checkBoxHandler}
                deleteButtonHandler={props.deleteButtonHandler} />
        </AppChoiseBox>
    )
}



