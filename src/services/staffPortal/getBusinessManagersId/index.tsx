import { AxiosRequestConfig } from "axios";
import { IBusinessUnitsPortalStaffId } from "@ptypes/staffBusinessManagersId";
import { getWithRetries } from "@services/core/getWithRetries";
import { axiosInstance } from "@api/iportalStaff";
import { mapBusinessUnitsPortalStaffToEntities } from "./mappers";

const getBusinessManagersId = async (): Promise<
  IBusinessUnitsPortalStaffId[]
> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchAllMission",
    },
  };
  const data: IBusinessUnitsPortalStaffId[] = await getWithRetries<
    IBusinessUnitsPortalStaffId[]
  >(axiosInstance, `/missions`, config);
  return Array.isArray(data) ? mapBusinessUnitsPortalStaffToEntities(data) : [];
};

export { getBusinessManagersId };
