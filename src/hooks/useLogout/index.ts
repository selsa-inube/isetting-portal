import { useAuth0 } from "@auth0/auth0-react";

const UseLogout = () => {
  const { logout } = useAuth0();

  const HandleLogout = () => {
    const redirect_uri = window.location.origin;
    localStorage.clear();
    logout({ logoutParams: { returnTo: redirect_uri } });
  };

  return { HandleLogout };
};

export { UseLogout };
