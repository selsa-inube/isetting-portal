import { AxiosRequestConfig } from "axios";
import { fetchWithRetries } from "@api/axiosConfig/getPortalStaffQuery";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortalBusiness.types";

const getBusinessUnitsPortalStaff = async (
  portalPublicCode: string,
  userAccount: string
): Promise<IBusinessUnitsPortalStaff[]> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchBusinessUnitsForAnOfficer",
    },
  };
  return fetchWithRetries<IBusinessUnitsPortalStaff[]>(
    `/business-units-portal-staff/${userAccount}/${portalPublicCode}`,
    config
  );
};

export { getBusinessUnitsPortalStaff };
