import {createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({


    name:'user',
    initialState:{
      name:'hằng',
      age:'15',
      avt:'avt'
    },
    reducers:{
        update:(state,action)=>{
            state.name = action.payload.name;
            state.age = action.payload.age ; 
            state.avt = action.payload.avt ;
            
        }
    }
    
});

export const {update} = userSlice.actions;
export default userSlice.reducer;