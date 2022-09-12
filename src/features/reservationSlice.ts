import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReservationState {
  value: string[];
}

const initialState: ReservationState = {
  value: [],
};

export const reservationSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    //remove a reservation
    removeReservation: (state, action: PayloadAction<number>) => {
      //we use splice when we want to use 2 parametere
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addReservation,removeReservation } = reservationSlice.actions;

export default reservationSlice.reducer;
