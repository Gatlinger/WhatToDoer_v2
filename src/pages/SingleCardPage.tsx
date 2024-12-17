import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { AppRootStateType } from "../state/store"
import { BookType } from "../state/bookSelfReduser"
import { BookCover } from "../components/BookPicture"
import axios from "axios"
import { useEffect, useState } from "react"
import { BookShelfPageWrapper } from "./BookShelfPage"
import styled from "styled-components"

export const SingleCardPage = () => {
    const bookList = useSelector<AppRootStateType, BookType[]>(state => state.bookshelf)
    const params = useParams()
    const [loading, setLoading] = useState(true)
    // const book = bookList.find(item => item.id === params.id)
    const [bookData, setBookData] = useState<any>(undefined)

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes/${params.id}`)
            .then(res => {
                setBookData(res.data)
            })
    }, [])

    useEffect(() => {
        if (bookData) {
            setLoading(false)
        }
        console.log(bookData);

    }, [bookData]);

    const h2Styles = {
        fontSize: "2rem",
        margin: "1rem 0",
        color: "#ffffff",
        backgroundColor: "#b53f3f",
        borderRadius: "10px",
        padding: "10px 20px",
    }




    if (bookData === undefined) {
        return <BookShelfPageWrapper>
            <h2 style={h2Styles}>ЗАГРУЗКА</h2>
        </BookShelfPageWrapper>
    } else {
        return (
            <SingleCardPageWrapper>
                <BookCover src={bookData.volumeInfo.imageLinks !== undefined ? bookData.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/150'}
                    style={{ width: '300px', gridRow: '1span', gridColumn: '1span' }} />
                <div>
                    <h1>{bookData.volumeInfo.title}</h1>
                    <h2>Авторы: {bookData.volumeInfo.authors ? bookData.volumeInfo.authors.join(', ') : 'Неизвестный автор'}</h2>
                    <h2>Издательство: {bookData.volumeInfo.publisher || 'Неизвестное издательство'}</h2>
                </div>
                <DescriptionStyled style={{ gridRow: '1span', gridColumn: '1/4' }}>{bookData.volumeInfo.description || 'Описания нет'}</DescriptionStyled>

            </SingleCardPageWrapper>
        )
    }

}

const SingleCardPageWrapper = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto;
    padding: 20px;

    @media screen and (max-width: 800px){
    display: flex;
    position: relative;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: start;
  }
`

const DescriptionStyled = styled.p `
    max-width: 800px;
    margin: 0;
    padding: 10px;
    line-height: 1.6;
    font-size: 1.5rem;
    border: 1px solid black;
    border-radius: 10px;
    color: #333;
    text-align: center;
    justify-self: center;
    @media screen and (max-width: 800px){
    margin: 10px 0;
    }
`
