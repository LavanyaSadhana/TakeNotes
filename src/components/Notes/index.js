// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'

import {
  MainContainer,
  NotesHeading,
  TitleInput,
  NoteText,
  AddBtn,
  NotesListContainer,
  AddForm,
  EmptyImage,
  EmptyContainer,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [takeNote, setNote] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeNote = event => {
    setNote(event.target.value)
  }

  const onAddNotes = event => {
    event.preventDefault()
    const newNotes = {
      id: uuidv4(),
      title,
      takeNote,
    }
    setNotesList(prevNotesList => [...prevNotesList, newNotes])
    setTitle('')
    setNote('')
  }

  return (
    <MainContainer>
      <NotesHeading>Notes</NotesHeading>
      <AddForm onSubmit={onAddNotes}>
        <TitleInput
          placeholder="Title"
          type="text"
          onChange={onChangeTitle}
          value={title}
        />
        <NoteText
          placeholder="Take a Note..."
          onChange={onChangeNote}
          value={takeNote}
        />
        <AddBtn type="submit">Add</AddBtn>
      </AddForm>
      <NotesListContainer>
        {notesList.length === 0 ? (
          <>
            <EmptyContainer>
              <EmptyImage
                src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
                alt="notes empty"
              />
              <h1>No Notes Yet</h1>
              <p>Notes you add will appear here</p>
            </EmptyContainer>
          </>
        ) : (
          notesList.map(each => <NoteItem key={each.id} noteDetails={each} />)
        )}
      </NotesListContainer>
    </MainContainer>
  )
}
export default Notes
