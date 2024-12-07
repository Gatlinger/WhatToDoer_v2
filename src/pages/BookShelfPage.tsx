import { useDispatch, useSelector } from "react-redux"
import { AppMainBox, RollButtonStyled } from "../App"
import { MyCard } from "../components/MyCard"
import { AppRootStateType } from "../state/store"
import { checkBoxHandlerAC } from "../state/cardsReduser"
import { BookShelfType, BookType, getBookAC } from "../state/bookSelfReduser"
import styled from "styled-components"
import { useEffect, useState } from "react"
import axios from "axios"

export const BookShelfPage = () => {
    const bookshelf = useSelector<AppRootStateType, BookShelfType>(state => state.bookshelf)
    const [book, setBook] = useState<any>({} as BookType)
    const dispatch = useDispatch()
    const checkBoxHandler = (id: string) => {
        dispatch(checkBoxHandlerAC(id))
    }
    useEffect(() => {
        dispatch(getBookAC(book))
    }, [book])

    const getNewBook = () => {
        const newBook = axios('https://www.googleapis.com/books/v1/volumes?q=fencing').then(res => setBook(res.data))
        setBook(newBook)
    }

    return (
        <BookShelfPageWrapper>

            <RollButtonStyled size="large" variant="contained" onClick={getNewBook}>ROLL RANDOM</RollButtonStyled>

            <AppMainBox>
                {bookshelf.map((item, index) => {
                    return (
                        <MyCard
                            pageVariant={'instance'}
                            id={item.id}
                            author={item.author}
                            pictureUrl={item.pictureUrl}
                            eventTitle={item.title}
                            eventDescription={item.description}
                            checkBoxHandler={checkBoxHandler}
                        />
                    )
                })}
            </AppMainBox>
        </BookShelfPageWrapper>
    )
}

const BookShelfPageWrapper = styled.div`
width: 100%;
align-items: center;
justify-content: center;

`