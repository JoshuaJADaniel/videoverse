import axios from "axios";
import { TMDB_URL } from "../data/configs";

const tmdb = axios.create({
  baseURL: TMDB_URL,
});

export default tmdb;
