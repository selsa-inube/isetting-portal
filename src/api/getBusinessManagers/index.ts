import { AxiosRequestConfig } from "axios";
import { fetchWithRetries } from "@api/axiosConfig/getDataWithRetries";
import { IBusinessManagers } from "@ptypes/staffPortal.types";

const getBusinessManagers = async (
  businessManagerId: string
): Promise<IBusinessManagers> => {
  const config: AxiosRequestConfig = {
    headers: {
      "X-Action": "SearchByIdBusinessManager",
    },
  };
  return fetchWithRetries<IBusinessManagers>(
    `/business-managers/${businessManagerId}`,
    config
  );
};

export { getBusinessManagers };
