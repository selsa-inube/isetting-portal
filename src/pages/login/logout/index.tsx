import { useEffect } from "react";

import { Home } from "@pages/home";
import { UseLogout } from "@hooks/useLogout";

const Logout = () => {
  const { HandleLogout } = UseLogout();

  useEffect(() => {
    HandleLogout();
  }, [HandleLogout]);

  return <Home />;
};

export { Logout };
