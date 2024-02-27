import { useMutation, useQuery } from "@tanstack/react-query";
import { TodoService } from "../services";
import { queryKeys } from "../shared";

const { getTodos, getTodosById, postTodo } = TodoService;

export const useTodos = () => {
  return useQuery({
    queryKey: queryKeys.Todos,
    queryFn: getTodos,
    // enabled: true,     // мы можем показать данные при определенном условии
    select: ({ data }) => data,
  });
};

const todoById = Math.floor(Math.random() * 200);

export const useTodosById = () => {
  return useQuery({
    queryKey: [...queryKeys.Todos, todoById],
    queryFn: () => {
      return getTodosById(todoById);
    },
    select: ({ data }) => data,
  });
};

export const usePostTodo = () => {
  return useMutation({
    mutationKey: ["create todo"],
    mutationFn: (title) => {
      return postTodo(title);
    },
    onSuccess: () => {
      return alert("successfull");
    },
  });
};
