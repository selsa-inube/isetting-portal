import { AxiosRequestConfig } from "axios";
import { IBusinessManagers } from "@ptypes/staffPortal.types";
import { fetchWithRetries } from "@api/isaas/axiosConfig/getDataWithRetries";

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
