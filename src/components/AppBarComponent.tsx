import styled from "styled-components"
import { AppBar, Button, Menu, MenuItem, Toolbar } from "@mui/material"
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataType, resetCardsAC } from "../state/cardsReduser";
import { AppRootStateType } from "../state/store";
import { resetArchiveAC } from "../state/archiveReduser";
import { NavLink } from "react-router-dom";

type AppBarComponentPropsType = {
  setInstanceName: (name: string) => void
}

export const AppBarComponent = (props: AppBarComponentPropsType) => {

  const cards = useSelector<AppRootStateType, DataType[]>(state => state.cards)
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const defaultButtonHandler = () => {
    dispatch(resetCardsAC())
  }
  const deleteDefaultButtonHandler = () => {
    dispatch(resetArchiveAC())
  }

  return (
    <AppBarStyled>
      <ToolbarStyled>
        <Button
          id="menu-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          variant="contained"
          style={{ background: "white", color: "black", fontFamily: 'Arial, Helvetica, sans-serif' }}
        >
          MENU
        </Button>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem><NavLink to={'/WhatToDoer_v2/main'}><MenuButton>
            Главная Страница
          </MenuButton></NavLink></MenuItem>
          <MenuItem><NavLink to={'WhatToDoer_v2/HeadsOrTales'}><MenuButton onClick={() => props.setInstanceName('HeadsOrTales')}>
            Орел и Решка
          </MenuButton></NavLink></MenuItem>
          <MenuItem><NavLink to={'WhatToDoer_v2/archive'}><MenuButton>
            Страница Архива
          </MenuButton></NavLink></MenuItem>
          
          <MenuItem style={{ marginTop: 50 }} onClick={defaultButtonHandler}><MenuButton>
            Сбросить Занятия
          </MenuButton></MenuItem>
          <MenuItem onClick={deleteDefaultButtonHandler}><MenuButton>
            Сбросить Архив
          </MenuButton></MenuItem>
        </Menu>

        <H1Styled>WhatToDoer_v2</H1Styled>
      </ToolbarStyled>
    </AppBarStyled>
  )
}

const MenuButton = styled.div`
  width:170px;
  text-align: center;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-size: auto;
  font-weight: 300;
  text-decoration: none;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.5s ease;
  box-shadow: 3px 1px 10px   #2f3136;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        background-color:  #82c5ff;
    }
`

export const AppBarStyled = styled(AppBar)`
    display: flex;
    position: static;
    flex-direction: row;
    position: relative;
    height: 4rem;
    justify-self: start;
    left: 0px;
    top: 0px;
`

const ToolbarStyled = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;

  &:NavLink {
    text-decoration: none;
  }
`

export const H1Styled = styled.h1`
  font-size: 40px;
  position: relative;
  text-align: end;
  justify-self: end;
  margin-right: 5px;
  text-shadow: 3px 1px 10px   #2f3136;
  font-weight: 300;
  font-family: Arial, Helvetica, sans-serif;
`