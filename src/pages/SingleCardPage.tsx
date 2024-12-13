import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { AppRootStateType } from "../state/store"
import { BookType } from "../state/bookSelfReduser"
import { BookCover } from "../components/BookPicture"

export const SingleCardPage = () => {
    const bookList = useSelector<AppRootStateType, BookType[]>(state => state.bookshelf)
    const params = useParams()
    console.log(params)
    const book = bookList.find(item => item.id === params.id)
    console.log('book: ', book)
    return (
        <div>
            <BookCover src={book?.pictureUrl} />
            <h1>Single Card Page</h1>
            <p>This is a single card page. And its ID is </p>
            <span>{JSON.stringify(params)}</span>
        </div>
    )
}