import { AxiosRequestConfig } from "axios";
import { IBusinessUnitsPortalStaff } from "@ptypes/staffPortalBusiness.types";
import { fetchWithRetries } from "@api/iportalStaff/axiosConfig/getPortalStaffQuery";

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
