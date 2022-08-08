import axios from "axios";

const BASE_URL = "https://deckofcardsapi.com/api/deck/";

const API = axios.create({
  baseURL: BASE_URL,
});

export default API;
