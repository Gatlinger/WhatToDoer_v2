import { useDispatch, useSelector } from "react-redux"
import { AppRootStateType } from "../state/store"
import { checkBoxHandlerAC, DataType } from "../state/cardsReduser"
import { CardBox } from "../components/MyCard"
import styled from "styled-components"
import { ArchiveCard } from "../components/ArchiveCard"
import { ArchiveEmptyBlank } from "../components/ArchiveEmptyBlank"

export const ArchivePage = () => {

  const archive = useSelector<AppRootStateType, DataType[]>(state => state.archive)
  const dispatch = useDispatch()

  const checkBoxHandler = (id: string) => {
    dispatch(checkBoxHandlerAC(id))
  }
  return (
    <ArchivePageWrapper>
      <CardBox>
        {archive.length > 0
          ? archive.map((item, index) => {
            return (
              <ArchiveCard
                id={item.id}
                pictureUrl={item.pictureUrl}
                eventTitle={item.eventTitle}
                eventDescription={item.eventDescription}
                checked={item.checked}
                checkBoxHandler={checkBoxHandler}
                backgroundColor={item.backgroundColor}
                color="#FFFFE9"
              />
            )
          })
          : <ArchiveEmptyBlank/>
        }
      </CardBox>
    </ArchivePageWrapper>
  )
}

export const ArchivePageWrapper = styled.div`

  display: flex;
  flex-direction: column;
  position: relative;
  align-items: start;
  justify-self: center;
  justify-content: center;
  padding-top: 20px;

  ${CardBox} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-self: center;
    justify-content: center;
  }

  @media screen and (max-width: 576px){
    position: relative;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: start;
  }

  @media screen and (max-width: 1024px) and (min-width: 577px){
    position: relative;
    flex-direction: column;
    width: 66%;
    align-items: center;
    justify-content: start;
  }
`