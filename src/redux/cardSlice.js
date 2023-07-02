import { createSlice } from "@reduxjs/toolkit";
export const cardSlice = createSlice({
  name: "card",

  initialState: {
    cards: [{ title: "title", description: "description", color: "black" }],
  },
  reducers: {
    addCard: (state, action) => {
      // state.title : action.payload.title

      state.cards = [...state.cards, action.payload];
    },
    updateCard: (state, action) => {
      const { index, title, description, color } = action.payload;
      console.log(state.cards[index]);
      const existingCard = state.cards[index];
      if (existingCard) {
        existingCard.title = title;
        existingCard.description= description;
        existingCard.color = color;
      }
    },
    deleteCard:(state,action)=>{
      const index  = action.payload;
      // console.log(index);
      // const existingCard = state.cards[index];
      if (index >= 0 && index < state.cards.length) {
        state.cards.splice(index, 1);
      }
      
    }
  },
});

export const { addCard, updateCard , deleteCard} = cardSlice.actions;
export default cardSlice.reducer;
