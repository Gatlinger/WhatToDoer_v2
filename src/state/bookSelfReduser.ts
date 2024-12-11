export type BookShelfType = BookType[]

export type BookType = {
    id: string
    pictureUrl: string
    title: string
    author: string
    description?: string
}
export type VolumeInfo = {
    title: string;
    authors: string[];
    description?: string; // Может быть неопределенным
    imageLinks?: {
        thumbnail?: string; // Может быть неопределенным
    };
}
export type BookItem = {
    id: string;
    volumeInfo: VolumeInfo;
}

export type getBookActionType = {
    type: 'GET_ONE_BOOK'
    book: any
}
export type getPageBooksActionType = {
    type: 'GET_PAGE_BOOKS'
    books: BookType[]
}

type BookShelfActionType = getBookActionType | getPageBooksActionType

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

]



export const bookShelfReduser = (state: BookType[] = BookShelfInitialState, action: BookShelfActionType) => {
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
        case 'GET_PAGE_BOOKS': {
            return state
        }
        default: {
            return state;
        }
    }
}

export const getBookAC = (book: BookType) => {
    return { type: "GET_ONE_BOOK", book }
}

export const getBooksAC = (books: BookType[]) => {
    return { type: "GET_PAGE_BOOKS", books }
}