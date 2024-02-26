import { useQuery } from "@tanstack/react-query";
import { TodoService } from "../services";

const { getTodos, getTodosById } = TodoService;
export const useTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
    // enabled: true,     // мы можем показать данные при определенном условии
    select: ({ data }) => data,
  });
};

const todoById = 1;

export const useTodosById = () => {
  return useQuery({
    queryKey: ["todos", todoById],
    queryFn: () => {
      return getTodosById(todoById);
    },
    select: ({ data }) => data,
  });
};
