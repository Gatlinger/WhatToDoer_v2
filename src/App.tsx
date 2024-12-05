import styled, { keyframes } from "styled-components";
import { AppBarComponent, AppBarStyled } from "./components/AppBarComponent";
import { CardBox } from "./components/MyCard";
import { Button } from "@mui/material";
import { MainPage } from "./pages/MainPage";
import { ArchivePage, ArchivePageWrapper } from "./pages/ArchivePage";
import { Route, Routes } from "react-router-dom";
import { InstancePage } from "./pages/InstancePage";
import { useState } from "react";




function App() {
const [instanceName, setInstanceName] = useState('')

  return (
    <Box>
      <AppBarComponent setInstanceName={setInstanceName}/>
      <Routes>
        <Route path="WhatToDoer_v2/" element={<MainPage />} />
        <Route path="WhatToDoer_v2/main" element={<MainPage />} />
        <Route path="WhatToDoer_v2/archive" element={<ArchivePage />} />
        <Route path={`WhatToDoer_v2/${instanceName}`} element={<InstancePage instanceId={instanceName} />} />
      </Routes>
    </Box>
  );
}

export default App;

export const RollButtonStyled = styled(Button)`
    
`

export const Box = styled.div`
  width: 45%;
  display: flex;
  position: fixed;
  flex-direction: column;
  position: static;
  align-items: start;
  justify-self: center;
  justify-content: center;
  gap: 10px;
  background-color: transparent;

  ${ArchivePageWrapper} {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

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
    position: relative;
    height: 120px;
    width: 160px;
    margin: 60px 0px 60px 0px;
    justify-self: center;
    align-self: center;
  }

  @media screen and (max-width: 576px){
    position: relative;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: start;
  }

  @media screen and (max-width: 1024px) and (min-width: 577px){
    position: relative;
    flex-direction: column;
    width: 66%;
    align-items: center;
    justify-content: start;
  }
`

export const AppMainBox = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: start;
  justify-self: center;
  justify-content: center;
  
  
`

export const AppChoiseBox = styled(AppMainBox)`
  margin-bottom: 100px;

`