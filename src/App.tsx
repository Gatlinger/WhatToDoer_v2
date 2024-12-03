import styled from "styled-components";
import { AppBarStyled } from "./components/styledComponents/AppBar.styled";
import { AppBarComponent } from "./components/AppBarComponent";
import { CardBox, MyCard } from "./components/MyCard";
import { RollButtonStyled } from "./components/styledComponents/RollButtonStyled.styled";
import CowJam from "./images/CowJam.gif";
import LionPic from "./images/i.webp";
import WorkPic from "./images/Работа.gif"
import { useState } from "react";
import { FormCard } from "./components/FormCard";


type DataType = {
  pictureUrl: string
  eventTitle: string
  eventDescription: string
  id: string
}

function App() {
  const [data, setData] = useState<DataType[]>(
    [
      {
        pictureUrl: CowJam,
        eventTitle: "Танцевать",
        eventDescription: "Иди танцевать как корова!",
        id: "asdsfg"
      },
      {
        pictureUrl: LionPic,
        eventTitle: "Лежать",
        eventDescription: "Иди лежать как лев!",
        id: "sdfheth"
      },
      {
        pictureUrl: WorkPic,
        eventTitle: "Работать",
        eventDescription: "Иди работать как Черт!",
        id: "oefidvuj"
      }
    ]
  )

  const deleteButtonHandler = (key: string) => {
    setData(data => data.filter(e => e.id !== key))

  }

  const addNewCard = (URL:string, title: string, Description: string) => {
    const newCard = {
      pictureUrl: URL,
      eventTitle: title,
      eventDescription: Description,
      id: crypto.randomUUID()
    }
    setData([...data, newCard])
  }



  return (
    <Box>
      <AppBarComponent />
      <RollButtonStyled size="large" variant="contained">ROLL RANDOM</RollButtonStyled>
      <AppMainBox>
        {data.map((item, index) => {
          return (
            <MyCard
             id={item.id} 
             pictureUrl={item.pictureUrl} 
             eventTitle={item.eventTitle} 
             eventDescription={ item.eventDescription}
             callBack={deleteButtonHandler} />
          )
        })}
        <FormCard callBack={addNewCard}/>
      </AppMainBox>
    </Box>
  );
}

export default App;


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
    height: 160px;
    width: auto;
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