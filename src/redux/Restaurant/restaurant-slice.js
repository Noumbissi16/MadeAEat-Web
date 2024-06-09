import { createSlice } from "@reduxjs/toolkit";

export const restaurantSlice = createSlice({
  name: "restaurantSlice",
  initialState: {
    // connected: false,
    // adminInfo: {},
    // restaurantInfo: {},
    // menus: [],
    // menuModal: false,

    annonce: [],
    annonceModal: false,
  },
  reducers: {
    // openMenuModal: (currentState, action) => {
    //   currentState.menuModal = true;
    //   console.log(action.payload);
    // },
    // closeMenuModal: (currentState) => {
    //   currentState.menuModal = false;
    // },
    // loginAction: (currentState, action) => {
    //   currentState.connected = true;
    // },
    // logOutAction: (currentState, action) => {
    //   currentState.connected = false;
    // },
    // addAdminInfoAction: (currentState, action) => {
    //   currentState.adminInfo = action.payload;
    //   currentState.connected = true;
    // },
    // addRestaurantInfoAction: (currentState, action) => {
    //   currentState.restaurantInfo = action.payload;
    // },
    // addMenuAction: (currentState, action) => {
    //   const menu = action.payload;
    //   // console.log(menu);
    //   currentState.menus.push(menu);
    // },
    // modifyMenu: (currentState, action) => {
    //   const idMenu = action.payload.id;
    //   const updatedMenu = {
    //     price: action.payload.price,
    //     name: action.payload.name,
    //     desc: action.payload.desc,
    //     image: action.payload.image,
    //     id: action.payload.id,
    //   };
    //   const idToModif = currentState.menus.findIndex(
    //     (menu) => menu.id === idMenu
    //   );
    //   const menu = [...currentState.menus];
    //   menu[idToModif] = updatedMenu;
    //   return {
    //     ...currentState,
    //     menus: menu,
    //   };
    // },
    // deleteMenuAction: (currentState, action) => {
    //   const idMenu = action.payload.id;
    //   const idToDelete = currentState.menus.findIndex(
    //     (menu) => menu.id === idMenu
    //   );
    //   const Menu = [...currentState.menus];
    //   Menu.splice(idToDelete, 1);
    //   return {
    //     ...currentState,
    //     menus: Menu,
    //   };
    // },
    // addAnnonceAction: (currentState, action) => {
    //   const annonce = { ...action.payload, id: Date.now() };
    //   currentState.annonce.push(annonce);
    // },
    // openAnnounceModal: (currentState, action) => {
    //   currentState.annonceModal = true;
    // },
    // closeAnnounceModal: (currentState) => {
    //   currentState.annonceModal = false;
    // },
    // deleteAnnonceAction: (currentState, action) => {
    //   const annonceId = action.payload.id;
    //   const idToDelete = currentState.annonce.findIndex(
    //     (annonce) => annonce.id === annonceId
    //   );
    //   const annonce = [...currentState.annonce];
    //   annonce.splice(idToDelete, 1);
    //   // return {
    //   //   ...currentState,
    //   //   annonce: annonce,
    //   // };
    // },
    // modifyAnnonce: (currentState, action) => {
    //   const idAnnonce = action.payload.id;
    //   const updatedAnnonce = action.payload;
    //   const idToModify = currentState.annonce.findIndex(
    //     (annonce) => annonce.id === idAnnonce
    //   );
    //   const annonce = [...currentState.annonce];
    //   annonce[idToModify] = updatedAnnonce;
    //   // return {
    //   //   ...currentState,
    //   //   annonce: annonce,
    //   // };
    // },
    // getAllMenu: (currentState, action) => {
    //   currentState.menus = action.payload;
    // },
  },
});

// export const {
//   // addRestaurantInfoAction,
//   // addAdminInfoAction,
//   // loginAction,
//   // logOutAction,
//   //
//   // openMenuModal,
//   // addMenuAction,
//   // getAllMenu,
//   // modifyMenu,
//   // closeMenuModal,
//   // deleteMenuAction,
//   //
//   // deleteAnnonceAction,
//   // openAnnounceModal,
//   // addAnnonceAction,
//   // modifyAnnonce,
//   // closeAnnounceModal,
//   //
// } = restaurantSlice.actions;
