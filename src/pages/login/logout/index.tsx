import { useEffect } from "react";
import { useLogout } from "@hooks/useLogout";
import { Home } from "@pages/home";

const Logout = () => {
  const { handleLogout } = useLogout();

  useEffect(() => {
    handleLogout();
  }, [handleLogout]);

  return <Home />;
};

export { Logout };
