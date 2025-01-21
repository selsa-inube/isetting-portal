import React from "react";
import { useLogout } from "@hooks/useLogout";
import { Home } from "@pages/home";

const Logout = () => {
  const { handleLogout } = useLogout();

  React.useEffect(() => {
    handleLogout();
  }, [handleLogout]);

  return <Home />;
};

export { Logout };
