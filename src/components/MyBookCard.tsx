import styled from "styled-components"
import { BookCover } from "./BookPicture"

type MyBookCardPropsType = {
    BookCover: string
    BookTitle: string
    BookAuthor: string
    BookDescription: string
}


export const MyBookCard = (props: MyBookCardPropsType) => {
    return (
        <BookCard style={{ display: props.BookAuthor ? 'flex' : 'none' }}>
            <BookCover src={props.BookCover}/>
            <h2>{props.BookTitle}</h2>
            <p>Author: {props.BookAuthor}</p>
        </BookCard>
    )
}

export const BookCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    color: black;
    box-shadow: 3px 3px 10px   #2f3136;
    padding-bottom: 10px;
    
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