import {createSlice } from '@reduxjs/toolkit'
export const userSlice = createSlice({


    name:'user',
    initialState:{
      name:'hằng',
      age:'15',
      avt:'https://th.bing.com/th/id/OIP.tIR6ElZTErCcEmngmYtT7wHaGP?pid=ImgDet&rs=1',
    //   avt:'https://th.bing.com/th/id/R.02ea75dbfdafa278d78aa1caf52d6e4c?rik=p8FoHNWaOnXwZA&pid=ImgRaw&r=0',
      bio:'bio'
    },
    reducers:{
        update:(state,action)=>{
            state.name = action.payload.name;
            state.age = action.payload.age ; 
            state.avt = action.payload.avt ;
            state.bio = action.payload.bio;
            
        }
    }
    
});

export const {update} = userSlice.actions;
export default userSlice.reducer;