import { axiosInstance } from "@/service/http/axios.service";

export const updateTodo = async (data, id) => {
  const res = await axiosInstance.patch(`/todos/${id}`, data);

  return res?.data;
};

export const addTodo = async (data, id) => {
  const res = await axiosInstance.post(`/todos/`, data);

  return res?.data;
};

export const deleteTodo = async (id) => {
  const res = await axiosInstance.delete(`/todos/${id}`);

  return res?.data;
};
