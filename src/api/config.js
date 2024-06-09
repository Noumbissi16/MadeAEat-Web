import axios from "axios";

// export const BASE_URL = "https://api-madeaeat.vercel.app/api/v1";
export const BASE_URL = "http://localhost:8000/api/v1";

const nonAuthAxios = axios.create({
  // For request that requires the Authorization header with the token
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWM4OTdkNmE2MTVkZjljZDRjMjdmMGUiLCJpYXQiOjE3MTQ5NjU1NzgsImV4cCI6MTcxNzU1NzU3OH0.74nlKA6FE45qeAvmah20PCPEZbHr7n3uAy1Ow4jfOXU`,
    Accept: "application/json",
  },
});

export { nonAuthAxios };
