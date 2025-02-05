import { UseAuthRedirect } from "@hooks/authentication/useAuthRedirect";
import { UseBusinessManagers } from "../useBusinessManagers";
import { UsePortalData } from "../usePortalData";

const UsePortalManager = () => {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const portalCode = params.get("portal");

  const { portalData, hasError: portalError } = UsePortalData(portalCode);
  const { businessManagersData, hasError: businessError } =
    UseBusinessManagers(portalData);

  const {
    hasError: authError,
    isLoading,
    isAuthenticated,
  } = UseAuthRedirect(portalData, businessManagersData, portalCode);

  const hasError = portalError || businessError || authError;

  return {
    portalData,
    businessManagersData,
    hasError,
    isLoading,
    isAuthenticated,
  };
};

export { UsePortalManager };
