
import styled from "styled-components"
import { Card } from "../componentsFromCard/Card"
import { Picture } from "../componentsFromCard/Picture.styled"
import { Text } from "../componentsFromCard/Text.styled"
import { TextH2 } from "../componentsFromCard/TextH2.styled"

export const ArchiveEmptyBlank = () => {
    return (
        <EmptyBlank >
            <Picture src={"https://sun6-22.userapi.com/s/v1/ig2/jEKG9q3NCcF6BxQt2v-vJUBxll2PqFleIb_tE6vny87zhcTHxWHN5XEJrJPaqKbiGnD-WHUARlHuZ2hB7PjHdAH_.jpg?size=400x0&quality=96&crop=0,15,574,574&ava=1"}/>
            <Text>{'Архив Пуст'}</Text>
            <TextH2 style={{ color: "black" }}>Архив пока пустует!</TextH2>
        </EmptyBlank>
    )
}

export const EmptyBlank = styled(Card)`
  background-color: #FFFFE9;
  margin-top: 30px;

  ${Picture} {
    margin-top: 30px;
  }
`