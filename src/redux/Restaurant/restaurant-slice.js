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
    menuModal: false,
    annonceModal: false,
  },
  reducers: {
    openMenuModal: (currentState, action) => {
      currentState.menuModal = true;
      console.log(action.payload);
    },
    openAnnounceModal: (currentState, action) => {
      currentState.annonceModal = true;
    },
    closeMenuModal: (currentState) => {
      currentState.menuModal = false;
    },
    closeAnnounceModal: (currentState) => {
      currentState.annonceModal = false;
    },

    loginAction: (currentState, action) => {
      currentState.connected = true;
    },
    logOutAction: (currentState, action) => {
      currentState.connected = false;
    },
    addAdminInfoAction: (currentState, action) => {
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

      const updatedMenu = action.payload;

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
    modifyAnnonce: (currentState, action) => {
      const idAnnonce = action.payload.id;
      const updatedAnnonce = action.payload;
      const idToModify = currentState.annonce.findIndex(
        (annonce) => annonce.id === Number(idAnnonce)
      );
      const annonce = [...currentState.annonce];
      annonce[idToModify] = updatedAnnonce;
      return {
        ...currentState,
        annonce: annonce,
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
  loginAction,
  logOutAction,
  openAnnounceModal,
  openMenuModal,
  closeAnnounceModal,
  closeMenuModal,
  modifyAnnonce,
} = restaurantSlice.actions;
