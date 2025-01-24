import { AxiosRequestConfig } from "axios";
import { IBusinessUnitsPortalStaffId } from "@ptypes/staffBusinessManagersId";
import { fetchWithRetries } from "@api/iportalStaff/axiosConfig/getPortalStaffQuery";

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
