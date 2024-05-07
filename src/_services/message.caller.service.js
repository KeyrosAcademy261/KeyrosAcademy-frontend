import axios from "axios";

export const AxiosMessage = axios.create({
  baseURL: "http://localhost:8000/messages",
});
