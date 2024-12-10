import { useDispatch, useSelector } from "react-redux"
import { AppMainBox, RollButtonStyled } from "../App"
import { MyCard } from "../components/MyCard"
import { AppRootStateType } from "../state/store"
import { checkBoxHandlerAC } from "../state/cardsReduser"
import { BookShelfType, BookType, getBookAC } from "../state/bookSelfReduser"
import styled from "styled-components"
import { useEffect, useState } from "react"
import axios from "axios"
import { MyBookCard } from "../components/MyBookCard"

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
        const newBook = axios('https://www.googleapis.com/books/v1/volumes?q=fencing')
            .then(res => {
                const book = {
                    id: res.data.items[0].id,
                    title: res.data.items[0].volumeInfo.title,
                    author: res.data.items[0].volumeInfo.authors[0],
                    description: res.data.items[0].volumeInfo.description,
                    pictureUrl: res.data.items[0].volumeInfo.imageLinks?.thumbnail,
                }
                setBook(book)
            }
            )
        setBook(book)
    }

    return (
        <BookShelfPageWrapper>
            <RollButtonWrapper>
                <RollButtonStyled size="large" variant="contained" onClick={getNewBook}>ROLL RANDOM</RollButtonStyled>
            </RollButtonWrapper>

            <AppMainBox>
                {bookshelf.map((item, index) => {
                    return (
                        <MyBookCard
                            BookCover={item.pictureUrl}
                            BookAuthor={item.author}
                            BookTitle={item.title}
                            BookDescription={item.description} />
                    )
                })}
            </AppMainBox>
        </BookShelfPageWrapper>
    )
}

const BookShelfPageWrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
justify-content: center;

`

const RollButtonWrapper = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: center;
`