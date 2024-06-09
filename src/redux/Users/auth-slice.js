import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    connected: false,
    adminInfo: {},
    restaurantInfo: {},
  },
  reducers: {
    logOutAction: (currentState, action) => {
      currentState.connected = false;
    },
    addAdminInfoAction: (currentState, action) => {
      currentState.adminInfo = action.payload;
    },
    addRestaurantInfoAction: (currentState, action) => {
      currentState.restaurantInfo = action.payload;
      currentState.connected = true;
    },
  },
});

export const { addAdminInfoAction, addRestaurantInfoAction, logOutAction } =
  authSlice.actions;
