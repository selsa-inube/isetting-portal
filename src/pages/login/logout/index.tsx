import { Home } from "@pages/home";
import { UseLogout } from "@hooks/useLogout";

const Logout = () => {
  UseLogout();
  return <Home />;
};

export { Logout };
