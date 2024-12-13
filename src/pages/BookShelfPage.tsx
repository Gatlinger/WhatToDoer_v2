import { useDispatch, useSelector } from "react-redux"
import { AppMainBox } from "../App"
import { AppRootStateType } from "../state/store"
import { BookItem, BookType, getBooksAC } from "../state/bookSelfReduser"
import styled from "styled-components"
import { useEffect, useState } from "react"
import axios from "axios"
import { MyBookCard } from "../components/MyBookCard"
import { Button } from "@mui/material"

export const BookShelfPage = () => {
    const bookshelf = useSelector<AppRootStateType, BookType[]>(state => state.bookshelf)
    const [books, setBooks] = useState<any>({} as BookItem[])
    const [currentPage, setCurrentPage] = useState<number>(0)
    const [SearchInput, setSearchInput] = useState("Архипелаг_Грез")
    const [flag, setFlag] = useState<boolean>(false)
    const resultsPerPage = 10

    const dispatch = useDispatch()

    // const checkBoxHandler = (id: string) => {
    //     dispatch(checkBoxHandlerAC(id))
    // }

    useEffect(() => {
        dispatch(getBooksAC(books))
    }, [books])

    useEffect(() => {
        getNewPage(currentPage)
    }, [currentPage])

    useEffect(() => {
        setCurrentPage(0)
        getNewPage(currentPage)
    }, [SearchInput])

    let booksArray: BookType[] = []
    const getNewPage = async (page: number) => {
        const startIndex = page * resultsPerPage;

        try {
            setFlag(true)
            console.log('flag 1: ', flag);
            const response = await axios(`https://www.googleapis.com/books/v1/volumes?q=${SearchInput}&startIndex=${startIndex}&maxResults=${resultsPerPage}`)
                .then(res => {


                    if (Array.isArray(res.data.items)) {
                        booksArray = res.data.items.map((book: any) => {

                            return {
                                id: book.id,
                                pictureUrl: book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/150',
                                title: book.volumeInfo.title,
                                author: book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Неизвестный автор', // Объединяем авторов в строку
                                description: book.volumeInfo.description,
                            };
                        });

                    }
                }
                )
                .finally(() => {
                    setFlag(false)
                    console.log('flag 2: ', flag);
                })
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
    const onInputChangeHandler = (event: any) => {
        if (event.key === 'Enter') {
            setSearchInput(event.target.value.replace(/ /g, '_'))
            console.log(SearchInput);

        }
    }

    

    const h2Styles = {
        fontSize: "2rem",
        margin: "1rem 0",
        color: "#ffffff",
        backgroundColor: "#b53f3f",
        borderRadius: "10px",
        padding: "10px 20px",
    }

    if (flag === true) {
        return <BookShelfPageWrapper>
            <h2 style={h2Styles}>ЗАГРУЗКА</h2>
        </BookShelfPageWrapper>
    } else {
        return (<BookShelfPageWrapper>
            <input onKeyUp={onInputChangeHandler} />

            <RollButtonWrapper>
                <RollButtonStyled size="large" variant="contained" onClick={() => getPrevPage()}>Назад</RollButtonStyled>
                <h2>{currentPage}</h2>
                <RollButtonStyled size="large" variant="contained" onClick={() => getNextPage()}>Вперед</RollButtonStyled>
            </RollButtonWrapper>

            <AppMainBox>
                {bookshelf.map((item) =>
                    <MyBookCard
                        BookId={item.id}
                        BookCover={item.pictureUrl}
                        BookAuthor={item.author}
                        BookTitle={item.title}
                        BookDescription={item.description}/>
                )
                }
            </AppMainBox>

            <RollButtonWrapper>
                <RollButtonStyled size="large" variant="contained" onClick={() => getPrevPage()}>Назад</RollButtonStyled>
                <h2>{currentPage}</h2>
                <RollButtonStyled size="large" variant="contained" onClick={() => getNextPage()}>Вперед</RollButtonStyled>
            </RollButtonWrapper>

        </BookShelfPageWrapper>)
    }

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
    margin: 30px;
}
`