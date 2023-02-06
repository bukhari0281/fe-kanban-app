import React, { useEffect, useState } from "react";
import { TodoCards } from "../cards/TodoCards";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";

export const TodoDoneSection = ({ setSelectedTodo, setOpenEditModal }) => {
  const [todos, setTodos] = useState([]);
  const { data: todoData, error, mutate } = useSWR("/todos", fetcher);

  useEffect(() => {
    if (todoData?.data) {
      setTodos(() =>
        todoData?.data?.filter((item) => item?.is_completed === true)
      );
    }
  }, [todoData]);

  return (
    <div className="p-5 flex flex-col gap-5">
      <h1 className="text-3xl mb-2">Todo Done</h1>
      <div className="flex flex-col gap-2">
        {todos?.length > 0 ? (
          todos?.map((item, idx) => (
            <TodoCards
              isDone={true}
              key={idx}
              data={item}
              mutate={mutate}
              setSelectedTodo={setSelectedTodo}
              setOpenEditModal={setOpenEditModal}
            />
          ))
        ) : (
          <div>Data is empty</div>
        )}
      </div>
    </div>
  );
};
