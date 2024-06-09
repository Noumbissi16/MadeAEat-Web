import axios from "axios";
import { BASE_URL } from "./config";

const url = BASE_URL + "restaurant";

export class AuthAPI {
  static async createAdmin(name, email, password) {
    const response = await axios.post(url, {
      name,
      email,
      password,
    });
    return response.data;
  }
  static async createRestaurant(name, town, location) {
    const response = await axios.post(url, {
      name,
      ville: town,
      location,
    });
    return response.data;
  }

  static async signin(email, nameRestaurant, password) {
    const response = await axios.post(url, {
      email,
      nameRestaurant,
      password,
    });
    return response.data;
  }
}
