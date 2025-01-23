import { AxiosRequestConfig } from "axios";
import { fetchWithRetries } from "@api/axiosConfig/getPortalStaffQuery";
import { IBusinessUnitsPortalStaffId } from "@ptypes/staffBusinessManagersId";

const getBusinessManagersId = async (
  publiCode: string
): Promise<IBusinessUnitsPortalStaffId[]> => {
  const queryParams = new URLSearchParams({
    publiCode: publiCode,
  });
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchAllBusinessManagerIportalStaff",
    },
  };
  return fetchWithRetries<IBusinessUnitsPortalStaffId[]>(
    `/staffs?${queryParams.toString()}`,
    config
  );
};

export { getBusinessManagersId };
