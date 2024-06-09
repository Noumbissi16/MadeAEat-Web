import axios from "axios";
import { nonAuthAxios } from "./config";

export class MenuApi {
  static async addMenu(name, price, description, image) {
    const formData = new FormData();
    formData.append("imageMenu", image);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    const response = await nonAuthAxios.post("/restaurant/menu", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  }

  static async getSingleMenu(idMenu) {
    const menu = await nonAuthAxios.get(idMenu, {});
    return menu.data;
  }

  static async fetchAllMenuApi() {
    const menus = await nonAuthAxios.get("/restaurant/menus");
    return menus.data;
  }

  static async updateMenuById(idMenu, menuToModify) {
    const menu = await nonAuthAxios.patch(
      `/restaurant/menu/${idMenu}`,
      {
        menu: menuToModify,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return menu.data;
  }

  static async deleteMenuById(idMenu) {
    const menu = await nonAuthAxios.delete(`/restaurant/menu/${idMenu}`);
    return menu.data;
  }
}
