import { updateTodo } from "@/service/todo/todo.service";
import React from "react";
import { useState } from "react";
import { mutate } from "swr";
import Swal from "sweetalert2";

export const EditTodoForm = ({ handleClose, data }) => {
  const [name, setName] = useState(data?.name ?? "");
  const [note, setNote] = useState(data?.note ?? "");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLoading) {
      setIsLoading(true);

      const payLoad = {
        name: name,
        note: note,
        is_complete: data?.is_complete,
      };

      updateTodo(payLoad, data?.id)
        .then((res) => {
          setName(() => "");
          setNote(() => "");
          mutate("/todos");
          handleClose();
          Swal.fire({
            title: "Succes!",
            text: "memperbarui todo",
            icon: "succes",
            confirmButtonText: "Cool",
          });
        })

        .catch((err) => {
          Swal.fire({
            title: "Failed!",
            text: "gagal memperbarui todo",
            icon: "error",
            confirmButtonText: "Ok",
          });
        })

        .finally(() => {
          setIsLoading(false);
        });
    }
  };
  return (
    <form className="flex flex-col gap-2">
      <div className="flex flex-col gap-1">
        <label className="dark:text-white">Label</label>
        <input
          className="rounded-lg p-3 bg-slate-200 "
          value={name}
          onChange={(e) => setName(() => e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="dark:text-white">Catatan</label>
        <textarea
          rows={3}
          className="rounded-lg p-3 bg-slate-200"
          value={note}
          onChange={(e) => setNote(() => e.target.value)}
        />
      </div>
      <div>
        <button
          className="w-full text-center rounded-lg bg-blue-500 text-white font-semibold text-lg py-2"
          onClick={handleSubmit}
        >
          {isLoading ? "Loading..." : "Edit Data"}
        </button>
      </div>
    </form>
  );
};
