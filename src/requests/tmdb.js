import axios from "axios";
import { API_URL } from "../data/configs";

const tmdb = axios.create({
  baseURL: API_URL,
});

export default tmdb;
