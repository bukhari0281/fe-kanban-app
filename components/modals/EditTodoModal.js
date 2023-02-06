import React from "react";
import { EditTodoForm } from "../forms/EditTodoForm";

export const EditTodoModal = ({ handleClose, data }) => {
  // id
  // fetching todo by id
  // data todo
  return (
    <div className="dark:bg-slate-800/70 fixed inset-0 w-full h-full z-[2] flex flex-col items-center justify-center">
      <div className="dark:bg-slate-600 p-10 rounded-lg shadow-lg relative">
        <button
          className="bg-rose-500 absolute right-3 top-2 rounded-lg p-2 px-3 my-1 "
          onClick={handleClose}
        >
          x
        </button>
        <EditTodoForm handleClose={handleClose} data={data} />
      </div>
    </div>
  );
};
