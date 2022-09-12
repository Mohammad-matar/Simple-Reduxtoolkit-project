import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import reservationsReducer from "../features/reservationSlice";
// import customerReducer from "../features/reservationSlice";

interface CustomerState {
  value: Customer[];
}

interface AddFoodToCystomerPayload {
  food: string;
  id: string;
}

interface Customer {
  id: string;
  name: string;
  food: string[];
}

const initialState: CustomerState = {
  value: [],
};

export const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload);
    },
    addFoodToCustomer: (
      state,
      action: PayloadAction<AddFoodToCystomerPayload>
    ) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      });
    },
  },
});

export const { addCustomer, addFoodToCustomer } = customerSlice.actions;

export default customerSlice.reducer;
