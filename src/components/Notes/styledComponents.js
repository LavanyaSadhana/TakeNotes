// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
`
export const EmptyImage = styled.img`
  width: 200px;
  height: 200px;
  align-self: center;
  text-align: center;
`
export const NotesListContainer = styled.ul`
  list-style-type: none;
  flex-wrap: wrap;
  width: 70%;

  align-items: center;
`
export const NotesHeading = styled.h1`
  color: #4c63b6;
  font-size: 20px;
  font-family: 'Bree Serif';
  text-align: center;
`
export const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 3px 3px 3px 3px #475569;
  width: 70%;
  align-self: center;
  margin-top: 25px;
  padding: 15px;
`
export const TitleInput = styled.input`
  border: none;
  padding: 10px;
  color: #475569;
  font-family: 'roboto';
  margin-top: 10px;
  background-color: none;
  align-self: flex-start;
`
export const NoteText = styled.textarea`
  padding: 10px;
  border: none;
  color: #475569;
  font-family: 'roboto';
  margin-top: 10px;
  align-self: flex-start;
`
export const AddBtn = styled.button`
  color: #fff;
  width: 100px;
  background-color: #4c63b6;
  padding: 5px;
  align-self: flex-end;
`
