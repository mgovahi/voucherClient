import { createSlice } from "@reduxjs/toolkit";

const dialogSlice = createSlice({
  name: "dialog",
  initialState: {
    state: false,
    options: {
      children: "Hi",
    },
  },
  reducers: {
    openDialog: (state, action) => {
      state.state = true;
      state.options = action.payload;
    },
    closeDialog: (state, action) => {
      state.state = false;
    },
  },
});

export const { openDialog, closeDialog } = dialogSlice.actions;

export const selectFuseDialogState = ({ mv }) => mv.dialog.state;

export const selectFuseDialogOptions = ({ mv }) => mv.dialog.options;

export default dialogSlice.reducer;
