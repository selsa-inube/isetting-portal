import { UseLogout } from "@hooks/pages/useLogout";
import { Home } from "@pages/home";

const Logout = () => {
  UseLogout();
  return <Home />;
};

export { Logout };
