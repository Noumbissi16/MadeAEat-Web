import { createSlice } from "@reduxjs/toolkit";

export const annonceSlice = createSlice({
  name: "annonceSlice",
  initialState: {
    annonces: [],
    annonceModal: false,
  },
  reducers: {
    addAnnonceAction: (currentState, action) => {
      currentState.annonces = action.payload;
    },
    openAnnounceModal: (currentState, action) => {
      currentState.annonceModal = true;
    },

    closeAnnounceModal: (currentState) => {
      currentState.annonceModal = false;
    },
    deleteAnnonceAction: (currentState, action) => {
      const annonceId = action.payload.id;
      const idToDelete = currentState.annonce.findIndex(
        (annonce) => annonce.id === annonceId
      );

      const annonce = [...currentState.annonce];
      annonce.splice(idToDelete, 1);
      currentState.annonce = annonce;
      //   Don't return in actions
      // return {
      //   ...currentState,
      //   annonce: annonce,
      // };
    },
    modifyAnnonce: (currentState, action) => {
      const idAnnonce = action.payload.id;
      const updatedAnnonce = action.payload;
      const idToModify = currentState.annonce.findIndex(
        (annonce) => annonce.id === idAnnonce
      );
      const annonce = [...currentState.annonce];
      annonce[idToModify] = updatedAnnonce;
      currentState.annonce = annonce;

      //   Don't return in actions

      // return {
      //   ...currentState,
      //   annonce: annonce,
      // };
    },
  },
});

export const {
  addAnnonceAction,
  closeAnnounceModal,
  deleteAnnonceAction,
  modifyAnnonce,
  openAnnounceModal,
} = annonceSlice.actions;
