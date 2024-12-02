import styled from "styled-components";
import { AppBarStyled } from "./components/styledComponents/AppBar.styled";
import { AppBarComponent } from "./components/AppBarComponent";
import { CardBox, MyCard } from "./components/MyCard";
import { RollButtonStyled } from "./components/styledComponents/RollButtonStyled.styled";

function App() {
  return (
    <Box>

      <AppBarComponent />
      <RollButtonStyled size="large" variant="contained">ROLL RANDOM</RollButtonStyled>
      <AppMainBox>
        <MyCard pictureUrl="/images/Banner.jpg" gamesName="Banner Saga"/>
        <MyCard pictureUrl="/images/Desperados.jpg" gamesName="Desperados"/>
        <MyCard pictureUrl="/images/KKD.png" gamesName="Kingdom Come"/>
        <MyCard pictureUrl="/images/NTW.jpg" gamesName="Total War"/>
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
    margin: 20px 0px 20px 0px;
    justify-self: center;
    align-self: center;
    height: auto;
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