import styled from "styled-components"
import { AppBar, Button, Menu, MenuItem, Toolbar } from "@mui/material"
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardsReduserActionType, DataType, resetCardsAC } from "../state/cardsReduser";
import { AppRootStateType } from "../state/store";
import { resetArchiveAC } from "../state/archiveReduser";
import { NavLink } from "react-router-dom";

type AppBarComponentPropsType = {
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
          style={{ background: "white", color: "black" }}
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
          <MenuItem><NavLink to={'/WhatToDoer_v2/main'}>Главная Страница</NavLink></MenuItem>
          <MenuItem><NavLink to={'WhatToDoer_v2/archive'}>Страница Архива</NavLink></MenuItem>
          <MenuItem style={{marginTop: 50}} onClick={defaultButtonHandler}>Сбросить Занятия</MenuItem>
          <MenuItem onClick={deleteDefaultButtonHandler}>Сбросить Архив</MenuItem>
        </Menu>

        <H1Styled>WhatToDoer_v2</H1Styled>
      </ToolbarStyled>
    </AppBarStyled>
  )
}

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
`

export const H1Styled = styled.h1`
  font-size: 40px;
  position: relative;
  text-align: end;
  justify-self: end;
  margin-right: 5px;

`