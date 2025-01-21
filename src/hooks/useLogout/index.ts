import { useAuth0 } from "@auth0/auth0-react";

const useLogout = () => {
  const { logout } = useAuth0();

  const handleLogout = () => {
    const redirect_uri = window.location.origin;
    localStorage.clear();
    logout({ logoutParams: { returnTo: redirect_uri } });
  };

  return { handleLogout };
};

export { useLogout };
