import { AxiosRequestConfig } from "axios";
import { IBusinessUnitsPortalStaffId } from "@ptypes/staffBusinessManagersId";
import { getWithRetries } from "@services/core/getWithRetries";
import { axiosInstance } from "@api/iportalStaff";
import { mapBusinessUnitsPortalStaffToEntities } from "./mappers";

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
  const data: IBusinessUnitsPortalStaffId[] = await getWithRetries<
    IBusinessUnitsPortalStaffId[]
  >(axiosInstance, `/staffs?${queryParams.toString()}`, config);
  return Array.isArray(data) ? mapBusinessUnitsPortalStaffToEntities(data) : [];
};

export { getBusinessManagersId };
