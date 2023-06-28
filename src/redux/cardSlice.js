import { createSlice } from "@reduxjs/toolkit";
export const cardSlice = createSlice({
  name: "card",
  initialState: {
    cards: [{ title: "title", descriptions: "descriptions" 
, theme:""
 }],
  },
  reducers: {
    addCard: (state, action) => {
      // state.title : action.payload.title
      state.cards = [...state.cards, action.payload];
    },
  },
});

export const { addCard } = cardSlice.actions;
export default cardSlice.reducer;
