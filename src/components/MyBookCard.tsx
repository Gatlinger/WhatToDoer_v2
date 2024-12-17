import styled from "styled-components"
import { BookCover } from "./BookPicture"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

type MyBookCardPropsType = {
    BookId: string
    BookCover: string
    BookTitle: string
    BookAuthor: string
    BookDescription?: string
}



export const MyBookCard = (props: MyBookCardPropsType) => {

    const navigate = useNavigate()

    return (
        <Link style={{textDecoration:'none'}} to={`/BookShelf/SingleCardPage/${props.BookId}`}>
            <BookCard
                style={{ display: props.BookAuthor ? 'flex' : 'none' }}
                // onDoubleClick={() => { handleDoubleClick('../WhatToDoer_v2/main') }}
                >
                <BookCover src={props.BookCover} />
                <h2>{props.BookTitle}</h2>
                <p>Автор: {props.BookAuthor}</p>
            </BookCard>
        </Link>
    )
}

export const BookCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    color: black;
    box-shadow: 3px 3px 10px   #2f3136;
    padding-bottom: 10px;
    border-radius: 10px;
    
    h2 {
        font-size: 24px;
        margin: 10px 10px 10px 10px;
    }
    
    p {
        margin-bottom: 10px;
        margin: 10px 10px 10px 10px;
    }
    
    &:hover  {
        transform: scale(1.05);
    }
`