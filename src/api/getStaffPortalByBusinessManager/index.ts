import { AxiosRequestConfig } from "axios";
import { fetchWithRetries } from "@api/axiosConfig/getDataWithRetries";
import { IStaffPortalByBusinessManager } from "@ptypes/staffPortal.types";

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
