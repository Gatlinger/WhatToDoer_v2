import { useDispatch, useSelector } from "react-redux"
import { AppMainBox, RollButtonStyled } from "../App"
import { AppRootStateType } from "../state/store"
import { checkBoxHandlerAC } from "../state/cardsReduser"
import { BookItem, BookShelfType, BookType, getBooksAC } from "../state/bookSelfReduser"
import styled from "styled-components"
import { useEffect, useState } from "react"
import axios from "axios"
import { MyBookCard } from "../components/MyBookCard"

export const BookShelfPage = () => {
    const bookshelf = useSelector<AppRootStateType, BookType[]>(state => state.bookshelf)
    const [books, setBooks] = useState<any>({} as BookItem[])
    const [currentPage, setCurrentPage] = useState<number>(0)
    const resultsPerPage = 10

    const dispatch = useDispatch()
    const checkBoxHandler = (id: string) => {
        dispatch(checkBoxHandlerAC(id))
    }
    useEffect(() => {
        dispatch(getBooksAC(books))
    }, [books])

    // const getNewBook = () => {
    //     const newBook = axios('https://www.googleapis.com/books/v1/volumes?q=fencing')
    //         .then(res => {
    //             const book = {
    //                 id: res.data.items[0].id,
    //                 title: res.data.items[0].volumeInfo.title,
    //                 author: res.data.items[0].volumeInfo.authors[0],
    //                 description: res.data.items[0].volumeInfo.description,
    //                 pictureUrl: res.data.items[0].volumeInfo.imageLinks?.thumbnail,
    //             }
    //             setBook(book)
    //         }
    //         )
    //     setBook(book)
    // }



    //----------------------------------------------------------------


    // const getNewPage = async (page: number) => {
    //     const startIndex = page * resultsPerPage
    //     const response = await axios(`https://www.googleapis.com/books/v1/volumes?q=fencing&startIndex=${startIndex}&maxResults=${resultsPerPage}`)
    //         .then(res => {


    //             const book = res.data.items[0]
    //             const booksArray = res.data.items.map((book: any) => {
    //                 console.log("Book: " + book);
    //                 return {
    //                     id: book.id,
    //                     pictureUrl: book.volumeInfo.imageLinks?.thumbnail || '',
    //                     title: book.volumeInfo.title,
    //                     author: book.volumeInfo.authors,
    //                     description: book.volumeInfo.description
    //                 }
    //             })


    //             console.log('book: ' + book);
    //             console.log('booksArray: ' + booksArray);

    //             setBooks(booksArray)
    //         })
    // }
    // console.log('Полка: ' + bookshelf);


    //----------------------------------------------------------------

    let booksArray: any = []
    const getNewPage = async (page: number) => {
        const startIndex = page * resultsPerPage;

        try {
            const response = await axios(`https://www.googleapis.com/books/v1/volumes?q=fencing&startIndex=${startIndex}&maxResults=${resultsPerPage}`)
                .then(res => {
                    if (Array.isArray(res.data.items)) {
                        booksArray = res.data.items.map((book: any) => {
                            console.log("Book: ", book); // Логируем каждую книгу
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



    return (
        <BookShelfPageWrapper>
            <RollButtonWrapper>
                <RollButtonStyled size="large" variant="contained" onClick={() => getNewPage(0)}>get page</RollButtonStyled>
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