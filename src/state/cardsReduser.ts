import { Console } from "console";
import CowJam from "../images/CowJam.gif";
import LionPic from "../images/i.webp";
import WorkPic from "../images/Работа.gif"
import { randomUUID } from "crypto";

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
type InstanseStartActionType = {
    type: 'INSTANCE_START'
}
type MainStartActionType = {
    type: 'MAIN_PAGE_START'
}

export type CardsReduserActionType = resetCardsActionType
    | deleteCardActionType
    | checkBoxHandlerActionType
    | addCardActionType
    | CangeCardActionType
    | InstanseStartActionType
    | MainStartActionType

export const initialState: DataType[] =
    [
        {
            pictureUrl: CowJam,
            eventTitle: "Танцевать",
            eventDescription: "Иди танцевать!",
            id: crypto.randomUUID(),
            checked: true

        },
        {
            pictureUrl: LionPic,
            eventTitle: "Лежать",
            eventDescription: "Иди лежать!",
            id: crypto.randomUUID(),
            checked: true
        },
        {
            pictureUrl: WorkPic,
            eventTitle: "Работать",
            eventDescription: "Иди работать!",
            id: crypto.randomUUID(),
            checked: true
        }
    ]
export const HeadsOrTales = [
    {
        pictureUrl: "https://avatars.mds.yandex.net/i?id=8b6963817db5af38bed0ad6990a1d5b5_l-5228496-images-thumbs&n=13",
        eventTitle: "Орел",
        eventDescription: "Выпал Орел!",
        id: crypto.randomUUID(),
        checked: true

    },
    {
        pictureUrl: "https://sun9-68.userapi.com/impg/Gjwv8Uvoh1G-P_9Yc3rQ7H-TEgB5Gp6Mtwqwkg/n_8OBOrUj7M.jpg?size=604x453&quality=96&sign=f8ae7223ca0b52390d84a6335ef891d5&type=album",
        eventTitle: "Решка",
        eventDescription: "Выпала Решка!",
        id: crypto.randomUUID(),
        checked: true
    },
]

export const cardsReducer = (state: DataType[] = initialState, action: CardsReduserActionType) => {
    switch (action.type) {
        case 'SET_CARDS_TO_DEFAULT': {
            const HREF = window.location.href.split('/')
            localStorage.setItem("dataBase", JSON.stringify(initialState))
            if ( HREF[HREF.length - 1] === 'main' ) {
                return JSON.parse(localStorage.getItem("dataBase") || "[]")
            } else {
                return state
            }
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
            let updatedCardData = state.find(e => e.id === action.id)
            if (updatedCardData) {
                updatedCardData = { ...updatedCardData, pictureUrl: action.URL, eventTitle: action.title, eventDescription: action.Description }
                const newArray = state.map(e => e.id === action.id ? updatedCardData : e)
                localStorage.setItem("dataBase", JSON.stringify(newArray))
                return newArray
            }
            return state
        }
        case 'INSTANCE_START': {
            return HeadsOrTales
        }
        case 'MAIN_PAGE_START': {
            console.log("MAIN_PAGE_START");
            return JSON.parse(localStorage.getItem("dataBase") || "[]")
        }
        default:
            return state
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

export const InstanseStartAC = (): InstanseStartActionType => {
    return { type: 'INSTANCE_START' }
}

export const MainStartAC = (): MainStartActionType => {
    return { type: 'MAIN_PAGE_START' }
}