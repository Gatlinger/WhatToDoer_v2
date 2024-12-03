import styled from "styled-components";
import { AppBarComponent, AppBarStyled } from "./components/AppBarComponent";
import { CardBox, MyCard } from "./components/MyCard";
import CowJam from "./images/CowJam.gif";
import LionPic from "./images/i.webp";
import WorkPic from "./images/Работа.gif"
import { useEffect, useState } from "react";
import { FormCard } from "./components/FormCard";
import { Button } from "@mui/material";
import { RandomCardComponent } from "./components/RandomCardComponent";


export type DataType = {
  pictureUrl: string
  eventTitle: string
  eventDescription: string
  id: string
  checked: boolean
}

function App() {

  const [data, setData] = useState<DataType[]>(
    JSON.parse(localStorage.getItem("dataBase") || "[]")
  )

  const [choise, setChoise] = useState<DataType>({} as DataType)

  useEffect(() => {
    localStorage.setItem("dataBase", JSON.stringify(data))
    setChoise({
      pictureUrl: "https://i.ytimg.com/vi/L9W4oeEwUSY/maxresdefault.jpg",
      eventTitle: 'Ничего',
      eventDescription: "Нароль уже чего нибудь!",
      id: 'нет'
    } as DataType)
  }, [data]
  )

  // const randomIndex = Math.floor(Math.random() * data.length)

  const ChooseRandomCard = () => {

    const filteredArray = data.filter(e => e.checked === true ? true : false)
    const randomIndex = Math.floor(Math.random() * filteredArray.length)

    // if (filteredArray[randomIndex].id !== choise.id && filteredArray.length > 1) {
    //     setChoise(filteredArray[randomIndex])
    //     console.log('222');
    //   } else if (filteredArray.length === 1) {
    //     setChoise(filteredArray[0])
    //   } else if (filteredArray.length === 0) {
    //     alert("Выберете хотябы одно задание!")
    //   }

    if (randomIndex === 0 && filteredArray.length === 0) {
      alert("Выберете хотябы одно задание!")
    } else if (randomIndex === 0 && filteredArray.length === 1) {
      setChoise(filteredArray[0])
      console.log('111');
    } else if (filteredArray[randomIndex].id !== choise.id && filteredArray.length > 1) {
      setChoise(filteredArray[randomIndex])
      console.log('222');
    } else {
      ChooseRandomCard()
      console.log('333');
      
    }
  }
  // const editButtonHandler = (key: string, newTitle: string, newDescription: string) => {
  //   const newData = data.map(e => e.id === key ? { ...e, eventTitle: newTitle, eventDescription: newDescription } : e)
  //   setData(newData)
  // }

  const defaultButtonHandler = () => {
    setData(basicData)
    setChoise({
      pictureUrl: "https://i.ytimg.com/vi/L9W4oeEwUSY/maxresdefault.jpg",
      eventTitle: 'Ничего',
      eventDescription: "Нароль уже чего нибудь!",
      id: 'нет'
    } as DataType)
  }

  const deleteButtonHandler = (key: string) => {
    const newData = data.filter(e => e.id !== key)
    setData(newData)
  }

  const addNewCard = (URL: string, title: string, Description: string) => {
    const newCardData = [...data,
    {
      pictureUrl: URL,
      eventTitle: title,
      eventDescription: Description,
      id: crypto.randomUUID(),
      checked: true
    }
    ]
    setData(newCardData)
  }

  const checkBoxHandler = (id: string) => {
    const newData = data.map(e => e.id === id ? { ...e, checked: !e.checked } : e)
    setData(newData)
  }

  const basicData = [
    {
      pictureUrl: CowJam,
      eventTitle: "Танцевать",
      eventDescription: "Иди танцевать!",
      id: "asdsfg",
      checked: true

    },
    {
      pictureUrl: LionPic,
      eventTitle: "Лежать",
      eventDescription: "Иди лежать!",
      id: "sdfheth",
      checked: true
    },
    {
      pictureUrl: WorkPic,
      eventTitle: "Работать",
      eventDescription: "Иди работать!",
      id: "oefidvuj",
      checked: true
    }
  ]

  return (
    <Box>
      <AppBarComponent callBack={defaultButtonHandler} />
      <RollButtonStyled size="large" variant="contained" onClick={ChooseRandomCard}>ROLL RANDOM</RollButtonStyled>

      <AppChoiseBox>
        <RandomCardComponent card={choise} checkBoxHandler={checkBoxHandler} />
      </AppChoiseBox>

      <AppMainBox>
        {data.map((item, index) => {
          return (
            <MyCard
              id={item.id}
              pictureUrl={item.pictureUrl}
              eventTitle={item.eventTitle}
              eventDescription={item.eventDescription}
              checked={item.checked}
              callBack={deleteButtonHandler}
              checkBoxHandler={checkBoxHandler}
            />
          )
        })}
        <FormCard callBack={addNewCard} />
      </AppMainBox>
    </Box>
  );
}

export default App;



export const RollButtonStyled = styled(Button)`
    
`

const Box = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  position: static;
  align-items: start;
  justify-self: center;
  justify-content: center;
  gap: 10px;
  background-color: aliceblue;

  ${AppBarStyled} {
    position: relative;
    left: 0px;
    top: 0px;
  }

  ${CardBox} {
    margin: 0px 0px 0px 0px;
    height: auto;
  }

  ${RollButtonStyled} {
    height: 120px;
    width: 160px;
    margin: 60px 0px 60px 0px;
    justify-self: center;
    align-self: center;
  }

  @media screen and (max-width: 576px){
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: start;
  }

  @media screen and (max-width: 1024px) and (min-width: 577px){
    flex-direction: column;
    width: 66%;
    align-items: center;
    justify-content: start;
  }
`

const AppMainBox = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: start;
  justify-self: center;
  justify-content: center;
  
`
const AppChoiseBox = styled(AppMainBox)`
  margin-bottom: 100px;
`