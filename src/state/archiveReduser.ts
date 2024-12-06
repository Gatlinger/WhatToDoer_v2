import { DataType } from "./cardsReduser";

type archiveCardAC = {
    type: 'ARCHIVE_CARD'
    card: DataType
}
type resetArchiveActionType = {
    type: 'RESET_ARCHIVE'
}
type returnCardActionType = {
    type: 'RETORN_CARD_TO_MAIN'
    id: string
}
type deleteCardActionType = {
    type: 'DELETE_CARD_FROM_ARCHIVE'
    id: string
}

type archiveReduserActionType = archiveCardAC | resetArchiveActionType | returnCardActionType | deleteCardActionType


const initialState: DataType[] = []

export const archiveReduser = (state: DataType[] = initialState, action: archiveReduserActionType) => {
    // Your Reducer Code Here
    switch (action.type) {
        case 'ARCHIVE_CARD':
            {
                const archivedCard = {
                    pictureUrl: action.card.pictureUrl,
                    eventTitle: action.card.eventTitle,
                    eventDescription: action.card.eventDescription,
                    id: action.card.id,
                    checked: false,
                    backgroundColor: action.card.backgroundColor
                }
                console.log([archivedCard, ...state]);
                localStorage.setItem('archiveStorage', JSON.stringify([archivedCard, ...state]))
                return [archivedCard, ...state]
            }
        case 'RESET_ARCHIVE': {
            localStorage.setItem('archiveStorage', JSON.stringify(initialState))
            return initialState
        }
        case 'RETORN_CARD_TO_MAIN': {
            const newArray = state.filter(e => e.id !== action.id)
            localStorage.setItem('archiveStorage', JSON.stringify(newArray))
            return newArray
        }
        case 'DELETE_CARD_FROM_ARCHIVE': {
            const newArray = state.filter(e => e.id!== action.id)
            localStorage.setItem('archiveStorage', JSON.stringify(newArray))
            return newArray
        }
        default:
            return JSON.parse(localStorage.getItem("archiveStorage") || "[]")
    }
};

export const archiveCardAC = (card: DataType) => {
    return { type: 'ARCHIVE_CARD', card }
};

export const resetArchiveAC = () => {
    return { type: 'RESET_ARCHIVE' }
}

export const returnCardAC = (id: string) => {
    return { type: 'RETORN_CARD_TO_MAIN', id }
}

export const deleteArchiveCardAC = (id: string) => {
    return { type: 'DELETE_CARD_FROM_ARCHIVE', id }
}