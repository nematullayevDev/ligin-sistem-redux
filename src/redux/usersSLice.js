import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    register: (state, actions) => {
      let coped = JSON.parse(JSON.stringify(state.value));
      coped.push(actions.payload);
      state.value = coped;
    },
  },
});

export const { register } = usersSlice.actions;
export default usersSlice.reducer;
