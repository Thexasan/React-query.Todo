import { useQuery } from "@tanstack/react-query";
import { TodoService } from "../services";
import { queryKeys } from "../shared";

const { getTodos, getTodosById } = TodoService;

export const useTodos = () => {
  return useQuery({
    queryKey: queryKeys.Todos,
    queryFn: getTodos,
    // enabled: true,     // мы можем показать данные при определенном условии
    select: ({ data }) => data,
  });
};

const todoById = 1;

export const useTodosById = () => {
  return useQuery({
    queryKey: [...queryKeys.Todos, todoById],
    queryFn: () => {
      return getTodosById(todoById);
    },
    select: ({ data }) => data,
  });
};
