export type BookShelfType = BookType[]

export type BookType = {
    id: string
    pictureUrl: string
    title: string
    author: string
    description: string

}

type getBookActionType = {
    type: 'GET_ONE_BOOK'
    book: any
}

type BookShelfActionType = getBookActionType

const BookShelfInitialState = [
    {
        id: '1',
        pictureUrl: 'https://via.placeholder.com/150',
        title: 'Book 1',
        author: 'Author 1',
        description: 'Description 1'
    },
    {
        id: '2',
        pictureUrl: 'https://via.placeholder.com/150',
        title: 'Book 2',
        author: 'Author 2',
        description: 'Description 2'
    },

] as BookShelfType;



export const bookShelfReduser = (state: BookShelfType = BookShelfInitialState, action: BookShelfActionType) => {
    switch (action.type) {
        case 'GET_ONE_BOOK': {
            const newBook = {
                id: action.book.id,
                pictureUrl: action.book.pictureUrl,
                title: action.book.title,
                author: action.book.author,
                description: action.book.description
            }
            return [newBook]
        }
        default: {
            return state;
        }
    }
}

export const getBookAC = (book: BookType) => {
    return { type: "GET_ONE_BOOK", book }
}