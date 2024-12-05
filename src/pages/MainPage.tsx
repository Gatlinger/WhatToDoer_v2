import { useEffect, useState } from "react"
import { AppChoiseBox, AppMainBox, RollButtonStyled } from "../App"
import { FormCard } from "../components/FormCard"
import { MyCard } from "../components/MyCard"
import { RandomCardComponent } from "../components/RandomCardComponent"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux";
import { AddCardAC, checkBoxHandlerAC, DataType, deleteCardsAC, MainStartAC } from "../state/cardsReduser"
import { AppRootStateType } from "../state/store"

export const MainPage = () => {


  const cards = useSelector<AppRootStateType, DataType[]>(state => state.cards)
  const [choise, setChoise] = useState<DataType>({} as DataType)
  const [shown, setShown] = useState(true)
  const dispatch = useDispatch()
  const emptyChoisenItem = {}

  useEffect(() => {
    setChoise(emptyChoisenItem as DataType)
    dispatch(MainStartAC())
    console.log('Effect');
    
  }, []
  )

  useEffect(() => {
    setShown(true)
  }, [choise])


  const ChooseRandomCard = () => {
    const filteredArray = cards.filter(e => e.checked === true ? true : false)
    const randomIndex = Math.floor(Math.random() * filteredArray.length)
    setShown(false)

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

      {choise.eventDescription && choise.eventTitle && shown
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
              pageVariant='main'
              id={item.id}
              pictureUrl={item.pictureUrl}
              eventTitle={item.eventTitle}
              eventDescription={item.eventDescription}
              checked={item.checked}
              checkBoxHandler={checkBoxHandler}
            />
          )
        })}
        <FormCard callBack={addNewCard} id="" />
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
