import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface productState{
  value:Array<object>;
}

const initialState:productState={
  value:[]
}
const storeSlice = createSlice({
  name: "add data",
  initialState,
  reducers: {
    addProductdata: (state, action:PayloadAction<object>) => {
      console.log(action, "action");
      state.value.push(action.payload);
 

    },
  },
});

export const { addProductdata } = storeSlice.actions;
export default storeSlice.reducer;
