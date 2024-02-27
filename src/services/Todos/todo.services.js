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
  async postTodo(title) {
    return await axios.post(
      `${import.meta.env.VITE_APP_API_URL}/${API_KEYS.endOfUrl}`,
      {
        title: title,
        userId: 1,
        completed: false,
      }
    );
  },
};
