// Write your code here
import {ListContainer, Title, TakeNote} from './styledComponents'

const commentItem = props => {
  const {noteDetails} = props
  const {title, takeNote} = noteDetails
  return (
    <ListContainer>
      <Title>{title}</Title>
      <TakeNote>{takeNote}</TakeNote>
    </ListContainer>
  )
}
export default commentItem
