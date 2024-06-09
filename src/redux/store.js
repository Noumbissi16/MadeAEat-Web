import { configureStore } from "@reduxjs/toolkit";
import { historiqueSlice } from "./Historique/historique-slice";
import { authSlice } from "./Users/auth-slice";
import { menuSlice } from "./Restaurant/menu-slice";
import { annonceSlice } from "./Restaurant/annonce-slice";

const store = configureStore({
  reducer: {
    // RESTAURANT: restaurantSlice.reducer,
    AUTH: authSlice.reducer,
    MENU: menuSlice.reducer,
    ANNONCE: annonceSlice.reducer,
    HISTORIQUE: historiqueSlice.reducer,
  },
});

export default store;
