import { useEffect, useState } from "react"
import { AppChoiseBox, AppMainBox, RollButtonStyled } from "../App"
import { FormCard } from "../components/FormCard"
import { MyCard } from "../components/MyCard"
import { RandomCardComponent } from "../components/RandomCardComponent"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux";
import { AddCardAC, checkBoxHandlerAC, DataType, deleteCardsAC } from "../state/cardsReduser"
import { AppRootStateType } from "../state/store"

export const MainPage = () => {


  const cards = useSelector<AppRootStateType, DataType[]>(state => state.cards)
  const dispatch = useDispatch()

  const [choise, setChoise] = useState<DataType>({} as DataType)

  useEffect(() => {
    localStorage.setItem("dataBase", JSON.stringify(cards))
    setChoise(
      {
      pictureUrl: "https://i.ytimg.com/vi/L9W4oeEwUSY/maxresdefault.jpg",
      eventTitle: 'Ничего',
      eventDescription: "Нароль уже чего нибудь!",
      id: 'нет'
    } as DataType)
  }, [cards]
  )


  const ChooseRandomCard = () => {
    const filteredArray = cards.filter(e => e.checked === true ? true : false)
    const randomIndex = Math.floor(Math.random() * filteredArray.length)

    if (randomIndex === 0 && filteredArray.length === 0) {
      alert("Выберете хотябы одно задание!")
    } else if (randomIndex === 0 && filteredArray.length === 1) {
      setChoise(filteredArray[0])
      localStorage.setItem("choisenItem", JSON.stringify(choise))
    } else if (filteredArray[randomIndex].id !== choise.id && filteredArray.length > 1) {
      setChoise(filteredArray[randomIndex])
      localStorage.setItem("choisenItem", JSON.stringify(choise))
    } else {
      ChooseRandomCard()
    }
    
  }

  const deleteButtonHandler = (id: string) => {
    dispatch(deleteCardsAC(id))
  }

  const checkBoxHandler = (id: string) => {
    dispatch(checkBoxHandlerAC(id))
  }

  const addNewCard = (URL: string, title: string, Description: string) => {
    dispatch(AddCardAC(URL, title, Description))
  }

  return (
    <MainPageWrapper>
      <RollButtonStyled size="large" variant="contained" onClick={ChooseRandomCard}>ROLL RANDOM</RollButtonStyled>

      <AppChoiseBox>
        <RandomCardComponent
          card={choise}
          checkBoxHandler={checkBoxHandler}
          deleteButtonHandler={deleteButtonHandler} />
      </AppChoiseBox>

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
        <FormCard callBack={addNewCard} id=""/>
      </AppMainBox>
    </MainPageWrapper>
  )
}

export const MainPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: static;
  align-items: start;
  justify-self: center;
  justify-content: center;
  gap: 10px;
`