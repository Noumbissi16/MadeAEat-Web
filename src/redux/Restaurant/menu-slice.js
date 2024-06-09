import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menuSlice",
  initialState: {
    menus: [],
    menuModal: false,
  },
  reducers: {
    getAllMenu: (currentState, action) => {
      currentState.menus = action.payload;
    },
    openMenuModal: (currentState, action) => {
      currentState.menuModal = true;
    },
    closeMenuModal: (currentState) => {
      currentState.menuModal = false;
    },
    addMenuAction: (currentState, action) => {
      const menu = action.payload;
      currentState.menus.push(menu);
    },

    modifyMenu: (currentState, action) => {
      const idMenu = action.payload.id;

      const updatedMenu = {
        price: action.payload.price,
        name: action.payload.name,
        desc: action.payload.desc,
        image: action.payload.image,
        id: action.payload.id,
      };

      const idToModif = currentState.menus.findIndex(
        (menu) => menu._id === idMenu
      );

      const menu = [...currentState.menus];

      menu[idToModif] = updatedMenu;
      currentState.menus = menu;

      //   You don't return in an action
      //   return {
      //     ...currentState,
      //     menus: menu,
      //   };
    },
    deleteMenuAction: (currentState, action) => {
      const idMenu = action.payload.id;
      const idToDelete = currentState.menus.findIndex(
        (menu) => menu._id === idMenu
      );
      const Menu = [...currentState.menus];
      Menu.splice(idToDelete, 1);
      currentState.menus = Menu;

      //   You don't return in an action
      //   return {
      //     ...currentState,
      //     menus: Menu,
      //   };
    },
  },
});

export const {
  deleteMenuAction,
  modifyMenu,
  addMenuAction,
  closeMenuModal,
  getAllMenu,
  openMenuModal,
} = menuSlice.actions;
