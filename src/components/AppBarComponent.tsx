import styled from "styled-components"
import { AppBar, Button, Menu, MenuItem, Toolbar } from "@mui/material"
import React from "react";
import { useDispatch } from "react-redux";
import { resetCardsAC } from "../state/cardsReduser";
import { resetArchiveAC } from "../state/archiveReduser";
import { NavLink } from "react-router-dom";

type AppBarComponentPropsType = {
  setInstanceName: (name: string) => void
}

export const AppBarComponent = (props: AppBarComponentPropsType) => {

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
          style={{ background: "white", color: "black", fontFamily: 'Jaro' }}
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
          <MenuItem><StyledNavLink to={'/main'}><MenuButton>
            Главная Страница
          </MenuButton></StyledNavLink></MenuItem>
          <MenuItem><StyledNavLink to={'/HeadsOrTales'}><MenuButton onClick={() => props.setInstanceName('HeadsOrTales')}>
            Орел и Решка
          </MenuButton></StyledNavLink></MenuItem>
          <MenuItem><StyledNavLink to={'/BookShelf/0'}><MenuButton>
            Книжная полка
          </MenuButton></StyledNavLink></MenuItem>
          <MenuItem><StyledNavLink to={'/archive'}><MenuButton>
            Страница Архива
          </MenuButton></StyledNavLink></MenuItem>

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
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.5s ease;
  box-shadow: 3px 1px 10px   #2f3136;
  padding: 10px 15px;

    &:focus, &:hover, &:active {
        text-decoration: none;
        background-color:  #82c5ff;
    }
`

export const AppBarStyled = styled(AppBar)`
    display: flex;
    position: sticky;
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
`

export const H1Styled = styled.h1`
  position: relative;
  text-align: end;
  justify-self: end;
  margin-right: 5px;
  text-shadow: 3px 1px 10px   #2f3136;
  font-family: 'Jaro';
`

const StyledNavLink = styled(NavLink)`
    text-decoration: none; // Убираем подчеркивание
    border-radius: 5px; // Скругление углов
    transition: background-color 0.3s; // Плавный переход
    &:focus, &:hover, &:active {
        text-decoration: none; // Убираем подчеркивание
        background-color:  #82c5ff; // ��вет фона при наведении
    }
/* 
    &.active {
        background-color: lightblue; // Цвет фона для активной ссылки
        color: white; // Цвет текста для активной ссылки
    } */
`;

