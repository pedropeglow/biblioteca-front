import axios from "axios";
const API = axios.create({
  baseURL: "http://localhost:3030/api",
});

export default API;
