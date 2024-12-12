import { useDispatch, useSelector } from "react-redux"
import { AppMainBox} from "../App"
import { AppRootStateType } from "../state/store"
import { checkBoxHandlerAC } from "../state/cardsReduser"
import { BookItem, BookShelfType, BookType, getBooksAC } from "../state/bookSelfReduser"
import styled from "styled-components"
import { useEffect, useState } from "react"
import axios from "axios"
import { MyBookCard } from "../components/MyBookCard"
import { Button } from "@mui/material"

export const BookShelfPage = () => {
    const bookshelf = useSelector<AppRootStateType, BookType[]>(state => state.bookshelf)
    const [books, setBooks] = useState<any>({} as BookItem[])
    const [currentPage, setCurrentPage] = useState<number>(0)
    const resultsPerPage = 10

    const dispatch = useDispatch()

    // const checkBoxHandler = (id: string) => {
    //     dispatch(checkBoxHandlerAC(id))
    // }

    useEffect(() => {
        dispatch(getBooksAC(books))
    }, [books])

    useEffect(()=>{
        getNewPage(currentPage)
    }, [currentPage])

    let booksArray: BookType[] = []
    const getNewPage = async (page: number) => {
        const startIndex = page * resultsPerPage;

        try {
            const response = await axios(`https://www.googleapis.com/books/v1/volumes?q=fencing&startIndex=${startIndex}&maxResults=${resultsPerPage}`)
                .then(res => {
                    if (Array.isArray(res.data.items)) {
                        booksArray = res.data.items.map((book: any) => {
                            return {
                                id: book.id,
                                pictureUrl: book.volumeInfo.imageLinks.thumbnail,
                                title: book.volumeInfo.title,
                                author: book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Неизвестный автор', // Объединяем авторов в строку
                                description: book.volumeInfo.description,
                            };
                        });

                    }
                }
                )
            setBooks(booksArray); // Устанавливаем состояние  
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    const getNextPage = () => {
        setCurrentPage(prev => prev + 1)
        getNewPage(currentPage)
        console.log('currentPage: ', currentPage);
    }
    const getPrevPage = () => {

        currentPage !== 0 
        ? setCurrentPage(prev => prev - 1)
        : setCurrentPage(0)
        console.log('currentPage: ', currentPage);
        
        getNewPage(currentPage)
    }



    return (
        <BookShelfPageWrapper>
            <RollButtonWrapper>
                <RollButtonStyled size="large" variant="contained" onClick={() => getPrevPage()}>Назад</RollButtonStyled>
                <h2>{currentPage}</h2>
                <RollButtonStyled size="large" variant="contained" onClick={() => getNextPage()}>Вперед</RollButtonStyled>
            </RollButtonWrapper>

            <AppMainBox>
                {bookshelf.map((item) =>
                    <MyBookCard
                        BookCover={item.pictureUrl}
                        BookAuthor={item.author}
                        BookTitle={item.title}
                        BookDescription={item.description} />
                )
                }
            </AppMainBox>
        </BookShelfPageWrapper>
    )
}

export const BookShelfPageWrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
justify-content: center;

`

export const RollButtonStyled = styled(Button)`
    
`

export const RollButtonWrapper = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: center;

${RollButtonStyled}{
    margin: 10px;
}
`