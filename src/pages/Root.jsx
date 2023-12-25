import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Dialog from "../components/Dialog";
import { useState } from "react";

const Root = () => {
  const [dialogOpen, setDialogOpen] = useState(true);

  const toggleDialog = () => {
    setDialogOpen(!dialogOpen);
    console.log("clicou no botão");
  };

  return (
    <div
      className={`h-screen w-screen flex flex-col items-center bg-gradient-to-br from-neon-dark to-neon-bg font-roboto text-gray-200`}
    >
      <NavBar toggleDialog={toggleDialog} />
      <Dialog status={dialogOpen} />
      <Outlet />
    </div>
  );
};

export default Root;
