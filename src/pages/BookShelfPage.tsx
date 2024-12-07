import { useDispatch, useSelector } from "react-redux"
import { AppMainBox } from "../App"
import { MyCard } from "../components/MyCard"
import { MainPageWrapper } from "./MainPage"
import { AppRootStateType } from "../state/store"
import { checkBoxHandlerAC } from "../state/cardsReduser"
import { BookShelfType } from "../state/bookSelfReduser"
import styled from "styled-components"

export const BookShelfPage = () => {
    const bookshelf = useSelector<AppRootStateType, BookShelfType>(state => state.bookshelf)
    const dispatch = useDispatch()
    const checkBoxHandler = (id: string) => {
        dispatch(checkBoxHandlerAC(id))
    }

    return (
            <BookShelfPageWrapper>
                <AppMainBox>
                    {bookshelf.map((item, index) => {
                        return (
                            <MyCard
                                pageVariant={'instance'}
                                id={item.id}
                                author={item.author}
                                pictureUrl={item.pictureUrl}
                                eventTitle={item.title}
                                eventDescription={item.description}
                                checkBoxHandler={checkBoxHandler}
                            />
                        )
                    })}
                </AppMainBox>
            </BookShelfPageWrapper>
    )
}

const BookShelfPageWrapper = styled.div`
width: 100%;
align-items: center;
justify-content: center;

`