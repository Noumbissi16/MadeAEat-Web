import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/data/menuData";
import annonceData from "../../utils/data/AnnonceData";

export const restaurantSlice = createSlice({
  name: "restaurantSlice",
  initialState: {
    connected: true,
    adminInfo: {},
    restaurantInfo: {},
    menus: data,
    annonce: annonceData,
  },
  reducers: {
    addAdminInfoAction: (currentState, action) => {
      // currentState.connected = true;
      currentState.adminInfo = action.payload;
    },
    addRestaurantInfoAction: (currentState, action) => {
      currentState.restaurantInfo = action.payload;
    },
    addMenuAction: (currentState, action) => {
      currentState.menus.push(action.payload);
    },
    addAnnonceAction: (currentState, action) => {
      currentState.annonce.push(action.payload);
    },
    modifyMenu: (currentState, action) => {
      const idMenu = action.payload.id;

      const updatedMenu = action.payload.menu;

      const idToModif = currentState.menus.findIndex(
        (menu) => menu.id === Number(idMenu)
      );

      const menu = [...currentState.menus];

      menu[idToModif] = updatedMenu;

      return {
        ...currentState,
        menus: menu,
      };
    },
  },
});

export const {
  addRestaurantInfoAction,
  addAdminInfoAction,
  addMenuAction,
  addAnnonceAction,
  modifyMenu,
} = restaurantSlice.actions;
