import React, { createElement, useState } from "react";
import AdminFormModal from "../admin/AdminFormModal";

const AdminEditModalBtn = ({ as = "button", className = "", ...props }) => {
  const [open, setOpen] = useState(false);

  const close = () => {
    setOpen(false);
  };

  return (
    <>
      <AdminFormModal open={open} close={close} mode="edit" />
      {createElement(as, {
        type: "button",
        onClick: () => setOpen(true),
        className: className,
        ...props,
      })}
    </>
  );
};

export default AdminEditModalBtn;
