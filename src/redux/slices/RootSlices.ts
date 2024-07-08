import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
  name: 'root',
  initialState: {
    title: 'Title',
    author: 'Author',
    year: 'Year',
    isbn: 'Isbn'
  },
  reducers: {
    chooseTitle: (state, action) => { state.title = action.payload },
    chooseAuthor: (state, action) => { state.author = action.payload },
    chooseYear: (state, action) => { state.year = action.payload },
    chooseIsbn: (state, action) => { state.isbn = action.payload }
  }
});

export const reducer = rootSlice.reducer;
export const { chooseTitle, chooseAuthor, chooseYear, chooseIsbn } = rootSlice.actions;

export {};
