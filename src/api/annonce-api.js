import axios from "axios";
import { BASE_URL, nonAuthAxios } from "./config";

const annonceUrl = BASE_URL + "/restaurant/annonce";

export class AnnonceApi {
  static async getAllAnnonce() {
    const annonces = await nonAuthAxios.get("/restaurant/annonces");
    return annonces.data;
  }

  static async getSingleAnnonce(annonceId) {
    const annonce = await nonAuthAxios.get(`restaurant/annonce/${annonceId}`);
    return annonce.data;
  }

  static async createAnnonce(annonce) {
    const annonceResult = await axios.post(annonceUrl, annonce, {
      headers: "",
    });
    return annonceResult.data;
  }

  static async updateAnnonceById(annonceId, annonce) {
    const updatedAnnonce = await nonAuthAxios.patch(
      `restaurant/annonce/${annonceId}`,
      {
        annonce,
      }
    );

    return updatedAnnonce.data;
  }
  static async deleteAnnonceById(annonceId) {
    const result = await nonAuthAxios.delete(`restaurant/annonce/${annonceId}`);

    return result.data;
  }
}
