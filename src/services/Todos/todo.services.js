import axios from "axios";
import { API_KEYS } from "./todoConstants";

export const TodoService = {
  async getTodos() {
    return await axios.get(
      `${import.meta.env.VITE_APP_API_URL}/${API_KEYS.endOfUrl}`
    );
  },
  async getTodosById(id) {
    return await axios.get(
      `${import.meta.env.VITE_APP_API_URL}/${API_KEYS.endOfUrl}/${id}`
    );
  },
};
