import { Console } from "console";
import CowJam from "../images/CowJam.gif";
import LionPic from "../images/i.webp";
import WorkPic from "../images/Работа.gif"

export type DataType = {
    pictureUrl: string
    eventTitle: string
    eventDescription: string
    id: string
    checked: boolean
}

type deleteCardActionType = {
    type: "DELETE_CARD",
    id: string
}
type resetCardsActionType = {
    type: "SET_CARDS_TO_DEFAULT"
}
type checkBoxHandlerActionType = {
    type: 'TOGGLE_CHECKBOX'
    id: string
}
type addCardActionType = {
    type: 'ADD_NEW_CARD'
    URL: string
    title: string
    Description: string
}
type CangeCardActionType = {
    type: 'CHANGE_CARD'
    URL: string
    title: string
    Description: string
    id: string
}

export type CardsReduserActionType = resetCardsActionType
    | deleteCardActionType
    | checkBoxHandlerActionType
    | addCardActionType
    | CangeCardActionType

export const initialState: DataType[] =
    [
        {
            pictureUrl: CowJam,
            eventTitle: "Танцевать",
            eventDescription: "Иди танцевать!",
            id: "asdsfg",
            checked: true

        },
        {
            pictureUrl: LionPic,
            eventTitle: "Лежать",
            eventDescription: "Иди лежать!",
            id: "sdfheth",
            checked: true
        },
        {
            pictureUrl: WorkPic,
            eventTitle: "Работать",
            eventDescription: "Иди работать!",
            id: "oefidvuj",
            checked: true
        }
    ]

export const cardsReducer = (state: DataType[] = initialState, action: CardsReduserActionType) => {
    switch (action.type) {
        case 'SET_CARDS_TO_DEFAULT': {
            localStorage.setItem("dataBase", JSON.stringify(initialState))
            return [...initialState]
        }
        case 'DELETE_CARD': {
            const newArray = state.filter(card => card.id !== action.id)
            localStorage.setItem("dataBase", JSON.stringify(newArray))
            return newArray
        }
        case 'TOGGLE_CHECKBOX': {
            const newArray = state.map(card => card.id === action.id ? { ...card, checked: !card.checked } : card)
            localStorage.setItem("dataBase", JSON.stringify(newArray))
            return newArray
        }
        case 'ADD_NEW_CARD': {
            const newCardData = [...state,
            {
                pictureUrl: action.URL,
                eventTitle: action.title,
                eventDescription: action.Description,
                id: crypto.randomUUID(),
                checked: true
            }
            ]
            localStorage.setItem("dataBase", JSON.stringify(newCardData))
            return newCardData
        }
        case 'CHANGE_CARD': {
            console.log('CHANGE_CARD');

            let updatedCardData = state.find(e => e.id === action.id)
            if (updatedCardData) {
                updatedCardData = { ...updatedCardData, pictureUrl: action.URL, eventTitle: action.title, eventDescription: action.Description }
                const newArray = state.map(e => e.id === action.id ? updatedCardData : e)
                localStorage.setItem("dataBase", JSON.stringify(newArray))
                return newArray
            }
            return state
        }
        default:
            return JSON.parse(localStorage.getItem("dataBase") || "[]")
    }
}

export const resetCardsAC = (): resetCardsActionType => {
    return { type: "SET_CARDS_TO_DEFAULT" }
}

export const deleteCardsAC = (id: string): deleteCardActionType => {
    return { type: "DELETE_CARD", id }
}

export const checkBoxHandlerAC = (id: string): checkBoxHandlerActionType => {
    return { type: 'TOGGLE_CHECKBOX', id }
}

export const AddCardAC = (URL: string, title: string, Description: string): addCardActionType => {
    return { type: 'ADD_NEW_CARD', URL, title, Description }
}

export const ChangeCardAC = (URL: string, title: string, Description: string, id: string): CangeCardActionType => {
    return { type: 'CHANGE_CARD', URL, title, Description, id }
}