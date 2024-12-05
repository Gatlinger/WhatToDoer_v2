import { useDispatch, useSelector } from "react-redux"
import { AppRootStateType } from "../state/store"
import { checkBoxHandlerAC, DataType, deleteCardsAC, InstanseStartAC } from "../state/cardsReduser"
import { useEffect, useState } from "react"
import { MyCard } from "../components/MyCard"
import { MainPageWrapper } from "./MainPage"
import { AppChoiseBox, AppMainBox, RollButtonStyled } from "../App"
import { RandomCardComponent } from "../components/RandomCardComponent"

type InstancePagePropsType = {
    instanceId: string
}
export const InstancePage = (props: InstancePagePropsType) => {
    const cards = useSelector<AppRootStateType, DataType[]>(state => state.cards)
    const [choise, setChoise] = useState<DataType>({} as DataType)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(InstanseStartAC())
        localStorage.setItem("choisenItem", "{}")
    }, [])

    const checkBoxHandler = (id: string) => {
        dispatch(checkBoxHandlerAC(id))
    }
    const deleteButtonHandler = (id: string) => {
        dispatch(deleteCardsAC(id))
    }
    const ChooseRandomCard = () => {
        const filteredArray = cards.filter(e => e.checked === true ? true : false)
        const randomIndex = Math.floor(Math.random() * filteredArray.length)

        if (randomIndex === 0 && filteredArray.length === 0) {
            alert("Выберете хотябы одно задание!")
        } else if (randomIndex === 0 && filteredArray.length === 1) {
            localStorage.setItem("choisenItem", JSON.stringify(filteredArray[0]))
            setChoise(filteredArray[0])
        } else if (filteredArray[randomIndex].id !== choise.id && filteredArray.length > 1) {
            localStorage.setItem("choisenItem", JSON.stringify(filteredArray[randomIndex]))
            setChoise(filteredArray[randomIndex])
        } else {
            ChooseRandomCard()
        }

    }

    return (
        <MainPageWrapper>
            <RollButtonStyled size="large" variant="contained" onClick={ChooseRandomCard}>ROLL RANDOM</RollButtonStyled>

            {choise.eventDescription && choise.eventTitle
                ? <AppChoiseBox>
                    <RandomCardComponent
                        card={choise || undefined}
                        checkBoxHandler={checkBoxHandler}
                        deleteButtonHandler={deleteButtonHandler} />
                </AppChoiseBox>
                : false}

            <AppMainBox>
                {cards.map((item, index) => {
                    return (
                        <MyCard
                            id={item.id}
                            pictureUrl={item.pictureUrl}
                            eventTitle={item.eventTitle}
                            eventDescription={item.eventDescription}
                            checked={item.checked}
                            checkBoxHandler={checkBoxHandler}
                        />
                    )
                })}
            </AppMainBox>
        </MainPageWrapper>
    )
}