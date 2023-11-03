import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./Restaurant/restaurant-slice";
import { historiqueSlice } from "./Historique/historique-slice";

const store = configureStore({
  reducer: {
    RESTAURANT: restaurantSlice.reducer,
    HISTORIQUE: historiqueSlice.reducer,
  },
});

export default store;
