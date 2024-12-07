export type BookShelfType = BookType[]

export type BookType = {
    id: string
    pictureUrl: string
    title: string
    author: string
    description: string

}

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
    
 ] as BookShelfType;  // Initialize the state with the initial books list



export const bookShelfReduser = (state: BookShelfType = BookShelfInitialState, action: any) => {
    switch(action.type) {
        default: {
            return state;
        }
    }
}