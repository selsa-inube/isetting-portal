import { AxiosRequestConfig } from "axios";
import { IStaffPortalByBusinessManager } from "@ptypes/staffPortal.types";
import { fetchWithRetries } from "@api/isaas/axiosConfig/getDataWithRetries";

const getStaffPortalByBusinessManager = async (
  portalCode: string
): Promise<IStaffPortalByBusinessManager[]> => {
  const queryParams = new URLSearchParams({
    staffPortalId: portalCode,
  });
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchAllStaffPortalsByBusinessManager",
    },
  };
  return fetchWithRetries<IStaffPortalByBusinessManager[]>(
    `/staff-portals-by-business-manager?${queryParams.toString()}`,
    config
  );
};

export { getStaffPortalByBusinessManager };
