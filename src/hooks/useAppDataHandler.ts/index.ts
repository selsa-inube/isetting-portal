import { usePortalData } from "@hooks/usePortalData";
import { useBusinessManagers } from "@hooks/useBusinessManagers";
import { useAuthRedirect } from "@hooks/useAuthRedirect";

const useAppDataHandler = () => {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const portalCode = params.get("portal");

  const { portalData, hasError: portalError } = usePortalData(portalCode);
  const { businessManagersData, hasError: businessError } =
    useBusinessManagers(portalData);

  const {
    hasError: authError,
    isLoading,
    isAuthenticated,
  } = useAuthRedirect(portalData, businessManagersData, portalCode);

  const hasError = portalError || businessError || authError;

  return {
    portalData,
    businessManagersData,
    hasError,
    isLoading,
    isAuthenticated,
  };
};

export { useAppDataHandler };
